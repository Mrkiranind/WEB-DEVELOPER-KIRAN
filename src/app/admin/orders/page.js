"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setOrders(data.orders);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const totalRevenue = orders.reduce((sum, o) => sum + (o.amount || 0), 0);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/admin"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          ← Back to Dashboard
        </Link>

        <div className="flex justify-between items-center mt-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Orders</h1>
            <p className="text-gray-400 text-sm mt-1">
              All template purchases
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-xl px-6 py-3">
            <p className="text-gray-400 text-xs mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-blue-400">₹{totalRevenue}</p>
          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-400 py-20">Loading...</p>
        )}

        {!loading && orders.length === 0 && (
          <div className="text-center py-20 bg-gray-900 border border-gray-800 rounded-2xl">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-400">No orders yet</p>
          </div>
        )}

        {!loading && orders.length > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50 border-b border-gray-800">
                  <tr className="text-left text-sm text-gray-400">
                    <th className="px-4 py-3">Customer</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Product</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Payment ID</th>
                    <th className="px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr
                      key={o.id}
                      className="border-b border-gray-800/50 hover:bg-gray-800/30 transition"
                    >
                      <td className="px-4 py-3 text-sm font-medium">
                        {o.customer_name || "Guest"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-400">
                        {o.customer_email || "N/A"}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {o.template_name}
                      </td>
                      <td className="px-4 py-3 text-sm font-bold text-blue-400">
                        ₹{o.amount}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-600 font-mono">
                        {o.payment_id?.slice(0, 20)}...
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">
                        {new Date(o.created_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
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
