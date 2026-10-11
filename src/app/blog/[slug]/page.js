import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts } from "@/lib/blogData";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Web Developer Kiran`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// Markdown-like content को simple HTML में convert करो
function renderContent(content) {
  // Code blocks handle करो
  const parts = content.split(/```/);

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Code block
      const lines = part.trim().split("\n");
      const lang = lines[0];
      const code = lines.slice(1).join("\n");

      return (
        <pre
          key={index}
          className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-x-auto my-6 text-sm"
        >
          <code className="text-gray-300 font-mono">{code}</code>
        </pre>
      );
    }

    // Regular text — headers, paragraphs, lists handle करो
    const lines = part.split("\n");
    const elements = [];
    let listItems = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("### ")) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        elements.push(
          <h3
            key={i}
            className="text-xl font-bold text-white mt-8 mb-3"
          >
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith("## ")) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        elements.push(
          <h2
            key={i}
            className="text-2xl font-bold text-white mt-10 mb-4"
          >
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith("- ")) {
        listItems.push(
          <li key={i} className="text-gray-300">
            {trimmed.slice(2)}
          </li>
        );
      } else if (trimmed.match(/^\d+\.\s/)) {
        listItems.push(
          <li key={i} className="text-gray-300 list-decimal">
            {trimmed.replace(/^\d+\.\s/, "")}
          </li>
        );
      } else if (trimmed === "") {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
              {listItems}
            </ul>
          );
          listItems = [];
        }
      } else {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
              {listItems}
            </ul>
          );
          listItems = [];
        }
        // Bold text को handle करो (**text**)
        const parts2 = trimmed.split(/\*\*(.*?)\*\*/g);
        const formatted = parts2.map((p, idx) =>
          idx % 2 === 1 ? <strong key={idx} className="text-white">{p}</strong> : p
        );
        elements.push(
          <p key={i} className="text-gray-300 leading-relaxed my-3">
            {formatted}
          </p>
        );
      }
    });

    if (listItems.length > 0) {
      elements.push(
        <ul key="ul-end" className="list-disc pl-6 space-y-2 my-4">
          {listItems}
        </ul>
      );
    }

    return <div key={index}>{elements}</div>;
  });
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <article className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="text-blue-400 hover:text-blue-300 text-sm inline-block mb-8"
            >
              ← Back to Blog
            </Link>

            {/* Category + read time */}
            <div className="flex items-center gap-3 mb-6 text-xs text-gray-500">
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold">
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
                K
              </div>
              <div>
                <p className="font-semibold text-white">{post.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA Bottom */}
            <div className="mt-16 bg-gradient-to-br from-blue-600/20 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">
                Need a Website?
              </h3>
              <p className="text-gray-300 mb-6">
                Premium templates starting at ₹299 or custom development.
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
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
