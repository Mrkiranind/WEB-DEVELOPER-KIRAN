export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-purple-400 mb-4">👋 Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">John Doe</h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Full Stack Developer & Designer
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I create beautiful and functional websites that help businesses
            grow. 5+ years of experience building modern web applications.
          </p>
          <div className="flex gap-4">
            <a
              href="#work"
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-gray-700 hover:border-purple-500 px-6 py-3 rounded-xl font-semibold transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center text-[200px]">
            👨‍💻
          </div>
        </div>
      </div>
    </section>
  );
}
