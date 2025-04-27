'use client';

import Image from 'next/image';
import styled from 'styled-components';

const HeroSection = styled.div`
  background: linear-gradient(to bottom right, #f0f4f8, #d9e2ec);
  padding: 4rem 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <HeroSection>
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Champ Mastery Searcher
        </h1>
        <p className="text-lg mb-6">
          Discover and explore your League of Legends champion masteries easily and quickly.
          Search by summoner name and tag, and view detailed champion stats in seconds.
        </p>

        <div className="flex justify-center">
          <Image 
            src="/lolicon.svg.png" 
            alt="League of Legends Logo"
            width={400}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </HeroSection>

      <div className="mt-10 text-center">
        <p className="text-lg">
          Ready to get started? Click on <span className="font-semibold">Search</span> in the navigation bar above!
        </p>
      </div>
    </div>
  );
}
