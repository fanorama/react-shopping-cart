import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./contexts/CartContext";

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
