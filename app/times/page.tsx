import { teams } from "../data/teams";
import Link from "next/link";

export default function TimesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Times
      </h1>

      <div className="grid gap-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="bg-zinc-900 p-4 rounded-xl"
          >
            <Link
              href={`/times/${team.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
>
              <h2 className="text-xl font-semibold hover:text-blue-400">
                  {team.name}
              </h2>
            </Link>

            <p>{team.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}