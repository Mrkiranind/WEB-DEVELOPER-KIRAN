import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const {
      planId,
      planName,
      amount,
      customerName,
      customerEmail,
      customerPhone,
    } = await request.json();

    if (!planId || !customerEmail) {
      return NextResponse.json(
        { error: "Plan ID and Email required" },
        { status: 400 }
      );
    }

    // Razorpay subscription create करो
    const subscription = await razorpay.subscriptions.create({
      plan_id: planId,
      customer_notify: 1,
      quantity: 1,
      total_count: 12,
      notes: {
        customerName,
        customerEmail,
        planName,
      },
    });

    // Database में save करो
    const { error } = await supabaseAdmin
      .from("subscriptions")
      .insert([
        {
          user_email: customerEmail,
          customer_name: customerName,
          customer_phone: customerPhone,
          plan_id: planId,
          plan_name: planName,
          razorpay_subscription_id: subscription.id,
          amount: amount,
          status: "created",
        },
      ]);

    if (error) {
      console.error("DB error:", error);
    }

    return NextResponse.json({
      success: true,
      subscriptionId: subscription.id,
      amount: amount,
    });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: error.message || "Subscription failed" },
      { status: 500 }
    );
  }
}
