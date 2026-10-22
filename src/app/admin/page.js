import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllTemplatesAdmin } from "@/lib/database";
import { createClient } from "@supabase/supabase-js";
import DeleteButton from "@/components/DeleteButton";

export const dynamic = "force-dynamic";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function AdminDashboard() {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }

  const templates = await getAllTemplatesAdmin();

  // Recent Orders (Last 10)
  const { data: orders } = await supabaseAdmin
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);

  // Subscriptions
  const { data: subscriptions } = await supabaseAdmin
    .from("subscriptions")
    .select("*")
    .order("created_at", { ascending: false });

  // Stats calculate करो
  const totalRevenue = orders?.reduce((sum, o) => sum + (o.amount || 0), 0) || 0;
  const activeSubs = subscriptions?.filter((s) => s.status === "active") || [];
  const monthlySubRevenue = activeSubs.reduce((sum, s) => sum + (s.amount || 0), 0);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, Kiran! Here is your business overview.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/admin/products/new" className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition">
              + Add Template
            </Link>
            <Link href="/admin/orders" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition">
              View All Orders
            </Link>
            <Link href="/" className="border border-gray-700 hover:border-blue-500 px-5 py-2.5 rounded-lg text-sm transition">
              View Site
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">Total Revenue</p>
            <p className="text-3xl font-bold text-green-400">₹{totalRevenue}</p>
            <p className="text-xs text-gray-500 mt-2">From {orders?.length || 0} recent orders</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">Active Subscriptions</p>
            <p className="text-3xl font-bold text-blue-400">{activeSubs.length}</p>
            <p className="text-xs text-gray-500 mt-2">Monthly: ₹{monthlySubRevenue}</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">Total Templates</p>
            <p className="text-3xl font-bold text-purple-400">{templates.length}</p>
            <p className="text-xs text-gray-500 mt-2">Products on website</p>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-gray-400 text-sm mb-1">Total Customers</p>
            <p className="text-3xl font-bold text-orange-400">
              {new Set(orders?.map((o) => o.customer_email)).size || 0}
            </p>
            <p className="text-xs text-gray-500 mt-2">Unique buyers</p>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Recent Orders (Last 10)</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800 text-left text-sm text-gray-400">
                  <tr>
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Template</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.length === 0 && (
                    <tr><td colSpan="4" className="px-4 py-8 text-center text-gray-500">No orders yet.</td></tr>
                  )}
                  {orders?.map((o) => (
                    <tr key={o.id} className="border-b border-gray-800/50 text-sm">
                      <td className="px-4 py-3">
                        <p className="font-medium">{o.customer_name || "Guest"}</p>
                        <p className="text-xs text-gray-500">{o.customer_email}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-400">{o.template_name}</td>
                      <td className="px-4 py-3 text-green-400 font-bold">₹{o.amount}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {new Date(o.created_at).toLocaleDateString("en-IN")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Templates List */}
        <div>
          <h2 className="text-xl font-bold mb-4">Your Templates ({templates.length})</h2>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800 text-left text-sm text-gray-400">
                  <tr>
                    <th className="px-4 py-3">Image</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {templates.map((t) => (
                    <tr key={t.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
                      <td className="px-4 py-3">
                        {t.image_url ? (
                          <img src={t.image_url} alt={t.name} className="w-16 h-10 object-cover rounded" />
                        ) : (
                          <div className="w-16 h-10 bg-gray-800 rounded"></div>
                        )}
                      </td>
                      <td className="px-4 py-3 font-medium">{t.name}</td>
                      <td className="px-4 py-3 text-blue-400">₹{t.price}</td>
                      <td className="px-4 py-3 flex gap-3">
                        <Link href={`/admin/products/${t.id}/edit`} className="text-blue-400 hover:text-blue-300 text-sm">Edit</Link>
                        <DeleteButton id={t.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
