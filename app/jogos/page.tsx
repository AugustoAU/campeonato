import { matches } from "../data/matches";
import MatchCard from "../components/MatchCard";

export default function JogosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        📅 Jogos
      </h1>

      <div className="grid gap-4">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            date={match.date}
            status={match.status}
            homeGoals={match.homeGoals}
            awayGoals={match.awayGoals}
          />
        ))}
      </div>
    </div>
  );
}