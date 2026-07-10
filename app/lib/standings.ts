import { teams } from "../data/teams";
import { matches } from "../data/matches";

export function getStandings() {
  const table = teams.map((team) => ({
    team: team.name,
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
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

  return table.sort((a, b) => b.points - a.points);
}