import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductDetailSkeleton } from "@/components/ProductDetailSkeleton";
import { ProductNotFound } from "./ProdutNotFound";

// Context & Hooks
import { useWishlist } from "@/context/WishlistContext";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useReviewForm } from "@/hooks/useReviewForm";
import { toast } from "sonner";

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { product, loading } = useProductDetail(id);
  const { wishlist, isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { form, errors, handleChange, handleSubmit } = useReviewForm();

  // 💡 Local state to track wishlist status reactively
  const [inWishlist, setInWishlist] = useState(false);

  // Sync `inWishlist` when `product` or `wishlist` updates
  useEffect(() => {
    if (product) {
      setInWishlist(isInWishlist(product.id));
    }
  }, [wishlist, product]);

  const handleWishlistToggle = () => {
    if (!product) return;
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.success("Removed from Wishlist");
    } else {
      addToWishlist(product);
      toast.success("Added to Wishlist");
    }
  };

  if (loading) return <ProductDetailSkeleton />;
  if (!product) return <ProductNotFound />;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Button variant="outline" onClick={() => navigate(-1)}>
        ← Back
      </Button>

      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto" />
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="capitalize text-sm text-muted-foreground">{product.category}</p>
          <p className="text-xl font-semibold text-primary">${product.price}</p>
          <p className="text-sm">{product.description}</p>
          <Button onClick={handleWishlistToggle}>{inWishlist ? "✔ In Wishlist" : "Add to Wishlist"}</Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 border-t pt-6">
        <h3 className="text-lg font-semibold">Leave a Review</h3>

        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="rating">Rating</Label>
          <Select value={form.rating} onValueChange={(val) => handleChange("rating", val)}>
            <SelectTrigger id="rating">
              <SelectValue placeholder="Select rating (1-5)" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((r) => (
                <SelectItem key={r} value={r.toString()}>
                  {r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.rating && <p className="text-sm text-red-500">{errors.rating}</p>}
        </div>

        <div>
          <Label htmlFor="comment">Comment</Label>
          <Textarea id="comment" value={form.comment} onChange={(e) => handleChange("comment", e.target.value)} placeholder="Optional..." />
        </div>

        <Button type="submit">Submit Review</Button>
      </form>
    </div>
  );
};
