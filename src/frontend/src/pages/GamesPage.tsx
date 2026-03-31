import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { allGames } from "@/data/mockData";
import { Search, ThumbsUp, Users } from "lucide-react";
import { useState } from "react";

const genres = [
  "All",
  "Roleplay",
  "Adventure",
  "Obby",
  "Simulator",
  "RPG",
  "Action",
  "Mystery",
  "FPS",
  "Survival",
];

export function GamesPage() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filtered = allGames.filter((g) => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === "All" || g.genre === genre;
    return matchSearch && matchGenre;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Page header */}
      <div className="hero-gradient py-12 px-4">
        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="text-3xl font-black uppercase text-white tracking-tight mb-2">
            Explore Games
          </h1>
          <p className="text-white/70 mb-6">
            Discover millions of games created by the community
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-full bg-white border-0 shadow-lg"
              data-ocid="games.search_input"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Genre filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {genres.map((g) => (
            <button
              type="button"
              key={g}
              onClick={() => setGenre(g)}
              data-ocid="games.genre.tab"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold flex-shrink-0 transition-colors ${
                genre === g
                  ? "bg-blox-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-4">
          Showing <strong>{filtered.length}</strong> games
          {genre !== "All" && (
            <>
              {" "}
              in <strong>{genre}</strong>
            </>
          )}
        </p>

        {/* Games grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20" data-ocid="games.empty_state">
            <p className="text-4xl mb-3">🎮</p>
            <p className="text-muted-foreground font-semibold">
              No games found. Try a different search!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((game, i) => (
              <div
                key={game.id}
                className="card-hover cursor-pointer group"
                data-ocid={`games.item.${i + 1}`}
              >
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
                      <span className="text-white font-bold text-sm text-center px-2 drop-shadow">
                        {game.title}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-2 left-2">
                    <span className="bg-black/60 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                      {game.genre}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-bold truncate">{game.title}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
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
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
