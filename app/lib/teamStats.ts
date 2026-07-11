import { matches } from "../data/matches";

export function getTeamStats(teamName: string) {
  const stats = {
    games: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  };

  matches.forEach((match) => {
    if (match.status !== "Finalizado") return;

    const isHome = match.homeTeam === teamName;
    const isAway = match.awayTeam === teamName;

    if (!isHome && !isAway) return;

    stats.games++;

    const goalsScored = isHome
      ? match.homeGoals!
      : match.awayGoals!;

    const goalsConceded = isHome
      ? match.awayGoals!
      : match.homeGoals!;

    stats.goalsFor += goalsScored;
    stats.goalsAgainst += goalsConceded;

    if (goalsScored > goalsConceded) {
      stats.wins++;
    } else if (goalsScored < goalsConceded) {
      stats.losses++;
    } else {
      stats.draws++;
    }
  });

  return {
    ...stats,
    goalDifference:
      stats.goalsFor - stats.goalsAgainst,
  };
}