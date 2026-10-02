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
    const { subscriptionId } = await request.json();

    if (!subscriptionId) {
      return NextResponse.json(
        { error: "Subscription ID required" },
        { status: 400 }
      );
    }

    // Razorpay पर cancel करो
    try {
      await razorpay.subscriptions.cancel(subscriptionId, false);
    } catch (razorpayError) {
      console.error("Razorpay cancel error:", razorpayError);
      // Razorpay पर cancel fail हो, तो भी database update करो
    }

    // Database में update करो
    const { error } = await supabaseAdmin
      .from("subscriptions")
      .update({
        status: "cancelled",
        end_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("razorpay_subscription_id", subscriptionId);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Subscription cancelled successfully",
    });
  } catch (error) {
    console.error("Cancel error:", error);
    return NextResponse.json(
      { error: "Failed to cancel subscription" },
      { status: 500 }
    );
  }
}
