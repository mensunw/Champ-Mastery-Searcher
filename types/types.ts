// Mensun Wang

// type for mapping through each top 10 list of champion masteries
export interface ChampionMastery {
  championId: Number,
  championName: string,
  championLevel: number,
  championPoints: number,
  championPointsSinceLastLevel: number,
  championPointsUntilNextLevel: number,
  championSeasonMilestone: number,
  lastPlayTime: number,
  markRequiredForNextLevel: number,
  tokensEarned: number,
}