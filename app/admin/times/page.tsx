import { teams } from "../../data/teams";

export default function AdminTeamsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        ⚽ Times
      </h1>

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