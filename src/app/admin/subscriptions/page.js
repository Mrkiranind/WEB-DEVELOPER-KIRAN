"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminSubscriptionsPage() {
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/api/admin/subscriptions")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setSubscriptions(data.subscriptions);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const filters = ["All", "active", "created", "cancelled", "expired"];

  const filtered =
    filter === "All"
      ? subscriptions
      : subscriptions.filter((s) => s.status === filter);

  const stats = {
    total: subscriptions.length,
    active: subscriptions.filter((s) => s.status === "active").length,
    cancelled: subscriptions.filter((s) => s.status === "cancelled").length,
    revenue: subscriptions
      .filter((s) => s.status === "active")
      .reduce((sum, s) => sum + (s.amount || 0), 0),
  };

  const statusColors = {
    active: "text-green-400 bg-green-500/10",
    cancelled: "text-red-400 bg-red-500/10",
    created: "text-yellow-400 bg-yellow-500/10",
    expired: "text-gray-400 bg-gray-500/10",
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/admin"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-2">Subscriptions</h1>
        <p className="text-gray-400 text-sm mb-8">
          Manage all customer subscriptions
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Total</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-gray-900 border border-green-500/30 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Active</p>
            <p className="text-2xl font-bold text-green-400">
              {stats.active}
            </p>
          </div>
          <div className="bg-gray-900 border border-red-500/30 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Cancelled</p>
            <p className="text-2xl font-bold text-red-400">
              {stats.cancelled}
            </p>
          </div>
          <div className="bg-gray-900 border border-blue-500/30 rounded-xl p-5">
            <p className="text-gray-400 text-sm mb-1">Monthly Revenue</p>
            <p className="text-2xl font-bold text-blue-400">
              ₹{stats.revenue}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === f
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "bg-gray-900 border border-gray-800 text-gray-300 hover:border-blue-500"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* List */}
        {loading && (
          <p className="text-center text-gray-400 py-20">Loading...</p>
        )}

        {!loading && filtered.length === 0 && (
          <div className="text-center py-20 bg-gray-900 border border-gray-800 rounded-2xl">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-400">No subscriptions found</p>
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800">
                  <tr className="text-left text-sm text-gray-400">
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Plan</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Created</th>
                    <th className="px-4 py-3">Razorpay ID</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((sub) => (
                    <tr
                      key={sub.id}
                      className="border-b border-gray-800/50 hover:bg-gray-800/30 transition"
                    >
                      <td className="px-4 py-3 text-sm font-medium">
                        {sub.customer_name || "N/A"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {sub.user_email}
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-semibold text-blue-400">
                          {sub.plan_name}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-bold">
                        ₹{sub.amount}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`text-xs font-semibold px-2 py-1 rounded uppercase ${
                            statusColors[sub.status] ||
                            "text-gray-400 bg-gray-500/10"
                          }`}
                        >
                          {sub.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {new Date(sub.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 font-mono">
                        {sub.razorpay_subscription_id?.slice(0, 15)}...
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
