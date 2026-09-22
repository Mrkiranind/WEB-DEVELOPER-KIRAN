"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuccessPage({ searchParams }) {
  const paymentId = searchParams.payment_id || "N/A";
  const templateId = searchParams.template_id || "";

  const [downloadInfo, setDownloadInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!paymentId || !templateId) {
      setLoading(false);
      return;
    }

    fetch(`/api/download?payment_id=${paymentId}&template_id=${templateId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setDownloadInfo(data);
        } else {
          setError(data.error || "Download info नहीं मिली");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Download fetch नहीं हुआ");
      })
      .finally(() => setLoading(false));
  }, [paymentId, templateId]);

  const handleDownload = () => {
    if (downloadInfo?.file_url) {
      window.open(downloadInfo.file_url, "_blank");
    } else {
      alert("Download link अभी उपलब्ध नहीं है। कृपया support से संपर्क करें।");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
            <span className="text-5xl">✓</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Payment <span className="text-green-400">Successful!</span>
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Aapka payment safal ho gaya. Dhanyavaad!
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8 text-left">
            <div className="flex justify-between mb-3">
              <span className="text-gray-400">Payment ID:</span>
              <span className="font-mono text-sm text-blue-400 break-all">
                {paymentId}
              </span>
            </div>
            {templateId && (
              <div className="flex justify-between">
                <span className="text-gray-400">Template:</span>
                <span className="font-mono text-sm text-blue-400">
                  #{templateId}
                </span>
              </div>
            )}
          </div>

          {/* Download Section */}
          {loading && (
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
              <p className="text-gray-400">Download link prepare हो रहा है...</p>
            </div>
          )}

          {!loading && downloadInfo && (
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-3">
                🎁 Your Template is Ready!
              </h2>
              <p className="text-gray-300 mb-4">
                {downloadInfo.template_name}
              </p>
              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
              >
                ⬇ Download Template
              </button>
            </div>
          )}

          {!loading && error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
              <p className="text-red-400 text-sm">
                {error}. कृपया support से संपर्क करें।
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Browse More Templates
            </Link>
            <Link
              href="/contact"
              className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
            >
              Contact Support
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            📧 Email: hello@webdeveloperkiran.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
