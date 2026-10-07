import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Web Developer Kiran — Premium Templates & Full Stack Development",
  description:
    "Buy premium website templates and hire full stack development services. Fast, modern, and professional websites by Web Developer Kiran.",
  keywords: [
    "Web Developer Kiran",
    "Premium Templates",
    "Next.js Templates",
    "Full Stack Development",
    "Website Templates India",
    "React Templates",
  ],
  authors: [{ name: "Web Developer Kiran" }],
  creator: "Web Developer Kiran",
  publisher: "Web Developer Kiran",
  metadataBase: new URL("https://webdeveloperkiran.in"),
  openGraph: {
    title: "Web Developer Kiran — Premium Templates & Full Stack Development",
    description:
      "Buy premium website templates and hire full stack development services.",
    url: "https://webdeveloperkiran.in",
    siteName: "Web Developer Kiran",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Kiran — Premium Templates & Full Stack Development",
    description:
      "Buy premium website templates and hire full stack development services.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
