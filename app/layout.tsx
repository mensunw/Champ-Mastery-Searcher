'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import styled from 'styled-components'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
  background-color: #1f2937; 
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

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
        <MainContainer>
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
          <main className="p-6">{children}</main>
        </MainContainer>
      </body>
    </html>
  );
}
