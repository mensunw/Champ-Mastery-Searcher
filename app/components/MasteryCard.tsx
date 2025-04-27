// Jiaqing Xu

'use client';

import styled from 'styled-components';

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

const ChampionImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0 auto 1rem;
`;

type MasteryCardProps = {
  championName: string;
  championLevel: number;
  championPoints: number;
};

export default function MasteryCard({ championName, championLevel, championPoints }: MasteryCardProps) {
  const imageName = specialNameMap[championName] || championName.replace(/[\s'.]/g, '');

  return (
    <Card>
      <ChampionImage
        src={`https://ddragon.leagueoflegends.com/cdn/14.8.1/img/champion/${imageName}.png`}
        alt={championName}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/default.png';
        }}
      />
      <p><strong>Champion:</strong> {championName}</p>
      <p><strong>Level:</strong> {championLevel}</p>
      <p><strong>Points:</strong> {championPoints.toLocaleString()}</p>
    </Card>
  );
}
