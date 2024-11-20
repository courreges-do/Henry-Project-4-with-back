"use client";
import { User } from "@/interfaces/user";
import { useState, createContext, useEffect } from "react";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
  isLogged: () => boolean;
}

export const UserContext = createContext<UserContextProps>({
  user: null,
  setUser: () => {},
  isLogged: () => false,
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

  return (
    <UserContext.Provider value={{ user, setUser, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
