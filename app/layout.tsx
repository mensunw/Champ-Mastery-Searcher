// Jiale Quan
// layout.tsx - Root layout component for entire app (NavBar, Footer, PageWrapper)

'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import styled from 'styled-components';

// Import custom Google fonts (Geist) for consistent typography
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Main container that wraps entire page structure and ensures full-height layout
const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
`;

// Top navigation bar with dark background and horizontal link layout
const Navbar = styled.nav`
  background-color: #1f2937;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Container for nav links on the right side
const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

// Individual link style with hover effect
const NavLink = styled(Link)`
  &:hover {
    color: #EEEEEE;
  }
`;

// Footer section pinned to bottom of page
const Footer = styled.footer`
  margin-top: auto;
  background-color: #f1f5f9;
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
  color: #64748b;
`;

// Root layout component wraps all pages with NavBar and Footer
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get current route path
  const [pageTitle, setPageTitle] = useState('Champ Mastery Searcher');

  // Dynamically update the document title based on route
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
        {/* Dynamically set page title */}
        <title>{pageTitle}</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MainContainer>
          {/* Top nav bar with page title and links */}
          <Navbar>
            <NavLink href="/" className="text-xl font-bold">
              {pageTitle}
            </NavLink>
            <NavLinks>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/search">Search</NavLink>
            </NavLinks>
          </Navbar>

          {/* Page content will render here */}
          <main className="p-6">{children}</main>

          {/* Global footer */}
          <Footer>
            © 2025 Champ Mastery Searcher. All rights reserved.
          </Footer>
        </MainContainer>
      </body>
    </html>
  );
}
