type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  date: string;
  status: string;
  homeGoals?: number;
  awayGoals?: number;
};

export default function MatchCard({
  homeTeam,
  awayTeam,
  date,
  status,
  homeGoals,
  awayGoals,
}: MatchCardProps) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl">
      <h2 className="text-2xl font-bold">
        {homeTeam} x {awayTeam}
      </h2>

      <p>Data: {date}</p>
      <p>Status: {status}</p>

      {status === "Finalizado" && (
        <p className="font-bold mt-2">
          Resultado: {homeGoals} x {awayGoals}
        </p>
      )}
    </div>
  );
}