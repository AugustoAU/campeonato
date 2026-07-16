import Link from "next/link";
export default function NovoTimePage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl font-bold mb-6">
        ⚽ Novo Time
      </h1>

      <Link
        href="/admin/times/novo"
        className="inline-block mb-6 bg-green-600 px-4 py-2 rounded-lg"
        >
        ➕ Novo Time
    </Link>

      <form className="space-y-4">
        <div>
          <label className="block mb-2">
            Nome do Time
          </label>

          <input
            type="text"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
            placeholder="Ex: Amigos de Cima"
          />
        </div>

        <div>
          <label className="block mb-2">
            Cidade
          </label>

          <input
            type="text"
            className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700"
            placeholder="Ex: Cuiabá"
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