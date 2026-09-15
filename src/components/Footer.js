import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Templates", href: "/templates" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                K
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-blue-400 font-semibold tracking-widest">
                  WEB DEVELOPER
                </span>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  KIRAN
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium website templates aur full stack development services.
              Aapke business ko online le jao, professional tarike se.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "ig", "yt"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500 hover:bg-blue-500/10 flex items-center justify-center text-sm transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition cursor-pointer">
                Website Templates
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                Full Stack Development
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                E-commerce Website
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                Website Maintenance
              </li>
              <li className="hover:text-blue-400 transition cursor-pointer">
                SEO Optimization
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Naye templates aur offers ki jaankari paayein.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-gray-900 border border-gray-800 focus:border-blue-500 outline-none px-4 py-2.5 rounded-lg text-sm transition"
              />
              <button
                type="button"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2.5 rounded-lg text-sm font-semibold transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 text-xs mt-6">
              📧 hello@webdeveloperkiran.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 <span className="text-blue-400">Web Developer Kiran</span>.
            All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
                }
