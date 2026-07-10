import { matches } from "./data/matches";

export default function Home() {
  const proximosJogos = matches.filter(
    (match) => match.status === "Agendado"
  );

  const resultados = matches.filter(
    (match) => match.status === "Finalizado"
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        🏆 Campeonato AU
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Próximos Jogos
        </h2>

        <div className="grid gap-4">
          {proximosJogos.map((match) => (
            <div
              key={match.id}
              className="bg-zinc-900 p-4 rounded-xl"
            >
              {match.homeTeam} x {match.awayTeam}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Últimos Resultados
        </h2>

        <div className="grid gap-4">
          {resultados.map((match) => (
            <div
              key={match.id}
              className="bg-zinc-900 p-4 rounded-xl"
            >
              {match.homeTeam} {match.homeGoals} x {match.awayGoals}{" "}
              {match.awayTeam}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}