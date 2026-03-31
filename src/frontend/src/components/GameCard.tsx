import type { Game } from "@/data/mockData";
import { ThumbsUp, Users } from "lucide-react";

interface GameCardProps {
  game: Game;
  size?: "sm" | "md" | "lg";
  index?: number;
}

export function GameCard({ game, size = "md", index = 0 }: GameCardProps) {
  const sizeClasses = {
    sm: "w-40 flex-shrink-0",
    md: "w-52 flex-shrink-0",
    lg: "w-full",
  };

  return (
    <div
      className={`${sizeClasses[size]} card-hover cursor-pointer group`}
      data-ocid={`game.item.${index + 1}`}
    >
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden aspect-video">
        {game.thumbnail ? (
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${game.gradient} flex items-center justify-center`}
          >
            <span className="text-white font-black text-lg text-center px-2 drop-shadow-lg">
              {game.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute top-2 left-2">
          <span className="bg-black/50 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            {game.genre}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-2 px-0.5">
        <h3 className="text-sm font-bold text-foreground truncate">
          {game.title}
        </h3>
        <div className="flex items-center gap-3 mt-0.5">
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Users className="h-3 w-3" />
            {game.playerCount}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <ThumbsUp className="h-3 w-3" />
            {game.likes}
          </span>
        </div>
      </div>
    </div>
  );
}
