import { useEffect, useState } from "react";
import { fetchProductById } from "@/lib/api";
import type { Product } from "@/types/product";

export const useProductDetail = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, loading };
};
