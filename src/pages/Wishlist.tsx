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
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
        <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="Empty Wishlist" className="w-24 h-24 opacity-70" />
        <h2 className="text-2xl font-semibold text-muted-foreground">Your wishlist is empty</h2>
        <p className="text-muted-foreground">Looks like you haven't added anything yet.</p>
        <Button onClick={() => (window.location.href = "/")}>Browse Products</Button>
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
