export default function Features() {
  const features = [
    { icon: "⚡", title: "Lightning Fast", desc: "Built for speed with modern tech stack." },
    { icon: "🔒", title: "Secure", desc: "Enterprise-grade security built-in." },
    { icon: "📊", title: "Analytics", desc: "Real-time insights and reports." },
    { icon: "🌐", title: "Global CDN", desc: "Fast everywhere in the world." },
    { icon: "🤝", title: "24/7 Support", desc: "We're always here to help you." },
    { icon: "🔄", title: "Auto Updates", desc: "Always stay up to date." },
  ];

  return (
    <section id="features" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything You Need
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
          Powerful features to help you grow
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-5xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
