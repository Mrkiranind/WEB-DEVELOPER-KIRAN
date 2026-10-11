import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog - Web Developer Kiran",
  description:
    "Read articles on web development, website templates, and growing your business online.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <section className="px-6 py-20 border-b border-gray-900 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-blue-500">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Articles on web development, templates, and growing your business
            online.
          </p>
        </section>

        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white hover:text-blue-400 transition">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>✍️ {post.author}</span>
                  <span>•</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 border-t border-gray-900">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Website?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Custom development or premium templates — dono available hain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/templates"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Browse Templates
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-gray-700 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
