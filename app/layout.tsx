import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Minotti | Sawyer — Consultants in Executive Search",
  description: "Boutique executive search firm specializing in high-stakes leadership hires. Partner-led, high-touch, and built for founders, investors, and boards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
