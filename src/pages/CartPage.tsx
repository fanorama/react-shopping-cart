import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="text-4xl font-semibold mb-8">
              Your cart is empty
            </div>
            <p className="text-gray-600 mb-12 text-xl">
              Add some products to your cart to see them here.
            </p>
            <Link
              to="/"
              className="text-lg font-semibold bg-purple-400 text-white px-5 py-4 rounded-xl"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-bold text-4xl mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-2xl shadow-sm">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 gap-4 border-b-[2.5px] last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-32 bg-gray-200 rounded-2xl object-cover"
              />
              <div className="flex-1">{item.name}</div>
              <div className="flex items-center justify-between gap-8">
                <button className="border rounded-xl p-2 hover:bg-purple-400 hover:text-white transition-colors duration-100 cursor-pointer">
                  <Minus />
                </button>
                <div>{item.quantity}</div>
                <button className="border rounded-xl p-2 hover:bg-purple-400 hover:text-white transition-colors duration-100 cursor-pointer">
                  <Plus />
                </button>
                <button className="bg-transparent p-4 rounded-xl text-red-400 hover:bg-purple-400 hover:text-black transition-colors duration-100 cursor-pointer">
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div>Helloo</div>
        </div>
      </main>
    </div>
  );
}
