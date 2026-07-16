import Link from "next/link";
import { matches } from "../../data/matches";

export default function AdminGamesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        📅 Jogos
      </h1>

      <Link
        href="/admin/jogos/novo"
        className="inline-block mb-6 bg-green-600 px-4 py-2 rounded-lg"
      >
        ➕ Novo Jogo
      </Link>

      <div className="grid gap-4">
        {matches.map((match) => (
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
          </div>
        ))}
      </div>
    </div>
  );
}