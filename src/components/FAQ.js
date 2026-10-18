"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    { q: "How do I receive my purchased template?", a: "After successful payment, you'll receive an email with a download link. You can also download it immediately from the success page or from your dashboard." },
    { q: "What files are included in each template?", a: "Every template includes a complete Next.js project with all source files, documentation (README.md), and configuration files. Just run npm install and you're ready to go." },
    { q: "Can I use these templates for client projects?", a: "Yes! You can use templates for unlimited personal and client projects. However, you cannot resell or redistribute the templates as-is." },
    { q: "Do you offer refunds?", a: "Due to the digital nature of templates, refunds are only provided in specific cases (duplicate purchase, technical issues, or product not received). Please check our Refund Policy for details." },
    { q: "How many times can I download my template?", a: "Your download link allows 3 downloads within 7 days. If you need more, contact support at hello@webdeveloperkiran.com." },
    { q: "Are the templates mobile responsive?", a: "Yes! All templates are fully responsive and tested on mobile, tablet, and desktop. They work perfectly on any device." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-6 border-t border-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Have questions? We have answers.</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-800/50 transition">
                <span className="font-semibold text-white pr-4">{faq.q}</span>
                <span className="text-blue-400 text-xl flex-shrink-0">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
