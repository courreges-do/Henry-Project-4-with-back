"use client";
import { User } from "@/interfaces/user";
import { useState, createContext, useEffect, useContext } from "react";
import { Order } from "@/interfaces/orders";
import { cartContext } from "./cartContext";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: () => boolean;
  updateOrders: (order: Order) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  isLogged: () => false,
  updateOrders: () => {},
  logOut: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { clearCart } = useContext(cartContext);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    setUser(localUser ? JSON.parse(localUser) : null);
  }, []);

  const isLogged = () => {
    return user !== null;
  };

  const updateOrders = (order: Order) => {
    const newUser = user;
    newUser?.user.orders.push({
      status: order.status,
      id: order.id,
      date: order.date,
    });
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    clearCart();
    window.location.href = "/";
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isLogged, updateOrders, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
