"use client";
import CartProvider from "./contexts/cartContext";
import UserProvider from "./contexts/userContext";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <CartProvider> {children} </CartProvider>
    </UserProvider>
  );
};

export default Contexts;
