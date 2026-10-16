import "./globals.css";

export const metadata = {
  title: "Bella Vista - Authentic Italian Restaurant",
  description: "Authentic Italian cuisine in Mumbai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
