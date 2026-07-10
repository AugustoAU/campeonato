import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex gap-6">
        <Link href="/">Início</Link>
        <Link href="/times">Times</Link>
        <Link href="/jogos">Jogos</Link>
        <Link href="/tabelas">Tabela</Link>
      </div>
    </nav>
  );
}