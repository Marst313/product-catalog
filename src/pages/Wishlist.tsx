// ui components
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// context
import { useWishlist } from "@/context/WishlistContext";

export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  const handleRemove = (id: number) => {
    removeFromWishlist(id);
    toast.success("Removed from Wishlist");
  };

  if (wishlist.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Your wishlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlist.map((product) => (
          <div key={product.id} className="flex flex-col gap-2">
            <ProductCard product={product} />
            <Button onClick={() => handleRemove(product.id)} variant="destructive" className="w-fit">
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
