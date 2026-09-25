"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("क्या आप इस product को delete करना चाहते हो?")) {
      return;
    }

    setDeleting(true);

    const res = await fetch(`/api/admin/products/${id}/delete`, {
      method: "POST",
    });

    if (res.ok || res.redirected) {
      router.refresh();
    } else {
      alert("Delete failed");
      setDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={deleting}
      className="text-red-400 hover:text-red-300 text-sm disabled:opacity-50"
    >
      {deleting ? "Deleting..." : "Delete"}
    </button>
  );
}
