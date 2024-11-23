"use client";
import { User } from "@/interfaces/user";
import { useState, createContext, useEffect } from "react";
import { Order } from "@/interfaces/orders";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: () => boolean;
  updateOrders: (order: Order) => void;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  isLogged: () => false,
  updateOrders: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <UserContext.Provider value={{ user, setUser, isLogged, updateOrders }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
