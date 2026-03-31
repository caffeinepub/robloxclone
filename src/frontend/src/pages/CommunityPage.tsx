import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star } from "lucide-react";

const posts = [
  {
    id: "p1",
    author: "DragonBuilder99",
    avatar: "DB",
    title: "Just hit 100K visits on my RPG!",
    body: "After 6 months of building, Dragon Quest finally reached 100K visits. Thank you all for the support! 🎉",
    likes: 428,
    comments: 64,
    time: "2h ago",
    tag: "Achievement",
    color: "bg-orange-500",
  },
  {
    id: "p2",
    author: "PixelArtQueen",
    avatar: "PA",
    title: "New avatar collection drop 🎨",
    body: "Just uploaded 12 new pixel art accessories to the shop. Galaxy theme, check them out!",
    likes: 312,
    comments: 41,
    time: "4h ago",
    tag: "Creator",
    color: "bg-pink-500",
  },
  {
    id: "p3",
    author: "SpeedrunKing",
    avatar: "SK",
    title: "Tower of Hell world record attempt!",
    body: "Going live in 30 minutes for a world record attempt on Tower of Hell. Sub 4 minutes is the goal!",
    likes: 891,
    comments: 120,
    time: "5h ago",
    tag: "Event",
    color: "bg-purple-600",
  },
  {
    id: "p4",
    author: "BloxNewsDaily",
    avatar: "BN",
    title: "This week in BloxVerse: Major updates!",
    body: "Blox Fruits Season 3 launched, Adopt Me! gets holiday event, and Dragon Simulator adds mythic tier.",
    likes: 1204,
    comments: 203,
    time: "1d ago",
    tag: "News",
    color: "bg-blue-600",
  },
];

const events = [
  {
    id: "e1",
    title: "Holiday Build Contest",
    prize: "50,000 R$",
    deadline: "Dec 31",
    gradient: "from-red-500 to-green-500",
  },
  {
    id: "e2",
    title: "Speed Run Tournament",
    prize: "25,000 R$",
    deadline: "Jan 15",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    id: "e3",
    title: "Avatar Design Challenge",
    prize: "10,000 R$",
    deadline: "Jan 20",
    gradient: "from-pink-500 to-orange-400",
  },
];

export function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="hero-gradient py-14 px-4 text-center">
        <h1 className="text-3xl font-black uppercase text-white tracking-tight mb-2">
          Community Hub
        </h1>
        <p className="text-white/70">
          Connect, share, and celebrate with millions of players
        </p>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">
              Latest Posts
            </h2>
            <div className="space-y-4">
              {posts.map((post, i) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-card p-5 card-hover cursor-pointer"
                  data-ocid={`community.post.item.${i + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-9 w-9 rounded-full ${post.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                    >
                      {post.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-bold">{post.author}</span>
                        <Badge
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0"
                        >
                          {post.tag}
                        </Badge>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {post.time}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm mb-1">{post.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {post.body}
                      </p>
                      <div className="flex items-center gap-4 mt-3">
                        <button
                          type="button"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-red-500 transition-colors"
                          data-ocid={`community.like.button.${i + 1}`}
                        >
                          <Heart className="h-3.5 w-3.5" /> {post.likes}
                        </button>
                        <button
                          type="button"
                          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-blox-blue transition-colors"
                          data-ocid={`community.comment.button.${i + 1}`}
                        >
                          <MessageCircle className="h-3.5 w-3.5" />{" "}
                          {post.comments}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events sidebar */}
          <div>
            <h2 className="text-lg font-black uppercase tracking-tight mb-4">
              Active Events
            </h2>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-card overflow-hidden card-hover cursor-pointer"
                  data-ocid={`community.event.item.${i + 1}`}
                >
                  <div
                    className={`h-20 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}
                  >
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      Prize:{" "}
                      <strong className="text-amber-600">{event.prize}</strong>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ends: {event.deadline}
                    </p>
                    <Button
                      className="w-full mt-3 bg-blox-blue text-white text-xs font-bold h-8"
                      data-ocid={`community.join_event.button.${i + 1}`}
                    >
                      Join Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
