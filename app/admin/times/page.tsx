import Link from "next/link";
import { teams } from "../../data/teams";

export default function AdminTeamsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        ⚽ Times
      </h1>

      <Link
        href="/admin/times/novo"
        className="inline-block mb-6 bg-green-600 px-4 py-2 rounded-lg"
      >
        ➕ Novo Time
      </Link>

      <div className="grid gap-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <h2 className="font-bold">
              {team.name}
            </h2>

            <p>{team.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}