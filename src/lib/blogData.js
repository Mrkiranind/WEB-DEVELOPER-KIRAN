// Blog articles data
// हर नया article इस array में add करो

export const blogPosts = [
  {
    slug: "how-to-build-nextjs-website",
    title: "How to Build a Next.js Website in 2026",
    excerpt:
      "Complete guide to building a modern, fast, and SEO-optimized website with Next.js 14, Tailwind CSS, and Vercel.",
    category: "Tutorial",
    author: "Kiran Waghmode",
    date: "2026-10-12",
    readTime: "8 min read",
    keywords: ["Next.js", "React", "Web Development", "Tutorial"],
    content: `
## Introduction

Next.js is the most popular React framework for building modern websites. In this guide, I'll show you how to build a complete website from scratch.

## Why Next.js?

Next.js offers many benefits over plain React:

- **Server-side rendering** for better SEO
- **Static site generation** for speed
- **API routes** for backend functionality
- **Image optimization** built-in
- **Automatic code splitting**

## Step 1: Setup

First, create a new Next.js project:

\`\`\`bash
npx create-next-app@latest my-website
\`\`\`

Choose the following options when prompted:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes

## Step 2: Project Structure

Your project will have this structure:

\`\`\`
my-website/
├── src/
│   ├── app/
│   │   ├── page.js
│   │   ├── layout.js
│   │   └── globals.css
│   └── components/
├── public/
└── package.json
\`\`\`

## Step 3: Build Your First Page

Open \`src/app/page.js\` and create your homepage:

\`\`\`jsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-center pt-20">
        Welcome to My Website
      </h1>
    </main>
  );
}
\`\`\`

## Step 4: Add Routing

Create a new folder \`src/app/about/\` with a \`page.js\` file:

\`\`\`jsx
export default function About() {
  return <div>About Page</div>;
}
\`\`\`

Now you can access it at \`/about\`.

## Step 5: Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub
2. Go to vercel.com
3. Import your GitHub repository
4. Click "Deploy"

Your site will be live in 2 minutes!

## Conclusion

Next.js makes building modern websites easy and fast. With server-side rendering, automatic optimization, and powerful features, it's the best choice for 2026.

Ready to build your website? [Hire me](/contact) for custom development or [browse my templates](/templates).
    `,
  },
  {
    slug: "top-10-website-templates-2026",
    title: "Top 10 Website Templates for Small Business in 2026",
    excerpt:
      "Discover the best website templates for small businesses — from landing pages to e-commerce, all under ₹2,000.",
    category: "Business",
    author: "Kiran Waghmode",
    date: "2026-10-12",
    readTime: "6 min read",
    keywords: ["Website Templates", "Small Business", "Web Design"],
    content: `
## Why Use a Website Template?

Building a website from scratch can cost ₹50,000+. But with a premium template, you can launch in hours for under ₹2,000.

## Benefits of Templates

- **Save 90% cost** compared to custom development
- **Launch in hours**, not weeks
- **Professional design** already included
- **Mobile responsive** out of the box
- **SEO optimized** from day one

## Top 10 Templates for 2026

### 1. SaaS Landing Page — ₹299

Perfect for software products and SaaS startups.

**Best for:** Tech startups, SaaS companies
**Features:** Hero section, pricing, testimonials

### 2. E-commerce Store — ₹298

Complete online store with product catalog and payment.

**Best for:** Online sellers, retail businesses
**Features:** Cart, checkout, admin panel

### 3. Portfolio Website — ₹459

Sleek portfolio for freelancers and creative professionals.

**Best for:** Designers, developers, photographers
**Features:** Project showcase, animations

### 4. Blog Platform — ₹599

SEO-optimized blog with categories and tags.

**Best for:** Content creators, writers
**Features:** MDX support, categories, tags

### 5. Restaurant Website — ₹539

Elegant website for restaurants and cafes.

**Best for:** Restaurants, cafes, food businesses
**Features:** Menu, reservations, gallery

## How to Choose the Right Template

1. **Identify your needs** — What does your business do?
2. **Check features** — Does the template have what you need?
3. **Look at design** — Does it match your brand?
4. **Check responsiveness** — Test on mobile
5. **Verify support** — Is documentation included?

## Conclusion

Website templates are the fastest way to launch your business online. Starting at just ₹299, you can have a professional website within hours.

[Browse all templates →](/templates)
    `,
  },
  {
    slug: "why-business-needs-website",
    title: "Why Your Business Needs a Website in 2026",
    excerpt:
      "Still running your business without a website? Here are 7 reasons why you're losing customers every day.",
    category: "Business",
    author: "Kiran Waghmode",
    date: "2026-10-12",
    readTime: "5 min read",
    keywords: ["Business Website", "Digital Marketing", "Online Presence"],
    content: `
## The Harsh Reality

Did you know?
- **81% of customers** research online before buying
- **75% judge credibility** based on website design
- **88% never return** after a bad experience

If your business doesn't have a website, you're invisible to these customers.

## 7 Reasons Your Business Needs a Website

### 1. 24/7 Online Presence

Your website works even when you sleep. Customers can find you, learn about you, and contact you anytime.

### 2. Build Credibility

A professional website makes your business look trustworthy. Anyone can have a Facebook page — but a website shows you're serious.

### 3. Reach More Customers

Your physical shop reaches people in your area. Your website reaches the entire world.

### 4. Showcase Your Work

Photos, videos, testimonials, case studies — show customers what you do and why you're the best.

### 5. Sell Online

With an e-commerce website, customers can buy directly from you — no middlemen, no commissions.

### 6. Answer Common Questions

Save time on phone calls. FAQs, pricing, hours — all on your website.

### 7. Beat Your Competitors

If your competitor has a website and you don't, they're winning. It's that simple.

## What Type of Website Do You Need?

- **Business website** — For service businesses (₹15,000+)
- **E-commerce store** — For online selling (₹35,000+)
- **Landing page** — For marketing campaigns (₹5,000+)
- **Template** — For quick launch (₹299+)

## How to Get Started

1. **Decide your budget**
2. **Choose template or custom**
3. **Get domain** (₹800/year)
4. **Launch and promote**

## Ready to Go Online?

[Hire me for custom development](/contact) or [browse templates](/templates) starting at ₹299.
    `,
  },
];

// Get single post by slug
export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

// Get all posts
export function getAllPosts() {
  return blogPosts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
}
