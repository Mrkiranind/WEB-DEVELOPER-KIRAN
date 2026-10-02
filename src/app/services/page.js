import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubscribeButton from "@/components/SubscribeButton";
import { subscriptionPlans } from "@/lib/plans";

export default function ServicesPage() {
  const oneTimeServices = [
    {
      icon: "💼",
      title: "Business Website",
      price: "₹15,000",
      features: [
        "Custom design",
        "5-8 pages",
        "Contact form",
        "SEO setup",
      ],
    },
    {
      icon: "🛒",
      title: "E-commerce Website",
      price: "₹35,000",
      features: [
        "Product catalog",
        "Cart & Checkout",
        "Payment gateway",
        "Admin panel",
      ],
    },
    {
      icon: "🚀",
      title: "SaaS Platform",
      price: "₹75,000",
      features: [
        "User auth",
        "Dashboard",
        "Subscription billing",
        "API integration",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="px-6 py-20 border-b border-gray-900 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Custom websites + Monthly maintenance plans — apne business ke
            liye perfect solution chuno.
          </p>
        </section>

        {/* One-Time Projects */}
        <section className="px-6 py-16 border-b border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-3">One-Time Projects</h2>
              <p className="text-gray-400">
                Ek baar payment, lifetime website
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {oneTimeServices.map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition"
                >
                  <div className="text-5xl mb-4">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-3xl font-bold text-blue-400 mb-6">
                    {s.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {s.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-green-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block text-center border border-gray-700 hover:border-blue-500 py-3 rounded-lg font-semibold transition"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="px-6 py-16 border-b border-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-4">
                🔄 Auto-Renewal
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Monthly{" "}
                <span className="text-blue-500">Maintenance Plans</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Apni website ko updated, secure aur fast rakho — monthly
                subscription ke saath.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative bg-gray-900 border rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                      : "border-gray-800 hover:border-blue-500/50"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                  <div
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${plan.color}`}
                  >
                    {plan.name}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {plan.name} Plan
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold text-blue-400">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="text-green-400">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <SubscribeButton plan={plan} />
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center max-w-2xl mx-auto">
              <p className="text-gray-400 text-sm">
                💡 <strong className="text-white">Note:</strong> Saare plans
                me auto-debit facility hai. Aap kabhi bhi cancel kar sakte
                hain. Cancel karne ke baad current month tak service milegi.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kuch aur chahiye?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Custom requirements ke liye contact karein. Free consultation
              milega.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
