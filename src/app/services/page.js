import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      icon: "💼",
      title: "Business Website",
      price: "₹15,000",
      duration: "2-3 weeks",
      features: ["Custom design", "5-8 pages", "Contact form", "SEO setup", "1 month support"],
      popular: false,
    },
    {
      icon: "🛒",
      title: "E-commerce Website",
      price: "₹35,000",
      duration: "4-6 weeks",
      features: ["Product catalog", "Cart & Checkout", "Razorpay/Stripe", "Admin panel", "3 months support"],
      popular: true,
    },
    {
      icon: "🚀",
      title: "SaaS Platform",
      price: "₹75,000",
      duration: "6-10 weeks",
      features: ["User authentication", "Dashboard", "Subscription billing", "API integration", "6 months support"],
      popular: false,
    },
  ];

  const process = [
    { num: "01", title: "Discovery", desc: "Aapki requirements samajhta hun, goals aur target audience discuss karte hain." },
    { num: "02", title: "Design", desc: "Wireframes aur mockups banata hun, aap approve karte ho, phir development start." },
    { num: "03", title: "Development", desc: "Modern tech stack (Next.js, Tailwind, Postgres) se clean code likhta hun." },
    { num: "04", title: "Launch & Support", desc: "Testing ke baad deploy karta hun, aur ongoing support deta hun." },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 border-b border-gray-900 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Custom websites jo aapke business ko grow karein. Modern tech, clean code, aur professional design.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`relative bg-gray-900 border rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                    s.popular ? "border-blue-500 shadow-2xl shadow-blue-500/20" : "border-gray-800 hover:border-blue-500/50"
                  }`}
                >
                  {s.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-blue-400">{s.price}</span>
                    <span className="text-gray-500 text-sm">starting</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">⏱ {s.duration}</p>
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition ${
                      s.popular
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                        : "border border-gray-700 hover:border-blue-500"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              How I <span className="text-blue-500">Work</span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
              Simple, transparent process — start se end tak
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-bold text-blue-500/20 mb-4">{p.num}</div>
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Apne project ke baare mein baat karein. Free consultation ke saath.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
            >
              Get Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
