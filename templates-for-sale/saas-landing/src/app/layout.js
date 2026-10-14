import "./globals.css";

export const metadata = {
  title: "SaaSFlow - Modern SaaS Platform",
  description: "Scale your business with our powerful SaaS platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
