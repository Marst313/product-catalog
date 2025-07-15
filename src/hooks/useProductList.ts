import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "@/lib/api";
import type { Product } from "@/types/product";

export const useProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [prod, cats] = await Promise.all([fetchProducts(), fetchCategories()]);
        setProducts(prod);
        setFiltered(prod);
        setCategories(["all", ...cats]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = products;
    if (search) {
      result = result.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
    }
    if (filterCategory && filterCategory !== "all") {
      result = result.filter((p) => p.category === filterCategory);
    }
    setFiltered(result);
  }, [search, filterCategory, products]);

  return {
    products: filtered,
    categories,
    loading,
    search,
    setSearch,
    filterCategory,
    setFilterCategory,
  };
};
