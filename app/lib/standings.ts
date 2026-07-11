import { teams } from "../data/teams";
import { matches } from "../data/matches";

export function getStandings() {
  const table = teams.map((team) => ({
    team: team.name,

    points: 0,

    games: 0,
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
  }));

  matches.forEach((match) => {
    if (match.status !== "Finalizado") return;

    const home = table.find(
      (t) => t.team === match.homeTeam
    );

    const away = table.find(
      (t) => t.team === match.awayTeam
    );

    if (!home || !away) return;

    home.games += 1;
    away.games += 1;

    home.goalsFor += match.homeGoals!;
    home.goalsAgainst += match.awayGoals!;

    away.goalsFor += match.awayGoals!;
    away.goalsAgainst += match.homeGoals!;

    if (match.homeGoals! > match.awayGoals!) {
      home.points += 3;
      home.wins += 1;

      away.losses += 1;
    } else if (match.homeGoals! < match.awayGoals!) {
      away.points += 3;
      away.wins += 1;

      home.losses += 1;
    } else {
      home.points += 1;
      away.points += 1;

      home.draws += 1;
      away.draws += 1;
    }
  });

  table.forEach((team) => {
    team.goalDifference =
      team.goalsFor - team.goalsAgainst;
  });

  return table.sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points;
    }

    return b.goalDifference - a.goalDifference;
  });
}