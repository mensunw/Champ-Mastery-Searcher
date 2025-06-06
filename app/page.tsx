// Jiaqing Xu and Mensun Wang (CTA button)
// HomePage.tsx - Displays landing page content and project introduction

'use client';

import Image from 'next/image';
import styled from 'styled-components';
import CallToAction from '@/app/components/CallToAction';

//background and shadow
const HeroSection = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #d9e2ec);
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

// Main home page component
export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {/* Project introduction area */}
      <HeroSection>
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Champ Mastery Searcher
        </h1>

        {/* First paragraph: brief description of the app */}
        <p className="text-lg mb-6">
          Champ Mastery Searcher is a simple web app we built for our CS391 final project.
          It lets players quickly check their top champion masteries in League of Legends,
          just by entering a Riot ID and tag. No login or account linking needed.
        </p>

        {/* Second paragraph: technical overview */}
        <p className="text-lg mb-6">
          The app connects to Riot’s public API to fetch mastery data and champion info.
          We use Next.js for routing and API handling, combined with Tailwind CSS and styled-components for styling.
          Everything is lightweight, fast, and focused on ease of use.
        </p>

        {/* League of Legends branding image */}
        <div className="flex justify-center my-6">
          <Image
            src="/lolicon.svg.png"
            alt="League of Legends Logo"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Closing call-to-action */}
        <p className="text-lg">
          Whether you&apos;re checking your mains or comparing stats with friends,
          Champ Mastery Searcher makes it quick and easy.
          Just click <span className="font-semibold">Search</span> below to get started!
        </p>
      </HeroSection>

      {/* displays CTA button  */}
      <CallToAction />

      {/* Team credit */}
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-600">
          Built by Mensun Wang, Jiale (Gerald) Quan, and Jiaqing (Kevin) Xu.
        </p>
      </div>
    </div>
  );
}
