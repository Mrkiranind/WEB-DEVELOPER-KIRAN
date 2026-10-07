"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "hello@webdeveloperkiran.com",
      href: "mailto:hello@webdeveloperkiran.com",
    },
    {
      icon: "📱",
      label: "Phone / WhatsApp",
      value: "+91 78229 81554",
      href: "https://wa.me/917822981554",
    },
    {
      icon: "💬",
      label: "WhatsApp Chat",
      value: "Fastest response",
      href: "https://wa.me/917822981554?text=Hi%20Kiran%2C%20I%20need%20help%20with",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Mumbai, India (Remote Worldwide)",
      href: null,
    },
    {
      icon: "⏰",
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 border-b border-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Koi bhi project ya question ke liye message karein. Main 24
              hours ke andar reply karta hun.
            </p>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="px-6 py-8 border-b border-gray-900">
          <div className="max-w-4xl mx-auto">
            <a
              href="https://wa.me/917822981554?text=Hi%20Kiran%2C%20I%20need%20help%20with"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-green-600/20 to-emerald-600/10 border border-green-500/30 hover:border-green-500 rounded-2xl p-5 transition group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="font-bold text-lg">Chat on WhatsApp</h3>
                    <p className="text-gray-400 text-sm">
                      Fastest way to get response — usually within minutes
                    </p>
                  </div>
                </div>
                <span className="text-green-400 text-2xl group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </a>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((c, i) => {
                const content = (
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition flex items-start gap-4">
                    <div className="text-3xl">{c.icon}</div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{c.label}</p>
                      <p className="font-medium break-all">{c.value}</p>
                    </div>
                  </div>
                );

                return c.href ? (
                  <a
                    key={i}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      c.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                     
