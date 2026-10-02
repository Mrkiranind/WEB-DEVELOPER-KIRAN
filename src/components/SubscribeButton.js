"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function SubscribeButton({ plan, className = "" }) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Razorpay script load करो
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
      await new Promise((resolve) => (script.onload = resolve));
    }

    const res = await fetch("/api/subscription/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        planId: plan.id,
        planName: plan.name,
        amount: plan.price,
        customerName: form.name,
        customerEmail: form.email,
        customerPhone: form.phone,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      setMessage(data.error || "Subscription failed");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: data.subscriptionId,
      name: "Web Developer Kiran",
      description: `${plan.name} Plan - ₹${plan.price}/month`,
      prefill: {
        name: form.name,
        email: form.email,
        contact: form.phone,
      },
      theme: { color: "#3b82f6" },
      handler: async function (response) {
        const verifyRes = await fetch("/api/subscription/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_subscription_id: response.razorpay_subscription_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        const verifyData = await verifyRes.json();

        if (verifyData.success) {
          window.location.href = "/dashboard?subscription=success";
        } else {
          setMessage("Verification failed");
          setLoading(false);
        }
      },
      modal: {
        ondismiss: () => {
          setLoading(false);
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const modalContent = showForm ? (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(8px)",
      }}
      onClick={() => setShowForm(false)}
    >
      <div
        style={{
          backgroundColor: "#111827",
          border: "1px solid #1f2937",
          borderRadius: "16px",
          padding: "24px",
          width: "100%",
          maxWidth: "440px",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            Subscribe to {plan.name}
          </h3>
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
          <p className="text-sm text-gray-400">Plan</p>
          <p className="font-semibold text-white">{plan.name}</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">
            ₹{plan.price}
            <span className="text-sm text-gray-400">{plan.period}</span>
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Rahul Sharma"
              className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Email *</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-1 block">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition text-white"
            />
          </div>

          {message && (
            <p className="text-red-400 text-sm text-center">{message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50 text-white"
          >
            {loading ? "Processing..." : `Subscribe ₹${plan.price}/month`}
          </button>

          <p className="text-xs text-gray-500 text-center">
            Auto-debit से हर महीने पैसे कटेंगे। कभी भी cancel कर सकते हो।
          </p>
        </form>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className={
          className ||
          "w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3.5 rounded-lg font-semibold transition"
        }
      >
        Subscribe Now
      </button>

      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
