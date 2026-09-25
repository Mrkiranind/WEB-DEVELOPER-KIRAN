import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request, { params }) {
  const id = parseInt(params.id, 10);

  await supabaseAdmin.from("templates").delete().eq("id", id);

  redirect("/admin");
}
