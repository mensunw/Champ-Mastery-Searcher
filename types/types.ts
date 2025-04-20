// Mensun Wang

// type for mapping through each top 10 list of champion masteries
export interface ChampionMastery {
  championId: Number,
  championLevel: Number,
  championPoints: Number,
  championPointsSinceLastLevel: Number,
  championPointsUntilNextLevel: Number,
  championSeasonMilestone: Number,
  lastPlayTime: Number,
  markRequiredForNextLevel: Number,
  tokensEarned: Number,
}