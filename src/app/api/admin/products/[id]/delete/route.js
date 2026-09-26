import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request, { params }) {
  try {
    const id = parseInt(params.id, 10);

    // पहले check करो कि orders linked हैं या नहीं
    const { data: linkedOrders, error: checkError } = await supabaseAdmin
      .from("orders")
      .select("id")
      .eq("template_id", id);

    if (checkError) {
      console.error("Error checking orders:", checkError);
    }

    if (linkedOrders && linkedOrders.length > 0) {
      // Orders linked हैं — safe delete
      // पहले orders को null करो template_id
      const { error: updateError } = await supabaseAdmin
        .from("orders")
        .update({ template_id: null })
        .eq("template_id", id);

      if (updateError) {
        console.error("Error unlinking orders:", updateError);
      }
    }

    // अब template delete करो
    const { error } = await supabaseAdmin
      .from("templates")
      .delete()
      .eq("id", id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
