import { supabase } from "./supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ===== PUBLIC FUNCTIONS =====

export async function getAllTemplates() {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching templates:", error);
    return [];
  }
  return data;
}

export async function getTemplateById(id) {
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) return null;

  const { data, error } = await supabaseAdmin
    .from("templates")
    .select("*")
    .eq("id", numericId)
    .single();

  if (error) return null;
  return data;
}

export async function getFeaturedTemplates() {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("featured", true)
    .order("id", { ascending: true });

  if (error) return [];
  return data;
}

// ===== ADMIN FUNCTIONS =====

export async function getAllTemplatesAdmin() {
  const { data, error } = await supabaseAdmin
    .from("templates")
    .select("*")
    .order("id", { ascending: true });

  if (error) return [];
  return data;
}

// ===== ORDER FUNCTIONS =====

export async function saveOrder(orderData) {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .insert([orderData])
    .select()
    .single();

  if (error) {
    console.error("Error saving order:", error);
    return null;
  }
  return data;
}

export async function getOrderByPaymentId(paymentId) {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("payment_id", paymentId)
    .single();

  if (error) return null;
  return data;
}

export async function getOrdersByEmail(email) {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("customer_email", email)
    .order("created_at", { ascending: false });

  if (error) return [];
  return data;
}

// ===== DOWNLOAD TOKEN FUNCTIONS =====

// Secure token generate करो
export async function createDownloadToken({
  orderId,
  templateId,
  paymentId,
  customerEmail,
}) {
  // Random secure token
  const crypto = await import("crypto");
  const token = crypto.randomBytes(32).toString("hex");

  const { data, error } = await supabaseAdmin
    .from("downloads")
    .insert([
      {
        token,
        order_id: orderId,
        template_id: templateId,
        payment_id: paymentId,
        customer_email: customerEmail,
        max_downloads: 3,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Token create error:", error);
    return null;
  }
  return data;
}

// Token verify करो और download count बढ़ाओ
export async function verifyAndIncrementDownload(token) {
  // पहले token ढूंढो
  const { data: download, error } = await supabaseAdmin
    .from("downloads")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !download) {
    return { valid: false, reason: "Token not found" };
  }

  // Expiry check
  if (new Date(download.expires_at) < new Date()) {
    return { valid: false, reason: "Link expired" };
  }

  // Download limit check
  if (download.download_count >= download.max_downloads) {
    return {
      valid: false,
      reason: `Download limit reached (${download.max_downloads} max)`,
    };
  }

  // Count increment करो
  const { data: updated, error: updateError } = await supabaseAdmin
    .from("downloads")
    .update({ download_count: download.download_count + 1 })
    .eq("id", download.id)
    .select()
    .single();

  if (updateError) {
    return { valid: false, reason: "Update failed" };
  }

  // Template लाओ
  const template = await getTemplateById(download.template_id);

  return {
    valid: true,
    template,
    remaining: updated.max_downloads - updated.download_count,
    download,
  };
}

// Token info check करो (बिना increment)
export async function getDownloadInfo(token) {
  const { data, error } = await supabaseAdmin
    .from("downloads")
    .select("*")
    .eq("token", token)
    .single();

  if (error || !data) return null;

  const template = await getTemplateById(data.template_id);

  return {
    ...data,
    template,
    isExpired: new Date(data.expires_at) < new Date(),
    isLimitReached: data.download_count >= data.max_downloads,
    remaining: data.max_downloads - data.download_count,
  };
}
