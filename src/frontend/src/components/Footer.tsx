import {
  SiDiscord,
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "react-icons/si";

const socialLinks = [
  { Icon: SiX, label: "X (Twitter)", key: "x" },
  { Icon: SiFacebook, label: "Facebook", key: "facebook" },
  { Icon: SiInstagram, label: "Instagram", key: "instagram" },
  { Icon: SiYoutube, label: "YouTube", key: "youtube" },
  { Icon: SiDiscord, label: "Discord", key: "discord" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const links = {
    About: ["About Us", "Careers", "Blog", "Press", "Investors"],
    Community: ["Events", "Forums", "Fan Art", "Leaderboards", "Developer Hub"],
    Creators: [
      "BloxVerse Studio",
      "Developer Exchange",
      "Talent Hub",
      "Education",
      "Grants",
    ],
    Support: [
      "Help Center",
      "Safety Tips",
      "Report Abuse",
      "Contact Us",
      "Status",
    ],
    Legal: ["Terms", "Privacy", "Cookies", "DMCA", "Guidelines"],
  };

  return (
    <footer className="bg-blox-navy text-white">
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        <div className="mb-10">
          <div className="text-2xl font-black uppercase">
            <span className="text-orange-400">BLOX</span>
            <span className="text-emerald-400">VERSE</span>
          </div>
          <p className="text-white/60 text-sm mt-1">
            Play, Create, and Explore Together
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-10">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                {category}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {socialLinks.map(({ Icon, label, key }) => (
              <span
                key={key}
                aria-label={label}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>

          <p className="text-white/40 text-xs text-center">
            © {currentYear}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/60"
            >
              caffeine.ai
            </a>
          </p>

          <div className="flex gap-2">
            <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white/60 hover:bg-white/20 cursor-pointer transition-colors">
              App Store
            </div>
            <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white/60 hover:bg-white/20 cursor-pointer transition-colors">
              Google Play
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
