import { useProductList } from "@/hooks/useProductList";

// component
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductList = () => {
  const { products, categories, loading, search, setSearch, filterCategory, setFilterCategory } = useProductList();

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <Input placeholder="Search product name..." value={search} onChange={(e) => setSearch(e.target.value)} className="md:w-1/3" />
        <Select value={filterCategory} onValueChange={setFilterCategory}>
          <SelectTrigger className="md:w-1/3">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-56 w-full rounded-xl" />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-6">No products found.</p>
      )}
    </div>
  );
};
