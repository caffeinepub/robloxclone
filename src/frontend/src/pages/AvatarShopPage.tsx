import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { avatarItems } from "@/data/mockData";
import type { AvatarItem } from "@/data/mockData";
import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const categories: ("All" | AvatarItem["category"])[] = [
  "All",
  "Hat",
  "Shirt",
  "Pants",
  "Accessory",
  "Face",
  "Gear",
];

export function AvatarShopPage() {
  const [category, setCategory] = useState<"All" | AvatarItem["category"]>(
    "All",
  );
  const [cartCount, setCartCount] = useState(0);

  const filtered =
    category === "All"
      ? avatarItems
      : avatarItems.filter((i) => i.category === category);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-gradient py-12 px-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black uppercase text-white tracking-tight mb-1">
                Avatar Shop
              </h1>
              <p className="text-white/70">
                Customize your look with thousands of items
              </p>
            </div>
            <div className="relative">
              <Button
                className="bg-blox-gold text-gray-900 font-bold"
                data-ocid="avatar_shop.cart.button"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Cart ({cartCount})
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Category filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setCategory(cat)}
              data-ocid="avatar_shop.category.tab"
              className={`px-4 py-1.5 rounded-full text-sm font-semibold flex-shrink-0 transition-colors ${
                category === cat
                  ? "bg-blox-blue text-white"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div
            className="text-center py-20"
            data-ocid="avatar_shop.empty_state"
          >
            <p className="text-4xl mb-3">🛒</p>
            <p className="text-muted-foreground font-semibold">
              No items in this category yet!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="group card-hover cursor-pointer"
                data-ocid={`avatar_shop.item.${i + 1}`}
              >
                <div
                  className={`aspect-square rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-card relative overflow-hidden`}
                >
                  <span className="text-4xl">{item.emoji}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl" />
                  <button
                    type="button"
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCartCount((c) => c + 1);
                    }}
                    data-ocid={`avatar_shop.add_to_cart.button.${i + 1}`}
                  >
                    + Add
                  </button>
                </div>
                <div className="mt-2 px-0.5">
                  <p className="text-xs font-bold text-foreground truncate">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between mt-0.5">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0"
                    >
                      {item.category}
                    </Badge>
                    <span className="text-xs font-black text-amber-600">
                      R$ {item.price}
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
