import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const skills = [
    { name: "React & Next.js", level: 95 },
    { name: "Node.js & Express", level: 90 },
    { name: "PostgreSQL & MongoDB", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "AWS & Vercel", level: 80 },
  ];

  const stats = [
    { num: "50+", label: "Projects Delivered" },
    { num: "30+", label: "Happy Clients" },
    { num: "3+", label: "Years Experience" },
    { num: "100%", label: "Client Satisfaction" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 border-b border-gray-900">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-400 text-sm font-semibold mb-3">ABOUT ME</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Kiran</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Ek passionate full stack developer jo businesses ko online laata hai — beautiful, fast aur reliable websites ke through.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                3+ saal ka experience hai React, Next.js, Node.js aur databases mein. Main clean code likhta hun, modern design banata hun, aur clients ke business goals ko samajhkar deliver karta hun.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition">
                  Hire Me
                </Link>
                <Link href="/templates" className="border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition">
                  My Templates
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl shadow-blue-500/30 flex items-center justify-center">
                <span className="text-[200px] font-bold text-white/20">K</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 border-b border-gray-900">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {s.num}
                </div>
                <p className="text-gray-400 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 border-b border-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <div className="space-y-6">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-blue-400 text-sm">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      style={{ width: `${s.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Build Something <span className="text-blue-500">Great</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Chahe aapko template chahiye ya custom full stack website — main aapki madad kar sakta hun.
            </p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-blue-500/30">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
