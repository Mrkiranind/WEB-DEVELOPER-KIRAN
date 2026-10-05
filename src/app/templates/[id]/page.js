"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyButton from "@/components/BuyButton";

export default function TemplateDetail() {
  const params = useParams();
  const id = params.id;

  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/templates/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.template) {
          setTemplate(data.template);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
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

  if (notFound || !template) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
            <Link
              href="/templates"
              className="text-blue-400 hover:text-blue-300"
            >
              ← Back to Templates
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const features = [
    "Fully responsive design",
    "Next.js 14 App Router",
    "Tailwind CSS styling",
    "SEO optimized",
    "Clean aur commented code",
    "Free lifetime updates",
    "Documentation included",
    "Support available",
  ];

  const gradientColors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-indigo-500 to-purple-500",
  ];

  const color = gradientColors[(template.id - 1) % gradientColors.length];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-10 border-b border-gray-900">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/templates"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              ← Back to Templates
            </Link>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <div
                className={`aspect-video bg-gradient-to-br ${color} rounded-2xl shadow-2xl shadow-blue-500/20`}
              ></div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`aspect-video bg-gradient-to-br ${color} opacity-50 rounded-lg`}
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-blue-400 font-semibold mb-3">
                {template.tech_stack || "Next.js + Tailwind"}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {template.name}
              </h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {template.description}
              </p>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-4xl font-bold text-blue-400">
                      ₹{template.price}
                    </p>
                  </div>
                  <p className="text-green-400 text-sm">✓ Instant download</p>
                </div>
                <BuyButton
                  templateId={template.id}
                  templateName={template.name}
                  amount={template.price}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
                  label="Buy Now"
                />
                {template.demo_url && (
                  <a
                    href={template.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full mt-3 border border-gray-700 hover:border-blue-500 py-3.5 rounded-lg font-semibold transition"
                  >
                    Live Preview
                  </a>
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
