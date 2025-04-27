import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Champ Mastery Searcher",
  description: "Search your League of Legends champion mastery data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Champ Mastery
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            {/* Add more links here if needed */}
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
