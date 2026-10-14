export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
          🚀 Trusted by 10,000+ businesses
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Scale Your Business
          <br />
          with{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Powerful SaaS
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          All-in-one platform to manage your business, automate workflows,
          and grow faster than ever before.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-500/30">
            Start Free Trial
          </button>
          <button className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-xl font-semibold text-lg transition">
            Watch Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
