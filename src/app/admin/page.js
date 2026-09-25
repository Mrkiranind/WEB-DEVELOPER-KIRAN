import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getAllTemplatesAdmin } from "@/lib/database";
import DeleteButton from "@/components/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }

  const templates = await getAllTemplatesAdmin();

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">
              Total: {templates.length} products
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/products/new"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-5 py-2.5 rounded-lg text-sm font-semibold transition"
            >
              + Add New Product
            </Link>
            <Link
              href="/"
              className="border border-gray-700 hover:border-blue-500 px-5 py-2.5 rounded-lg text-sm transition"
            >
              View Site
            </Link>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50 border-b border-gray-800">
                <tr className="text-left text-sm text-gray-400">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Featured</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {templates.length === 0 && (
                  <tr>
                    <td colSpan="6" className="px-4 py-10 text-center text-gray-500">
                      No products yet. Click "+ Add New Product" to start.
                    </td>
                  </tr>
                )}
                {templates.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-gray-800/50 hover:bg-gray-800/30 transition"
                  >
                    <td className="px-4 py-3 text-sm text-gray-500">#{t.id}</td>
                    <td className="px-4 py-3 font-medium">{t.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-400">
                      {t.category}
                    </td>
                    <td className="px-4 py-3 text-blue-400 font-semibold">
                      ₹{t.price}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {t.featured ? "⭐ Yes" : "No"}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3">
                        <Link
                          href={`/admin/products/${t.id}/edit`}
                          className="text-blue-400 hover:text-blue-300 text-sm"
                        >
                          Edit
                        </Link>
                        <DeleteButton id={t.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
