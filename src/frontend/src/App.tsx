import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AvatarShopPage } from "@/pages/AvatarShopPage";
import { CommunityPage } from "@/pages/CommunityPage";
import { CreatePage } from "@/pages/CreatePage";
import { GamesPage } from "@/pages/GamesPage";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

type Page = "home" | "games" | "shop" | "create" | "community" | "profile";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={navigate} />

      <div className="flex-1">
        {currentPage === "home" && <HomePage />}
        {currentPage === "games" && <GamesPage />}
        {currentPage === "shop" && <AvatarShopPage />}
        {currentPage === "create" && <CreatePage />}
        {currentPage === "community" && <CommunityPage />}
        {currentPage === "profile" && <ProfilePage />}
      </div>

      <Footer />

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-blox-blue text-white shadow-glow flex items-center justify-center hover:bg-blue-600 transition-colors"
          aria-label="Scroll to top"
          data-ocid="scroll_top.button"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
