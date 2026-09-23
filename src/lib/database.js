import { supabase } from "./supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// सारे templates लाओ
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

// एक specific template लाओ (id convert करके)
export async function getTemplateById(id) {
  const numericId = parseInt(id, 10);
  if (isNaN(numericId)) {
    console.error("Invalid template ID:", id);
    return null;
  }

  const { data, error } = await supabaseAdmin
    .from("templates")
    .select("*")
    .eq("id", numericId)
    .single();

  if (error) {
    console.error("Error fetching template:", error);
    return null;
  }
  return data;
}

// Featured templates लाओ
export async function getFeaturedTemplates() {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("featured", true)
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching featured templates:", error);
    return [];
  }
  return data;
}

// Order save करो
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

// Order ढूंढो payment_id से
export async function getOrderByPaymentId(paymentId) {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("payment_id", paymentId)
    .single();

  if (error) {
    console.error("Error fetching order:", error);
    return null;
  }
  return data;
}

// Customer के सारे orders लाओ
export async function getOrdersByEmail(email) {
  const { data, error } = await supabaseAdmin
    .from("orders")
    .select("*")
    .eq("customer_email", email)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
  return data;
}
