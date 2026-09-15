import Link from "next/link";

export default function Home() {
  const templates = [
    {
      id: 1,
      name: "SaaS Landing Page",
      price: "₹999",
      tag: "Next.js + Tailwind",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "E-commerce Store",
      price: "₹1,999",
      tag: "Next.js + Stripe",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Portfolio Website",
      price: "₹499",
      tag: "Next.js + Framer Motion",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Next.js 14 aur Vercel CDN se aapki site har jagah instant load hogi.",
    },
    {
      icon: "🎨",
      title: "Premium Design",
      desc: "Tailwind CSS se banaya gaya modern, responsive aur professional look.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      desc: "SSL, authentication aur payment integration ready.",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      desc: "Mobile, tablet aur desktop — har device par perfect.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/70 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-500">Dev</span>
            <span className="text-white">Sutra</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="/templates" className="hover:text-blue-400 transition">
              Templates
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition">
              Services
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Hire Me
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
            🚀 Trusted by 100+ developers
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Premium <span className="text-blue-500">Templates</span>
            <br />
            & <span className="text-cyan-400">Full Stack</span> Development
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Ready-to-use templates aur custom full stack websites — dono ek
            jagah. Aapke business ko online le jao, professional tarike se.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Browse Templates
            </Link>
            <Link
              href="/contact"
              className="border border-gray-700 hover:border-blue-500 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Hire Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose <span className="text-blue-500">DevSutra</span>?
          </h2>
          <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
            Sab kuch jo aapko online business ke liye chahiye
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Featured <span className="text-blue-500">Templates</span>
              </h2>
              <p className="text-gray-400">Sabse zyada bikne wale templates</p>
            </div>
            <Link
              href="/templates"
              className="text-blue-400 hover:text-blue-300 text-sm hidden md:block"
            >
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div
                key={t.id}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition group"
              >
                <div
                  className={`h-44 bg-gradient-to-br ${t.color} opacity-80 group-hover:opacity-100 transition`}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{t.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{t.tag}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-400">
                      {t.price}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 border-t border-gray-900">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Custom Website Chahiye?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Aapke business ke liye full stack website banwao. Fast, secure aur
            professional.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3.5 rounded-lg font-semibold transition"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">
            <span className="text-blue-500">Dev</span>Sutra
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 DevSutra. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
    }
