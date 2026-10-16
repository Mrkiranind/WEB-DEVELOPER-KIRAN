import "./globals.css";

export const metadata = {
  title: "BlogHub - Modern Blog Platform",
  description: "Read articles on technology, design, and development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
