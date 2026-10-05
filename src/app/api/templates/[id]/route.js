import { NextResponse } from "next/server";
import { getTemplateById } from "@/lib/database";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id, 10);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid ID" },
        { status: 400 }
      );
    }

    const template = await getTemplateById(id);

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      template: template,
    });
  } catch (error) {
    console.error("Template fetch error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
