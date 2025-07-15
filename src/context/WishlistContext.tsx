import { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "@/types/product";
import { toast } from "sonner";

type WishlistContextType = {
  wishlist: Product[];
  isInWishlist: (id: number) => boolean;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) {
      setWishlist(JSON.parse(stored));
    }
  }, []);

  const isInWishlist = (id: number) => wishlist.some((p) => p.id === id);

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.id)) {
      const updated = [...wishlist, product];
      setWishlist(updated);
      toast.success("Added to wishlist!");
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  const removeFromWishlist = (id: number) => {
    const updated = wishlist.filter((p) => p.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return <WishlistContext.Provider value={{ wishlist, isInWishlist, addToWishlist, removeFromWishlist }}>{children}</WishlistContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within a WishlistProvider");
  return ctx;
};
