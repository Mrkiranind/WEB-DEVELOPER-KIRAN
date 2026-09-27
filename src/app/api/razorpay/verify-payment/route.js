import { NextResponse } from "next/server";
import crypto from "crypto";
import {
  saveOrder,
  createDownloadToken,
} from "@/lib/database";
import { sendPurchaseEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      templateId,
      templateName,
      amount,
      customerName,
      customerEmail,
      customerPhone,
    } = await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Signature verify
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Order save करो
    const order = await saveOrder({
      template_id: templateId,
      template_name: templateName || "Unknown Template",
      amount: amount,
      payment_id: razorpay_payment_id,
      order_id: razorpay_order_id,
      customer_name: customerName || "Guest",
      customer_email: customerEmail || null,
      customer_phone: customerPhone || null,
      status: "paid",
    });

    // Download token बनाओ
    let downloadToken = null;
    if (order && customerEmail) {
      const tokenData = await createDownloadToken({
        orderId: order.id,
        templateId: templateId,
        paymentId: razorpay_payment_id,
        customerEmail: customerEmail,
      });
      downloadToken = tokenData?.token || null;
    }

    // Email भेजो
    if (customerEmail && downloadToken) {
      try {
        await sendPurchaseEmail({
          to: customerEmail,
          customerName: customerName || "Customer",
          templateName: templateName || "Template",
          amount: amount,
          paymentId: razorpay_payment_id,
          downloadToken: downloadToken,
        });
      } catch (emailError) {
        console.error("Email send failed:", emailError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified, order saved, email sent",
      paymentId: razorpay_payment_id,
      templateId: templateId,
      orderId: order?.id || null,
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
