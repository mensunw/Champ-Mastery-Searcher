'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState('Champ Mastery Searcher');

  useEffect(() => {
    if (pathname === '/') {
      setPageTitle('Champ Mastery Searcher');
    } else if (pathname.startsWith('/about')) {
      setPageTitle('About - Champ Mastery');
    } else if (pathname.startsWith('/search')) {
      setPageTitle('Search - Champ Mastery');
    } else {
      setPageTitle('Champ Mastery Searcher');
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <title>{pageTitle}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            {pageTitle}
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/search" className="hover:underline">
              Search
            </Link>
          </div>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
