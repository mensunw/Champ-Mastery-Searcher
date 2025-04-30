// Jiale Quan
// SearchPage.tsx - Page for querying and displaying champion mastery data

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import MasteryCard from '../components/MasteryCard';
import { ChampionMastery } from '@/types/types'; // Local type definition for mastery info

// Styled container for search UI with background and shadow
const SearchContainer = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

// Styled search button with hover color
const SearchButton = styled.button`
  background-color: #c89c38;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #a67f2f;
  }
`;

// Main component: renders input form and mastery card results
export default function SearchPage() {
  // Input state for summoner name and tag
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  // Loading and error UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Holds returned mastery data from API
  const [masteryData, setMasteryData] = useState<ChampionMastery[]>([]);

  // Form submit handler: calls backend API endpoints and updates state
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setMasteryData([]);

    try {
      // Step 1: fetch summoner ID by name and tag
      const query1 = new URLSearchParams({ name, tag }).toString();
      const res1 = await fetch(`/api/getPlayerID?${query1}`);
      if (!res1.ok) throw new Error((await res1.json()).error);
      const { id } = await res1.json();

      // Step 2: fetch top champion masteries using that ID
      const query2 = new URLSearchParams({ id }).toString();
      const res2 = await fetch(`/api/getChampionMasteries?${query2}`);
      if (!res2.ok) throw new Error((await res2.json()).error);

      const { masteryData } = await res2.json();
      setMasteryData(masteryData); // Save data to render
    } catch (err) {
      // Handle typed or unknown errors
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error has occurred");
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <SearchContainer>
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-4 text-center">Search Champion Masteries</h1>

        {/* User input form */}
        <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Summoner Name (e.g. portal)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Tag (e.g. only2)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
            className="p-2 border rounded"
          />
          {/* Styled search button */}
          <SearchButton type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </SearchButton>
        </form>

        {/* Error message if API fails */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Render list of mastery cards if data available */}
        {masteryData.length > 0 && (
          <div className="space-y-3">
            {masteryData.map((champ, i) => (
              <MasteryCard
                key={i}
                championName={champ.championName}
                championLevel={champ.championLevel}
                championPoints={champ.championPoints}
              />
            ))}
          </div>
        )}
      </SearchContainer>
    </div>
  );
}
