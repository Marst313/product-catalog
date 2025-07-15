import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const location = useLocation();

  const navItem = (to: string, label: string) => (
    <Link to={to} className={cn("text-sm font-medium px-4 py-2 hover:underline", location.pathname === to && "text-primary underline")}>
      {label}
    </Link>
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50 ">
      <h1 className="text-xl font-bold text-primary">
        <Link to="/">🛍️ Catalog</Link>
      </h1>

      <div className="space-x-4">
        {navItem("/", "Products")}
        {navItem("/wishlist", "Wishlist")}
      </div>
    </nav>
  );
};
