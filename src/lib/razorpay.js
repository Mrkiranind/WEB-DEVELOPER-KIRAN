// Razorpay checkout script dynamically load करो
export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// Payment process start करो
export async function initiatePayment({
  templateId,
  templateName,
  amount,
  customer,
  onSuccess,
  onFailure,
}) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    onFailure("Razorpay SDK load नहीं हुआ");
    return;
  }

  try {
    const orderResponse = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, templateId, templateName }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.success) {
      onFailure("Order create नहीं हुआ");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "Web Developer Kiran",
      description: `Purchase: ${templateName}`,
      order_id: orderData.orderId,
      theme: { color: "#3b82f6" },
      prefill: {
        name: customer?.name || "",
        email: customer?.email || "",
        contact: customer?.phone || "",
      },
      handler: async function (response) {
        const verifyResponse = await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            templateId,
            templateName,
            amount,
            customerName: customer?.name || "Guest",
            customerEmail: customer?.email || null,
            customerPhone: customer?.phone || null,
          }),
        });

        const verifyData = await verifyResponse.json();

        if (verifyData.success) {
          onSuccess(verifyData);
        } else {
          onFailure("Payment verify नहीं हुआ");
        }
      },
      modal: {
        ondismiss: function () {
          onFailure("Payment cancel किया गया");
        },
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  } catch (error) {
    console.error("Payment error:", error);
    onFailure("Payment में error आया");
  }
}
