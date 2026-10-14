export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO, TechCorp",
      text: "This platform helped us scale from 100 to 10,000 users in 6 months. Incredible!",
      avatar: "R",
    },
    {
      name: "Priya Patel",
      role: "Founder, StartupX",
      text: "Best investment we made. The analytics alone saved us thousands of hours.",
      avatar: "P",
    },
    {
      name: "Amit Kumar",
      role: "CTO, InnovateCo",
      text: "The security features are top-notch. Our enterprise clients love it.",
      avatar: "A",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Loved by Businesses
        </h2>
        <p className="text-gray-400 text-center mb-16">
          See what our customers say
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
