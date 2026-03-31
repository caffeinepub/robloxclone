import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import {
  avatarItems,
  featuredGames,
  feedCards,
  friends,
  heroGames,
  recentActivities,
  recentGames,
} from "@/data/mockData";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";
import { useRef, useState } from "react";

export function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const recentScrollRef = useRef<HTMLDivElement>(null);
  const featuredScrollRef = useRef<HTMLDivElement>(null);

  const scrollRow = (
    ref: React.RefObject<HTMLDivElement | null>,
    dir: number,
  ) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  };

  const heroGame = heroGames[heroIndex];

  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="hero-gradient relative overflow-hidden py-12 px-4">
        {/* Abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-screen-xl">
          <h2 className="text-center text-white/80 font-bold uppercase tracking-widest text-xs mb-6">
            🎮 Featured Games
          </h2>

          {/* Main hero card */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {heroGame.thumbnail ? (
                <img
                  src={heroGame.thumbnail}
                  alt={heroGame.title}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div
                  className={`w-full aspect-video bg-gradient-to-br ${heroGame.gradient} flex items-center justify-center`}
                >
                  <span className="text-white font-black text-3xl drop-shadow-lg">
                    {heroGame.title}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {heroGame.genre}
                    </span>
                    <h3 className="text-white text-2xl font-black mt-1">
                      {heroGame.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {heroGame.description}
                    </p>
                    <div className="flex items-center gap-1 mt-1 text-white/70 text-xs">
                      <Users className="h-3 w-3" />
                      {heroGame.playerCount}
                    </div>
                  </div>
                  <Button
                    className="bg-blox-gold text-gray-900 font-black uppercase text-sm hover:bg-yellow-300 flex-shrink-0"
                    data-ocid="hero.play_now.button"
                  >
                    PLAY NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel strip */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {heroGames.map((g, i) => (
              <button
                type="button"
                key={g.id}
                onClick={() => setHeroIndex(i)}
                data-ocid={`hero.carousel.item.${i + 1}`}
                className="group relative rounded-xl overflow-hidden transition-all"
                style={{ width: i === heroIndex ? 80 : 56, height: 48 }}
              >
                {g.thumbnail ? (
                  <img
                    src={g.thumbnail}
                    alt={g.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${g.gradient}`}
                  />
                )}
                {i === heroIndex && (
                  <div className="absolute inset-0 ring-2 ring-white rounded-xl" />
                )}
              </button>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-1.5">
            {heroGames.map((g, i) => (
              <button
                type="button"
                key={g.id}
                onClick={() => setHeroIndex(i)}
                data-ocid={`hero.dot.${i + 1}`}
                className={`rounded-full transition-all ${
                  i === heroIndex ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTINUE PLAYING ===== */}
      <section className="py-10 px-4 bg-background">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-black uppercase tracking-tight">
              Continue Playing
            </h2>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => scrollRow(recentScrollRef, -1)}
                className="p-1.5 rounded-full bg-muted hover:bg-border transition-colors"
                data-ocid="continue_playing.pagination_prev"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollRow(recentScrollRef, 1)}
                className="p-1.5 rounded-full bg-muted hover:bg-border transition-colors"
                data-ocid="continue_playing.pagination_next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div
            ref={recentScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          >
            {recentGames.map((game, i) => (
              <GameCard key={game.id} game={game} size="md" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED GAMES ===== */}
      <section className="py-10 px-4 panel-gradient">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black uppercase tracking-tight text-white">
              Featured Games
            </h2>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => scrollRow(featuredScrollRef, -1)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                data-ocid="featured_games.pagination_prev"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
              <button
                type="button"
                onClick={() => scrollRow(featuredScrollRef, 1)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                data-ocid="featured_games.pagination_next"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
          <div
            ref={featuredScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          >
            {featuredGames.map((game, i) => (
              <div
                key={game.id}
                className="w-48 flex-shrink-0 card-hover cursor-pointer group"
                data-ocid={`featured.item.${i + 1}`}
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
                    <span className="bg-black/50 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
                      {game.genre}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-sm font-bold text-white truncate">
                    {game.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[11px] text-white/50 flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {game.playerCount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AVATAR SHOP ===== */}
      <section className="py-10 px-4 bg-background">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-black uppercase tracking-tight">
              Customize Your Avatar
            </h2>
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-bold"
              data-ocid="avatar_shop.view_all.button"
            >
              View All →
            </Button>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
            {avatarItems.map((item, i) => (
              <div
                key={item.id}
                className="w-32 flex-shrink-0 card-hover cursor-pointer"
                data-ocid={`avatar_shop.item.${i + 1}`}
              >
                <div
                  className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center gap-1 shadow-card`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                <div className="mt-2">
                  <p className="text-xs font-bold text-foreground truncate">
                    {item.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.category}
                  </p>
                  <p className="text-xs font-black text-amber-600 mt-0.5">
                    R$ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL FEED ===== */}
      <section
        className="py-10 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.42 0.15 250) 0%, oklch(0.38 0.12 270) 100%)",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-lg font-black uppercase tracking-tight text-white mb-6">
            Social Feed
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Activities + Friends */}
            <div className="space-y-6">
              {/* Recent Activities */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
                  Recent Activities
                </h3>
                <div className="space-y-3">
                  {recentActivities.map((act, i) => (
                    <div
                      key={act.id}
                      className="flex items-center gap-3"
                      data-ocid={`activity.item.${i + 1}`}
                    >
                      <div
                        className={`h-8 w-8 rounded-full ${act.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                      >
                        {act.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs">
                          <span className="font-bold">{act.user}</span>{" "}
                          <span className="text-white/70">{act.action}</span>
                        </p>
                        <p className="text-white/40 text-[11px]">{act.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friends */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
                  Friends Online
                </h3>
                <div className="space-y-3">
                  {friends.map((friend, i) => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-3"
                      data-ocid={`friends.item.${i + 1}`}
                    >
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blox-blue to-blox-purple flex items-center justify-center text-white text-xs font-bold">
                          {friend.avatar}
                        </div>
                        {friend.isOnline && (
                          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-blox-green border-2 border-transparent rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-bold">
                          {friend.username}
                        </p>
                        {friend.status ? (
                          <p className="text-white/50 text-[11px] truncate">
                            {friend.status}
                          </p>
                        ) : (
                          <p className="text-white/30 text-[11px]">Offline</p>
                        )}
                      </div>
                      {friend.isOnline && (
                        <span className="text-[10px] font-semibold text-blox-green">
                          Online
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Feed cards */}
            <div className="space-y-4">
              {feedCards.map((card, i) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer"
                  data-ocid={`feed.item.${i + 1}`}
                >
                  <div className="relative">
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-36 object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-36 bg-gradient-to-br ${card.gradient}`}
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-foreground mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                      {card.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground">
                        by {card.author}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-amber-600">
                          {card.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
