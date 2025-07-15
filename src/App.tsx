import { Route, Routes } from "react-router-dom";

// pages
import { ProductList } from "@/pages/ProductList";
import { ProductDetail } from "@/pages/ProductDetail";
import { Wishlist } from "@/pages/Wishlist";

// component
import { Navbar } from "@/components/Navbar";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Toaster richColors position="bottom-right" />
    </div>
  );
}
