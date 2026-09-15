import "./globals.css";

export const metadata = {
  title: "DevSutra — Premium Templates & Full Stack Development",
  description:
    "Buy premium website templates and hire full stack development services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
