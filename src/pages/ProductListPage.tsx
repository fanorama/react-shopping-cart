import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  title: string;
  price: 9.99;
  thumbnail: string;
}

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);

  function getProducts() {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.products);
          console.log(json.products);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.thumbnail}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
