"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser, signOut } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading: userLoading } = useUser();
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancelling, setCancelling] = useState(null);

  useEffect(() => {
    if (!userLoading && !user) {
      router.push("/login");
      return;
    }

    if (user?.email) {
      Promise.all([
        fetch(`/api/user/orders?email=${encodeURIComponent(user.email)}`).then(
          (res) => res.json()
        ),
        fetch(
          `/api/user/subscriptions?email=${encodeURIComponent(user.email)}`
        ).then((res) => res.json()),
      ])
        .then(([ordersData, subsData]) => {
          if (ordersData.success) setOrders(ordersData.orders);
          if (subsData.success) setSubscriptions(subsData.subscriptions);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user, userLoading, router]);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  const handleCancelSubscription = async (subscriptionId) => {
    if (!confirm("क्या आप इस subscription को cancel करना चाहते हो?")) return;

    setCancelling(subscriptionId);

    const res = await fetch("/api/subscription/cancel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subscriptionId }),
    });

    const data = await res.json();

    if (data.success) {
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.razorpay_subscription_id === subscriptionId
            ? { ...sub, status: "cancelled" }
            : sub
        )
      );
    } else {
      alert("Cancel failed: " + (data.error || "Unknown error"));
    }
    setCancelling(null);
  };

  if (userLoading || !user) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center">
          <p className="text-gray-400">Loading...</p>
        </main>
        <Footer />
      </>
    );
  }

  const activeSubs = subscriptions.filter((s) => s.status === "active");
  const otherSubs = subscriptions.filter((s) => s.status !== "active");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome, {user.user_metadata?.full_name || user.email.split("@")[0]}!
              </h1>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="border border-gray-700 hover:border-red-500 hover:text-red-400 px-5 py-2.5 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>

          {activeSubs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">
                Active <span className="text-blue-500">Subscriptions</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {activeSubs.map((sub) => (
                  <div key={sub.id} className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{sub.plan_name} Plan</h3>
                      <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded">ACTIVE</span>
                    </div>
                    <p className="text-3xl font-bold text-blue-400 mb-4">
                      ₹{sub.amount}<span className="text-sm text-gray-400">/month</span>
                    </p>
                    <button
                      onClick={() => handleCancelSubscription(sub.razorpay_subscription_id)}
                      disabled={cancelling === sub.razorpay_subscription_id}
                      className="w-full border border-gray-700 hover:border-red-500 hover:text-red-400 py-2 rounded-lg text-sm transition"
                    >
                      {cancelling === sub.razorpay_subscription_id ? "Cancelling..." : "Cancel Subscription"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {otherSubs.length > 0 && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Subscription <span className="text-gray-500">History</span></h2>
              <div className="grid md:grid-cols-2 gap-4">
                {otherSubs.map((sub) => (
                  <div key={sub.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 opacity-75">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{sub.plan_name} Plan</h3>
                      <span className="text-gray-400 text-xs bg-gray-500/10 px-2 py-1 rounded uppercase">{sub.status}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-400">₹{sub.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6">My <span className="text-blue-500">Purchases</span></h2>
            {loading && <p className="text-gray-400">Loading orders...</p>}
            {!loading && orders.length === 0 && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">📦</div>
                <p className="text-gray-400 mb-6">अभी तक कोई purchase नहीं की है।</p>
                <Link href="/templates" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition">
                  Browse Templates
                </Link>
              </div>
            )}
            {!loading && orders.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {orders.map((order) => (
                  <div key={order.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{order.template_name}</h3>
                      <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded">{order.status}</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-400 mb-3">₹{order.amount}</p>
                    <Link href={`/success?payment_id=${order.payment_id}&template_id=${order.template_id}`} className="block text-center bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-2 rounded-lg text-sm font-medium transition">
                      Download Again
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
