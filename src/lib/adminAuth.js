import { cookies } from "next/headers";

export function isAdminAuthenticated() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin_token");
  return !!token;
}
