import { Button } from "@/components/ui/button";
import { ArrowRight, Brush, Code2, Gamepad2, Globe } from "lucide-react";

const tools = [
  {
    icon: "🎮",
    title: "BloxVerse Studio",
    description:
      "The ultimate tool for creating immersive 3D experiences. Drag, drop, script, and publish.",
    cta: "Download Studio",
    gradient: "from-blox-blue to-cyan-500",
  },
  {
    icon: "💻",
    title: "Script Editor",
    description:
      "Write powerful game logic with Lua scripting. Integrated debugger and live testing.",
    cta: "Open Editor",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: "🎨",
    title: "Asset Creator",
    description:
      "Design custom clothing, accessories, and game assets. Sell them in the Avatar Shop.",
    cta: "Start Creating",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: "🌍",
    title: "World Builder",
    description:
      "Craft vast open worlds with terrain tools, weather systems, and dynamic lighting.",
    cta: "Build Now",
    gradient: "from-emerald-600 to-teal-400",
  },
];

export function CreatePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="hero-gradient py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
          Build the Next Big Game
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
          Millions of creators have already built their dream games. Now it's
          your turn. Start for free — no experience required.
        </p>
        <Button
          className="bg-blox-gold text-gray-900 font-black text-lg px-8 py-6 h-auto uppercase"
          data-ocid="create.start.button"
        >
          Start Creating Free <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Tools */}
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <h2 className="text-2xl font-black uppercase tracking-tight text-center mb-10">
          Creator Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <div
              key={tool.title}
              className="bg-white rounded-2xl shadow-card card-hover overflow-hidden"
              data-ocid={`create.tool.item.${i + 1}`}
            >
              <div
                className={`h-28 bg-gradient-to-br ${tool.gradient} flex items-center justify-center text-5xl`}
              >
                {tool.icon}
              </div>
              <div className="p-5">
                <h3 className="font-black text-base mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.description}
                </p>
                <Button
                  className="w-full bg-blox-blue text-white font-bold text-sm"
                  data-ocid={`create.tool.button.${i + 1}`}
                >
                  {tool.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-16 panel-gradient rounded-3xl p-10">
          <h2 className="text-2xl font-black text-white text-center uppercase mb-8">
            Join Millions of Creators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50M+", label: "Active Users" },
              { value: "40M+", label: "Games Created" },
              { value: "$600M", label: "Paid to Creators" },
              { value: "200+", label: "Countries" },
            ].map((stat, i) => (
              <div key={stat.label} data-ocid={`create.stat.${i + 1}`}>
                <p className="text-3xl font-black text-blox-gold">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
