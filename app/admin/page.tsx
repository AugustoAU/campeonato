import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">
        ⚙️ Administração
      </h1>

      <div className="grid gap-4">
        <Link
          href="/admin/times"
          className="bg-zinc-900 p-4 rounded-xl"
        >
          ⚽ Gerenciar Times
        </Link>

        <Link
          href="/admin/jogos"
          className="bg-zinc-900 p-4 rounded-xl"
        >
          📅 Gerenciar Jogos
        </Link>
      </div>
    </div>
  );
}