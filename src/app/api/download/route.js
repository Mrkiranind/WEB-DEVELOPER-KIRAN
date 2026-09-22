import { NextResponse } from "next/server";
import { getOrderByPaymentId, getTemplateById } from "@/lib/database";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentId = searchParams.get("payment_id");
    const templateId = searchParams.get("template_id");

    if (!paymentId || !templateId) {
      return NextResponse.json(
        { error: "Payment ID and Template ID required" },
        { status: 400 }
      );
    }

    // Payment verify करो
    const order = await getOrderByPaymentId(paymentId);
    if (!order) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Template details लाओ
    const template = await getTemplateById(parseInt(templateId));
    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    // Return download URL
    return NextResponse.json({
      success: true,
      template_name: template.name,
      file_url: template.file_url,
      customer_name: order.customer_name,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to process download" },
      { status: 500 }
    );
  }
}
