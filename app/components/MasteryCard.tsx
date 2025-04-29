// Jiaqing Xu
// MasteryCard.tsx - Displays an individual champion mastery card with image, name, level, and points

'use client';

import styled from 'styled-components';

// Mapping of special champion names to Riot's image-safe filenames
// These names contain spaces, apostrophes, or inconsistent formatting in Data Dragon
const specialNameMap: Record<string, string> = {
  "Kai'Sa": "Kaisa",
  "Vel'Koz": "Velkoz",
  "Cho'Gath": "Chogath",
  "Kha'Zix": "Khazix",
  "Rek'Sai": "Reksai",
  "Dr. Mundo": "DrMundo",
  "LeBlanc": "Leblanc",
  "Wukong": "MonkeyKing",
  "Nunu & Willump": "Nunu",
  "Jarvan IV": "JarvanIV",
};

// Styled card container
const Card = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

// Styled champion image with rounded corners and fixed size
const ChampionImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0 auto 1rem;
`;

// Props definition for one champion's mastery data
type MasteryCardProps = {
  championName: string;
  championLevel: number;
  championPoints: number;
};

// Main MasteryCard component
export default function MasteryCard({ championName, championLevel, championPoints }: MasteryCardProps) {
  // Clean and normalize champion name to match Riot CDN image URL
  const imageName = specialNameMap[championName] || championName.replace(/[\s'.]/g, '');

  return (
    <Card>
      {/* Champion icon image pulled from Riot's Data Dragon */}
      <ChampionImage
        src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${imageName}.png`}
        alt={championName}
        // Fallback image if Riot image fails to load (prevents broken icons)
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/default.png';
        }}
      />

      {/* Display champion name, mastery level, and points */}
      <p><strong>Champion:</strong> {championName}</p>
      <p><strong>Level:</strong> {championLevel}</p>
      <p><strong>Points:</strong> {championPoints.toLocaleString()}</p>
    </Card>
  );
}
