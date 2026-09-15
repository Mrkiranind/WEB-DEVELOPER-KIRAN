"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
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
    { icon: "📧", label: "Email", value: "hello@webdeveloperkiran.com" },
    { icon: "📱", label: "Phone / WhatsApp", value: "+91 XXXXX XXXXX" },
    { icon: "📍", label: "Location", value: "India (Remote Worldwide)" },
    { icon: "⏰", label: "Response Time", value: "Within 24 hours" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 border-b border-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Koi bhi project ya question ke liye message karein. Main 24 hours ke andar reply karta hun.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 transition flex items-start gap-4">
                  <div className="text-3xl">{c.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="font-bold mb-2">⚡ Fast Response</h3>
                <p className="text-gray-300 text-sm">
                  Urgent kaam hai? WhatsApp par message karein — sabse fast reply milega.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
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
                    <label className="text-sm text-gray-400 mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
                  >
                    <option value="">Select a topic</option>
                    <option>Buy a Template</option>
                    <option>Custom Website</option>
                    <option>Bug Report</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Apne project ke baare mein batao..."
                    className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
                >
                  {submitted ? "✓ Message Sent!" : "Send Message"}
                </button>

                {submitted && (
                  <p className="text-green-400 text-sm mt-4 text-center">
                    Thank you! Main jaldi reply karunga.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
 
