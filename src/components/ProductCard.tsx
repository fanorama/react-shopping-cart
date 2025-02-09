import { Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  name,
  image,
  price,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({ id, name, price, image, quantity: 1 });
    toast.success("Added to cart");
  };
  return (
    <div className="product-card shadow-xs hover:shadow-lg transition-all duration-300">
      <div className="overflow-hidden rounded-t-lg bg-gray-200">
        <img className="product-image" src={image} alt={name} />
      </div>
      <div className="bg-white p-4 rounded-b-lg">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div className="flex items-center justify-between">
          <div className="font-semibold">${price}</div>
          <button
            className="bg-purple-400 p-3 rounded-full cursor-pointer"
            onClick={handleAddToCart}
          >
            <Plus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
