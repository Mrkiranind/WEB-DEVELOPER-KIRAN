import "./globals.css";

export const metadata = {
  title: "ShopHub - Modern E-commerce Store",
  description: "Premium products at great prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
