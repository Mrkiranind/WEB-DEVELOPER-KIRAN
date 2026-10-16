export default function FeaturedPost() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 md:p-12">
          <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
            FEATURED
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 mb-4">
            How to Build Modern Web Apps with Next.js 14
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Complete guide to building production-ready applications with
            Next.js App Router, server components, and more.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500"></div>
            <div>
              <p className="font-semibold text-gray-900">John Doe</p>
              <p>5 min read • Oct 15, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
