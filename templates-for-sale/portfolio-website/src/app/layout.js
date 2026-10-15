import "./globals.css";

export const metadata = {
  title: "John Doe - Full Stack Developer Portfolio",
  description: "Portfolio website showcasing projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
