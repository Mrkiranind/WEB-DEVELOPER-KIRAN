"use client";

import { useState } from "react";
import { initiatePayment } from "@/lib/razorpay";

export default function BuyButton({
  templateId,
  templateName,
  amount,
  className = "",
  label = "Buy Now",
}) {
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setMessage("");

    await initiatePayment({
      templateId,
      templateName,
      amount,
      customer: form,
      onSuccess: (data) => {
        window.location.href = `/success?payment_id=${data.paymentId}&template_id=${templateId}`;
      },
      onFailure: (error) => {
        setMessage(error);
        setLoading(false);
      },
    });
  };

  const handleClose = () => {
    setShowForm(false);
    setForm({ name: "", email: "", phone: "" });
    setMessage("");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={
          className ||
          "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-lg text-sm font-medium transition"
        }
      >
        {label}
      </button>

      {showForm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Complete Your Purchase</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-400">Template</p>
              <p className="font-semibold">{templateName}</p>
              <p className="text-2xl font-bold text-blue-400 mt-1">₹{amount}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
                />
              </div>

              {message && (
                <p className="text-red-400 text-sm text-center">{message}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? "Processing..." : `Pay ₹${amount}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
