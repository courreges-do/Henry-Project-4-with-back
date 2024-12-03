"use client";
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";
import { cartContext } from "@/contexts/cartContext";

const UserWidget = () => {
  const { isLogged, user, logOut } = useContext(UserContext);
  const { cart } = useContext(cartContext);
  return (
    <div>
      <div className="h-full flex items-center gap-4 pr-4">
        <Link
          href="/"
          className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
        >
          Products
        </Link>
        {isLogged() ? (
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
            >
              {user?.user.name}
            </Link>
            <Link
              href="/cart"
              className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
            >
              {`CART${cart.length > 0 ? " (" + cart.length + ")" : ""}`}
            </Link>
            <button
              onClick={logOut}
              className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="text-sm font-medium text-secondary hover:text-tertiary transition-colors"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default UserWidget;
