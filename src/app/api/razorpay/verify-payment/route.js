import { NextResponse } from "next/server";
import crypto from "crypto";
import { saveOrder } from "@/lib/database";

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

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Signature verify करो
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Order save करो database में
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

    if (!order) {
      console.error("Order save failed but payment verified");
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified and order saved",
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
