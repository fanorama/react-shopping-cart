import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold">
            Store
          </Link>
          <Link to="/cart" className="text-lg font-semibold">
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
