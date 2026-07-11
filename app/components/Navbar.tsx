import Link from "next/link";

export default function Navbar() {
  return (
    < nav className="bg-black text-white p-4 border-b border-zinc-800">
      <div className="flex gap-6">
        <Link href="/" className="hover:text-blue-400 transition">Início</Link>
        <Link href="/times" className="hover:text-blue-400 transition">Times</Link>
        <Link href="/jogos" className="hover:text-blue-400 transition">Jogos</Link>
        <Link href="/tabelas" className="hover:text-blue-400 transition">Tabela</Link>
        <Link href="/admin" className="hover:text-blue-400 transition">Admin</Link>
      </div>
    </nav>
  );
}