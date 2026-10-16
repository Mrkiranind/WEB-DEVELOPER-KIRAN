export default function RecentPosts() {
  const posts = [
    {
      title: "Understanding React Server Components",
      category: "TECHNOLOGY",
      color: "from-blue-400 to-cyan-400",
      categoryColor: "text-blue-600",
      desc: "Learn how RSC revolutionizes web development...",
      date: "Oct 14, 2026",
      readTime: "4 min read",
    },
    {
      title: "Mastering Tailwind CSS in 2026",
      category: "DESIGN",
      color: "from-purple-400 to-pink-400",
      categoryColor: "text-purple-600",
      desc: "Best practices for utility-first CSS...",
      date: "Oct 12, 2026",
      readTime: "6 min read",
    },
    {
      title: "Building APIs with Node.js",
      category: "BACKEND",
      color: "from-green-400 to-emerald-400",
      categoryColor: "text-green-600",
      desc: "Complete guide to REST APIs and databases...",
      date: "Oct 10, 2026",
      readTime: "8 min read",
    },
    {
      title: "How to Become a Full Stack Developer",
      category: "CAREER",
      color: "from-orange-400 to-red-400",
      categoryColor: "text-orange-600",
      desc: "Complete roadmap from beginner to pro...",
      date: "Oct 8, 2026",
      readTime: "10 min read",
    },
    {
      title: "Top 10 VS Code Extensions 2026",
      category: "TOOLS",
      color: "from-yellow-400 to-orange-400",
      categoryColor: "text-yellow-600",
      desc: "Boost your productivity with these extensions...",
      date: "Oct 6, 2026",
      readTime: "5 min read",
    },
    {
      title: "Deploy Next.js to Vercel",
      category: "TUTORIAL",
      color: "from-pink-400 to-rose-400",
      categoryColor: "text-pink-600",
      desc: "Step-by-step deployment guide...",
      date: "Oct 4, 2026",
      readTime: "3 min read",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Recent Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="bg-white border rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
            >
              <div
                className={`h-48 bg-gradient-to-br ${post.color}`}
              ></div>
              <div className="p-5">
                <span
                  className={`text-xs font-semibold ${post.categoryColor}`}
                >
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.desc}</p>
                <p className="text-xs text-gray-500">
                  {post.date} • {post.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
