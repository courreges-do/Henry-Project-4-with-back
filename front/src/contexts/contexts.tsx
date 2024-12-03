"use client";
import CartProvider from "./cartContext";
import UserProvider from "./userContext";

const Contexts = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};

export default Contexts;
