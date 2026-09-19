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
  const [message, setMessage] = useState("");

  const handleBuy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (loading) return;
    setLoading(true);
    setMessage("");

    await initiatePayment({
      templateId,
      templateName,
      amount,
      onSuccess: (data) => {
        // Payment सफल — success page पर redirect करो
        window.location.href = `/success?payment_id=${data.paymentId}&template_id=${templateId}`;
      },
      onFailure: (error) => {
        setMessage(error);
        setLoading(false);
        setTimeout(() => setMessage(""), 4000);
      },
    });
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleBuy}
        disabled={loading}
        className={
          className ||
          "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
        }
      >
        {loading ? "Processing..." : label}
      </button>
      {message && (
        <p className="text-xs text-red-400 max-w-xs text-right">{message}</p>
      )}
    </div>
  );
}
