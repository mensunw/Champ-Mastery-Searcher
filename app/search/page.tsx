//Jiale Quan

'use client';

import { useState } from 'react';
import styled from 'styled-components';
import MasteryCard from '../components/MasteryCard';

const SearchContainer = styled.div`
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const SearchButton = styled.button`
  background-color: #c89c38;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
    &:hover {
    background-color: #a67f2f;
  }
`

export default function SearchPage() {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [masteryData, setMasteryData] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setMasteryData([]);

    try {
      const query1 = new URLSearchParams({ name, tag }).toString();
      const res1 = await fetch(`/api/getPlayerID?${query1}`);
      if (!res1.ok) throw new Error((await res1.json()).error);
      const { id } = await res1.json();

      const query2 = new URLSearchParams({ id }).toString();
      const res2 = await fetch(`/api/getChampionMasteries?${query2}`);
      if (!res2.ok) throw new Error((await res2.json()).error);

      const { masteryData } = await res2.json();
      setMasteryData(masteryData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <SearchContainer>
        <h1 className="text-3xl font-bold mb-4 text-center">Search Champion Masteries</h1>

        <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Summoner Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Tag (e.g. NA1)"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <SearchButton
            type="submit"
            //className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </SearchButton>
        </form>

        {error && <p className="text-red-500 text-center">{error}</p>}

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
