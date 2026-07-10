import { standings } from "../data/standings";

export default function TabelaPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        📊 Classificação
      </h1>

      <div className="bg-zinc-900 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left p-4">Pos</th>
              <th className="text-left p-4">Time</th>
              <th className="text-left p-4">Pts</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team) => (
              <tr
                key={team.position}
                className="border-b border-zinc-800"
              >
                <td className="p-4">{team.position}</td>
                <td className="p-4">{team.team}</td>
                <td className="p-4">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}