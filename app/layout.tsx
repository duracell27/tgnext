import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telegram mini app",
  description: "Simple clicker in Telegram with Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
