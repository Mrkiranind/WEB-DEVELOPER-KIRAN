export default function Work() {
  const projects = [
    {
      title: "SaaS Dashboard",
      category: "Web App",
      desc: "A modern analytics dashboard for SaaS companies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Fashion Store",
      category: "E-commerce",
      desc: "Complete e-commerce solution with payment",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      desc: "Cross-platform fitness tracking application",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Agency Portfolio",
      category: "Website",
      desc: "Creative agency website with animations",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="work" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Recent Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition cursor-pointer"
            >
              <div
                className={`h-64 bg-gradient-to-br ${p.color}`}
              ></div>
              <div className="p-6">
                <p className="text-sm text-purple-400 mb-2">{p.category}</p>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
