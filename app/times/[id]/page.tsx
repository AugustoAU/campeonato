import { teams } from "../../data/teams";
import { matches } from "../../data/matches";
import { getTeamStats } from "../../lib/teamStats";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const team = teams.find(
    (team) =>
      team.name.toLowerCase().replaceAll(" ", "-") === id
  );

  if (!team) {
    return (
      <div>
        <h1>Time não encontrado</h1>
      </div>
    );
  }

  const teamMatches = matches.filter(
    (match) =>
      match.homeTeam === team.name ||
      match.awayTeam === team.name
  );

  // 👇 PARTE 3
  const stats = getTeamStats(team.name);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">
        ⚽ {team.name}
      </h1>

      <p className="text-xl">
        📍 {team.city}
      </p>

      <p>ID: {team.id}</p>

      {/* 👇 PARTE 4 */}
      <div className="bg-zinc-900 p-4 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">
          📊 Estatísticas
        </h2>

        <div className="space-y-2">
          <p>Jogos: {stats.games}</p>
          <p>Vitórias: {stats.wins}</p>
          <p>Empates: {stats.draws}</p>
          <p>Derrotas: {stats.losses}</p>

          <p>GP: {stats.goalsFor}</p>
          <p>GC: {stats.goalsAgainst}</p>

          <p>
            SG: {stats.goalDifference > 0 ? "+" : ""}
            {stats.goalDifference}
          </p>
        </div>
      </div>

      {/* Jogos */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          📅 Jogos
        </h2>

        <div className="space-y-3">
          {teamMatches.map((match) => (
            <div
              key={match.id}
              className="bg-zinc-900 p-4 rounded-xl"
            >
              <div className="font-semibold">
                {match.homeTeam} x {match.awayTeam}
              </div>

              <div>
                Status: {match.status}
              </div>

              {match.status === "Finalizado" && (
                <div>
                  Resultado: {match.homeGoals} x {match.awayGoals}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}