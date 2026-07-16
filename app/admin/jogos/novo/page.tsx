import { teams } from "../../../data/teams";

export default function NovoJogoPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">
        📅 Novo Jogo
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block mb-2">
            Time da Casa
          </label>

          <select className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700">
            {teams.map((team) => (
              <option key={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Time Visitante
          </label>

          <select className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700">
            {teams.map((team) => (
              <option key={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2">
            Data
          </label>

          <input
            type="date"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded-lg"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}