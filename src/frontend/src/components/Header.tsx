import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { userProfile } from "@/data/mockData";
import { Bell, ChevronDown, Menu, Search, X } from "lucide-react";
import { useState } from "react";

type Page = "home" | "games" | "shop" | "create" | "community" | "profile";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Games", page: "games" },
    { label: "Avatar Shop", page: "shop" },
    { label: "Create", page: "create" },
    { label: "Community", page: "community" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-blox-header shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center gap-4">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-2 flex-shrink-0"
            onClick={() => onNavigate("home")}
            data-ocid="nav.home.link"
          >
            <img
              src="/assets/generated/bloxverse-logo-transparent.dim_80x80.png"
              alt="BloxVerse logo"
              className="h-9 w-9 rounded-md object-contain"
            />
            <span className="text-xl font-black uppercase tracking-tight">
              <span className="text-orange-500">BLOX</span>
              <span className="text-emerald-600">VERSE</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1 ml-4"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => onNavigate(link.page)}
                data-ocid={`nav.${link.page}.link`}
                className={`px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                  currentPage === link.page
                    ? "bg-blox-blue text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="flex-1 max-w-sm mx-auto hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search games, items..."
                className="pl-9 rounded-full border-border bg-white text-sm"
                data-ocid="header.search_input"
              />
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Robux badge */}
            <div className="hidden sm:flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              <span className="text-amber-500 font-black text-sm">R$</span>
              <span className="text-amber-700 font-bold text-sm">
                {userProfile.robux.toLocaleString()}
              </span>
            </div>

            {/* Notifications */}
            <button
              type="button"
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
              data-ocid="header.notifications.button"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
            </button>

            {/* User */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-full hover:bg-muted px-2 py-1 transition-colors"
              onClick={() => onNavigate("profile")}
              data-ocid="header.profile.button"
            >
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blox-blue to-blox-purple flex items-center justify-center text-white text-xs font-bold">
                  {userProfile.avatar}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-blox-green border-2 border-white rounded-full" />
              </div>
              <span className="hidden md:block text-sm font-semibold">
                {userProfile.username}
              </span>
              <ChevronDown className="hidden md:block h-3 w-3 text-muted-foreground" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="header.menu.toggle"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav
            className="md:hidden border-t border-border py-3 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.page}
                onClick={() => {
                  onNavigate(link.page);
                  setMobileOpen(false);
                }}
                data-ocid={`nav.mobile.${link.page}.link`}
                className={`px-4 py-2 text-sm font-semibold text-left rounded-md transition-colors ${
                  currentPage === link.page
                    ? "bg-blox-blue text-white"
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
