import { NextResponse } from "next/server";
import { verifyAndIncrementDownload } from "@/lib/database";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  try {
    const { token } = params;

    const result = await verifyAndIncrementDownload(token);

    if (!result.valid) {
      return NextResponse.json(
        { error: result.reason },
        { status: 403 }
      );
    }

    // Redirect to actual file URL
    return NextResponse.redirect(result.template.file_url);
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
