import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import type { Product } from "@/types/product";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="w-full max-w-sm hover:shadow-lg transition h-96">
        <CardContent className="p-4">
          <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
          <p className="text-muted-foreground text-sm capitalize">{product.category}</p>
          <p className="text-primary font-bold mt-1">${product.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
