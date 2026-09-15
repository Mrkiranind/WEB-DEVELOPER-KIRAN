import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allTemplates = [
  { id: 1, name: "SaaS Landing Page", price: 999, tag: "Next.js + Tailwind", color: "from-blue-500 to-cyan-500", desc: "Modern SaaS landing page with hero, features, pricing aur testimonials sections. Fully responsive, SEO ready, aur fast." },
  { id: 2, name: "E-commerce Store", price: 1999, tag: "Next.js + Stripe", color: "from-purple-500 to-pink-500", desc: "Complete e-commerce store with cart, checkout, Stripe payment integration. Product listing, categories aur search ke saath." },
  { id: 3, name: "Portfolio Website", price: 499, tag: "Next.js + Framer Motion", color: "from-orange-500 to-red-500", desc: "Sleek portfolio website with smooth animations. Projects, skills aur contact section ke saath perfect for freelancers." },
  { id: 4, name: "Blog Platform", price: 1299, tag: "Next.js + MDX", color: "from-green-500 to-emerald-500", desc: "SEO-optimized blog platform. MDX support, categories, tags aur reading time ke saath." },
  { id: 5, name: "Admin Dashboard", price: 2499, tag: "Next.js + Chart.js", color: "from-indigo-500 to-purple-500", desc: "Powerful admin dashboard with charts, tables aur user management. Real-time data aur analytics ke saath." },
  { id: 6, name: "Agency Website", price: 1499, tag: "Next.js + Framer Motion", color: "from-rose-500 to-orange-500", desc: "Professional agency website with services, portfolio aur testimonials. Modern animations ke saath." },
];

export default function TemplateDetail({ params }) {
  const template = allTemplates.find((t) => t.id === parseInt(params.id));

  if (!template) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Template Not Found</h1>
            <Link href="/templates" className="text-blue-400 hover:text-blue-300">
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-10 border-b border-gray-900">
          <div className="max-w-6xl mx-auto">
            <Link href="/templates" className="text-blue-400 hover:text-blue-300 text-sm">
              ← Back to Templates
            </Link>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <div>
              <div className={`aspect-video bg-gradient-to-br ${template.color} rounded-2xl shadow-2xl shadow-blue-500/20`}></div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`aspect-video bg-gradient-to-br ${template.color} opacity-50 rounded-lg`}></div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm text-blue-400 font-semibold mb-3">{template.tag}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{template.name}</h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{template.desc}</p>

              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">Price</p>
                    <p className="text-4xl font-bold text-blue-400">₹{template.price}</p>
                  </div>
                  <p className="text-green-400 text-sm">✓ Instant download</p>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30">
                  Buy Now
                </button>
                <button className="w-full mt-3 border border-gray-700 hover:border-blue-500 py-3.5 rounded-lg font-semibold transition">
                  Live Preview
                </button>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
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
