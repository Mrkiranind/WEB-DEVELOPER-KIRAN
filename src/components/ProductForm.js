"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm({ initialData = null, isEdit = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    name: initialData?.name || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
    category: initialData?.category || "",
    tech_stack: initialData?.tech_stack || "",
    demo_url: initialData?.demo_url || "",
    file_url: initialData?.file_url || "",
    featured: initialData?.featured || false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let fileUrl = form.file_url;

      // अगर file upload की है
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name);

        const uploadRes = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();

        if (!uploadData.success) {
          setError("File upload failed: " + uploadData.error);
          setLoading(false);
          return;
        }

        fileUrl = uploadData.fileUrl;
      }

      const payload = { ...form, file_url: fileUrl, price: parseInt(form.price, 10) };

      const url = isEdit
        ? `/api/admin/products/${initialData.id}/update`
        : "/api/admin/products/create";

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.error || "Something went wrong");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Error: " + err.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-5"
    >
      <div>
        <label className="text-sm text-gray-400 mb-2 block">
          Product Name *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="SaaS Landing Page"
          className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">
          Description
        </label>
        <textarea
          rows="3"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Product ki detail..."
          className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition resize-none"
        ></textarea>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Price (₹) *</label>
          <input
            type="number"
            required
            min="1"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="999"
            className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400 mb-2 block">
            Category *
          </label>
          <input
            type="text"
            required
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="Landing Page"
            className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
          />
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">
          Tech Stack
        </label>
        <input
          type="text"
          value={form.tech_stack}
          onChange={(e) => setForm({ ...form, tech_stack: e.target.value })}
          placeholder="Next.js + Tailwind"
          className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">Demo URL</label>
        <input
          type="url"
          value={form.demo_url}
          onChange={(e) => setForm({ ...form, demo_url: e.target.value })}
          placeholder="https://demo.example.com"
          className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition"
        />
      </div>

      <div>
        <label className="text-sm text-gray-400 mb-2 block">
          Product File (ZIP) {isEdit && "— नई file upload करने पर replace हो जाएगी"}
        </label>
        <input
          type="file"
          accept=".zip,.rar,.pdf,.tar,.gz"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full bg-black border border-gray-800 focus:border-blue-500 outline-none px-4 py-3 rounded-lg transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:cursor-pointer"
        />
        {form.file_url && !file && (
          <p className="text-xs text-gray-500 mt-2">
            Current: {form.file_url.split("/").pop()}
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          checked={form.featured}
          onChange={(e) => setForm({ ...form, featured: e.target.checked })}
          className="w-5 h-5 accent-blue-600"
        />
        <label htmlFor="featured" className="text-sm">
          Featured product (Homepage par dikhega)
        </label>
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <div className="flex gap-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3 rounded-lg font-semibold transition disabled:opacity-50"
        >
          {loading
            ? "Saving..."
            : isEdit
            ? "Update Product"
            : "Create Product"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-lg font-semibold transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
