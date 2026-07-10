import { getStandings } from "../lib/standings";

export default function TabelaPage() {
  const standings = getStandings();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        📊 Classificação
      </h1>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Pos</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Pts</th>
              <th className="p-4 text-left">V</th>
              <th className="p-4 text-left">E</th>
              <th className="p-4 text-left">D</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team, index) => (
              <tr key={team.team}>
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{team.team}</td>
                <td className="p-4">{team.points}</td>
                <td className="p-4">{team.wins}</td>
                <td className="p-4">{team.draws}</td>
                <td className="p-4">{team.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}