export default function About() {
  const stats = [
    { num: "50+", label: "Projects" },
    { num: "5+", label: "Years" },
    { num: "30+", label: "Clients" },
    { num: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I'm a passionate full stack developer with expertise in React,
          Next.js, Node.js, and modern web technologies. I love creating
          clean, performant, and beautiful web experiences.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-purple-400">
                {s.num}
              </div>
              <p className="text-gray-500 text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
