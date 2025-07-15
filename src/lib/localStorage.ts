import type { Product } from "@/types/product";

const STORAGE_KEY = "wishlist";

export const getWishlist = (): Product[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveWishlist = (items: Product[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

export const addToWishlist = (product: Product) => {
  const current = getWishlist();
  if (!current.find((p) => p.id === product.id)) {
    saveWishlist([...current, product]);
  }
};

export const removeFromWishlist = (id: number) => {
  const filtered = getWishlist().filter((p) => p.id !== id);
  saveWishlist(filtered);
};

export const isInWishlist = (id: number) => {
  return getWishlist().some((p) => p.id === id);
};
