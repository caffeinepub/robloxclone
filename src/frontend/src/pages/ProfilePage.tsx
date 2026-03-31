import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { friends, userProfile } from "@/data/mockData";
import { Calendar, Gamepad2, Star, Trophy, Users } from "lucide-react";

export function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Banner */}
      <div className="hero-gradient h-40 relative" />

      <div className="mx-auto max-w-screen-xl px-4">
        {/* Avatar + info */}
        <div className="-mt-16 mb-8 flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <div className="relative">
            <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-blox-blue to-blox-purple flex items-center justify-center text-white text-4xl font-black shadow-glow border-4 border-background">
              {userProfile.avatar}
            </div>
            <span className="absolute -bottom-1 -right-1 h-5 w-5 bg-blox-green border-3 border-background rounded-full" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl font-black">{userProfile.username}</h1>
              <Badge className="bg-blox-blue text-white text-xs">
                Level {userProfile.level}
              </Badge>
              {userProfile.badges.map((b) => (
                <Badge key={b} variant="outline" className="text-xs">
                  {b}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" /> Joined{" "}
                {userProfile.joinDate}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {userProfile.friends} Friends
              </span>
              <span className="flex items-center gap-1 font-bold text-amber-600">
                R$ {userProfile.robux.toLocaleString()}
              </span>
            </div>
          </div>
          <Button
            className="bg-blox-blue text-white font-bold"
            data-ocid="profile.edit.button"
          >
            Edit Profile
          </Button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Robux",
              value: `R$ ${userProfile.robux.toLocaleString()}`,
              icon: "💰",
              color: "from-amber-400 to-yellow-300",
            },
            {
              label: "Friends",
              value: userProfile.friends,
              icon: "👥",
              color: "from-blox-blue to-cyan-400",
            },
            {
              label: "Level",
              value: userProfile.level,
              icon: "⭐",
              color: "from-purple-500 to-pink-400",
            },
            {
              label: "Games Created",
              value: userProfile.createdGames.length,
              icon: "🎮",
              color: "from-emerald-500 to-teal-400",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 shadow-card flex items-center gap-3"
              data-ocid={`profile.stat.${i + 1}`}
            >
              <div
                className={`h-10 w-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-lg`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-lg font-black">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
          {/* Created Games */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" /> Created Games
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userProfile.createdGames.map((game, i) => (
                <div
                  key={game.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-card card-hover cursor-pointer"
                  data-ocid={`profile.created_game.item.${i + 1}`}
                >
                  <div
                    className={`h-32 bg-gradient-to-br ${game.gradient} flex items-center justify-center`}
                  >
                    <span className="text-white font-black text-lg drop-shadow-lg">
                      {game.title}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm">{game.title}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {game.visits} visits
                    </p>
                    <div className="flex gap-2 mt-3">
                      <Button
                        size="sm"
                        className="text-xs bg-blox-blue text-white h-7"
                        data-ocid={`profile.edit_game.button.${i + 1}`}
                      >
                        Edit Game
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-xs h-7"
                        data-ocid={`profile.play_game.button.${i + 1}`}
                      >
                        Play
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Create new game */}
              <div
                className="bg-white rounded-2xl border-2 border-dashed border-border p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blox-blue hover:bg-blue-50 transition-colors card-hover"
                data-ocid="profile.create_game.button"
              >
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-2">
                  <span className="text-2xl">+</span>
                </div>
                <p className="font-bold text-sm">Create New Game</p>
                <p className="text-xs text-muted-foreground">
                  Start building your world
                </p>
              </div>
            </div>
          </div>

          {/* Friends */}
          <div>
            <h2 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" /> Friends
            </h2>
            <div className="bg-white rounded-2xl shadow-card p-4 space-y-3">
              {friends.map((friend, i) => (
                <div
                  key={friend.id}
                  className="flex items-center gap-3"
                  data-ocid={`profile.friend.item.${i + 1}`}
                >
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blox-blue to-blox-purple flex items-center justify-center text-white text-sm font-bold">
                      {friend.avatar}
                    </div>
                    {friend.isOnline && (
                      <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-blox-green border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold truncate">
                      {friend.username}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {friend.status ??
                        (friend.isOnline ? "Online" : "Offline")}
                    </p>
                  </div>
                  {friend.isOnline ? (
                    <span className="text-[10px] font-semibold text-blox-green bg-green-50 px-2 py-0.5 rounded-full">
                      Online
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      Offline
                    </span>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full text-xs mt-2"
                data-ocid="profile.add_friend.button"
              >
                + Add Friends
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
