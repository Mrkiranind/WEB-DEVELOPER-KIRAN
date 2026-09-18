import { supabase } from "./supabase";

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

// एक specific template लाओ (id से)
export async function getTemplateById(id) {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("id", id)
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
