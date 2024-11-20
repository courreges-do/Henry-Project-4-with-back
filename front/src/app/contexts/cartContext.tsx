import { createContext, useState, useEffect } from "react";

interface CartContext {
  cart: number[];
  setCart: (cart: number[]) => void;
}

export const cartContext = createContext<CartContext>({
  cart: [],
  setCart: () => {},
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<number[]>([]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    setCart(localCart ? JSON.parse(localCart) : []);
  }, []);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
