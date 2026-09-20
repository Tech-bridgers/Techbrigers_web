import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Bridgers | Digital Product Studio",
  description:
    "Tech Bridgers partners with ambitious brands and venture-backed startups to engineer modern websites, custom software, and robust mobile applications that scale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased text-ink">
        {children}
      </body>
    </html>
  );
}
