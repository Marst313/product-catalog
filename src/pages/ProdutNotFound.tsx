import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

// ui components
import { Button } from "@/components/ui/button";

export const ProductNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
      <AlertTriangle className="h-16 w-16 text-destructive" />
      <h2 className="text-2xl font-semibold">Product Not Found</h2>
      <p className="text-muted-foreground">The product you're looking for doesn't exist or was removed.</p>
      <Button onClick={() => navigate("/")}>← Back to Products</Button>
    </div>
  );
};
