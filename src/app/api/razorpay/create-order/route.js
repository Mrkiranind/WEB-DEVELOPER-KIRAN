import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const { amount, templateId, templateName } = await request.json();

    if (!amount || !templateId) {
      return NextResponse.json(
        { error: "Amount and templateId are required" },
        { status: 400 }
      );
    }

    // Amount को paise में convert करो (₹1 = 100 paise)
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${templateId}_${Date.now()}`,
      notes: {
        templateId: templateId,
        templateName: templateName,
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Razorpay order error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
