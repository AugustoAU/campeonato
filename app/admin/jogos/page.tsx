import { matches } from "../../data/matches";

export default function AdminGamesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        📅 Jogos
      </h1>

      <div className="grid gap-4">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            {match.homeTeam} x {match.awayTeam}
          </div>
        ))}
      </div>
    </div>
  );
}