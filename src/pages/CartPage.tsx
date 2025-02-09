import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { useCart } from "../contexts/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  const handleRemoveItem = (id: number) => {
    removeItem(id);
    toast.success("Successfully removed item from cart");
  };

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
              <div className="flex-1 text-xl flex flex-col gap-2">
                <span className="font-bold">{item.name}</span>
                <span className="text-gray-600">${item.price}</span>
              </div>
              <div className="flex items-center justify-between gap-8">
                <button
                  className="border rounded-xl p-2 hover:bg-purple-400 hover:text-white transition-colors duration-100 cursor-pointer"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus />
                </button>
                <div>{item.quantity}</div>
                <button
                  className="border rounded-xl p-2 hover:bg-purple-400 hover:text-white transition-colors duration-100 cursor-pointer"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus />
                </button>
                <button
                  className="bg-transparent p-4 rounded-xl text-red-400 hover:bg-purple-400 hover:text-black transition-colors duration-100 cursor-pointer"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div className="p-4">
            <div className="flex items-center justify-between my-4">
              <h2 className="text-2xl font-bold">Total:</h2>
              <h2 className="text-2xl font-bold">${totalPrice.toFixed(2)}</h2>
            </div>
            <div className="flex items-center mt-6 gap-4">
              <Link
                to="/"
                className="w-full text-center py-3 border rounded-xl font-semibold hover:bg-purple-400 transition-colors duration-150 cursor-pointer"
              >
                Continue Shopping
              </Link>
              <button className="w-full py-3 bg-purple-400 rounded-xl text-white font-bold hover:opacity-90 transition-opacity duration-150">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
