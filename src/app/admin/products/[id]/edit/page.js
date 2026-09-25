import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/lib/adminAuth";
import { getTemplateById } from "@/lib/database";
import ProductForm from "@/components/ProductForm";

export const dynamic = "force-dynamic";

export default async function EditProductPage({ params }) {
  if (!isAdminAuthenticated()) {
    redirect("/admin/login");
  }

  const template = await getTemplateById(params.id);

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/admin" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold mt-6 mb-8">
          Edit: {template.name}
        </h1>

        <ProductForm initialData={template} isEdit={true} />
      </div>
    </main>
  );
}
