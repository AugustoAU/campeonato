export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        🏆 Campeonato AU
      </h1>

      <section className="bg-zinc-900 text-white p-4 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Próximos Jogos
        </h2>

        <div className="space-y-2">
          <div>Tropa da Banca x Familia DF</div>
          <div>Amigos do Toddy x Amigos de Cima</div>
        </div>
      </section>

      <section className="bg-zinc-900 text-white p-4 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Últimos Resultados
        </h2>

        <div className="space-y-2">
          <div>Tropa da Banca 2 x 0 Amigos do Toddy</div>
          <div>Amigos de Cima 1 x 1 Tropa da Banca</div>
        </div>
      </section>
    </div>
  );
}