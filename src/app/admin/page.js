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

  // Orders data
  const { data: orders } = await supabaseAdmin
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  // Subscriptions data
  const { data: subscriptions } = await supabaseAdmin
    .from("subscriptions")
    .select("*")
    .order("created_at", { ascending: false });

  // Stats calculate करो
  const totalOrders = orders?.length || 0;
  const totalRevenue =
    orders?.reduce((sum, o) => sum + (o.amount || 0), 0) || 0;

  const activeSubs =
    subscriptions?.filter((s) => s.status === "active") || [];
  const cancelledSubs =
    subscriptions?.filter((s) => s.status === "cancelled") || [];

  const monthlySubRevenue = activeSubs.reduce(
    (sum, s) => sum + (s.amount || 0),
    0
  );

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, Kiran!</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/products/new"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              + Add Product
            </Link>
            <Link
              href="/"
              className="border border-gray-700 hover:border-blue-500 px-5 py-2.5 rounded-lg text-sm transition"
            >
              View Site
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-5">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-gray-400 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-400">₹{totalRevenue}</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/10 border border-green-500/30 rounded-2xl p-5">
            <div className="text-3xl mb-2">🔄</div>
            <p className="text-gray-400 text-sm">Active Subscriptions</p>
            <p className="text-2xl font-bold text-green-400">
              {activeSubs.length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/30 rounded-2xl p-5">
            <div className="text-3xl mb-2">📊</div>
            <p className="text-gray-400 text-sm">Monthly Sub Revenue</p>
            <p className="text-2xl font-bold text-purple-400">
              ₹{monthlySubRevenue}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/10 border border-orange-500/30 rounded-2xl p-5">
            <div className="text-3xl mb-2">📦</div>
            <p className="text-gray-400 text-sm">Total Products</p>
            <p className="text-2xl font-bold text-orange-400">
              {templates.length}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Link
            href="/admin/subscriptions"
            className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-xl p-5 transition"
          >
            <div className="text-3xl mb-2">🔄</div>
            <h3 className="font-bold mb-1">Manage Subscriptions</h3>
            <p className="text-gray-400 text-sm">
              {subscriptions?.length || 0} total subscriptions
            </p>
          </Link>

          <Link
            href="/admin/orders"
            className="bg-gray-900 border border-gray-800 hover:border-blue-500 rounded-xl p-5 transition"
          >
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-bold mb-1">View Orders</h3>
            <p className="text-gray-400 text-sm">{totalOrders} recent orders</p>
          </Link>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <div className="text-3xl mb-2">👥</div>
            <h3 className="font-bold mb-1">Customers</h3>
            <p className="text-gray-400 text-sm">
              {new Set(orders?.map((o) => o.customer_email) || []).size} unique
            </p>
          </div>
        </div>

        {/* Recent Orders */}
        {orders && orders.length > 0 && (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <Link
                href="/admin/orders"
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                View All →
              </Link>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-800/50 border-b border-gray-800">
                    <tr className="text-left text-sm text-gray-400">
                      <th className="px-4 py-3">Customer</th>
                      <th className="px-4 py-3">Template</th>
                      <th className="px-4 py-3">Amount</th>
                      <th className="px-4 py-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((o) => (
                      <tr
                        key={o.id}
                        className="border-b border-gray-800/50"
                      >
                        <td className="px-4 py-3 text-sm">
                          {o.customer_name || "Guest"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-400">
                          {o.template_name}
                        </td>
                        <td className="px-4 py-3 text-sm text-blue-400 font-semibold">
                          ₹{o.amount}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500">
                          {new Date(o.created_at).toLocaleDateString("en-IN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Products Table */}
        <div>
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-xl font-bold">
              Products ({templates.length})
            </h2>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800">
                  <tr className="text-left text-sm text-gray-400">
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Price</th>
                    <th className="px-4 py-3">Featured</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {templates.length === 0 && (
                    <tr>
                      <td colSpan="6" className="px-4 py-16 text-center">
                        <div className="text-4xl mb-3">📦</div>
                        <p className="text-gray-400 mb-1">
                          अभी कोई product नहीं है
                        </p>
                        <p className="text-gray-500 text-sm">
                          "+ Add Product" दबाकर पहला product बनाओ
                        </p>
                      </td>
                    </tr>
                  )}
                  {templates.map((t) => (
                    <tr
                      key={t.id}
                      className="border-b border-gray-800/50 hover:bg-gray-800/30 transition"
                    >
                      <td className="px-4 py-3 text-sm text-gray-500">
                        #{t.id}
                      </td>
                      <td className="px-4 py-3 font-medium">{t.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {t.category}
                      </td>
                      <td className="px-4 py-3 text-blue-400 font-semibold">
                        ₹{t.price}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {t.featured ? "⭐ Yes" : "No"}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-3">
                          <Link
                            href={`/admin/products/${t.id}/edit`}
                            className="text-blue-400 hover:text-blue-300 text-sm"
                          >
                            Edit
                          </Link>
                          <DeleteButton id={t.id} />
                        </div>
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
