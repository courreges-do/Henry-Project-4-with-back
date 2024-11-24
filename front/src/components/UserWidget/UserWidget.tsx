"use client";
import { UserContext } from "@/app/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";
import { cartContext } from "@/app/contexts/cartContext";

const UserWidget = () => {
  const { isLogged, user, logOut } = useContext(UserContext);
  const { cart } = useContext(cartContext);
  return (
    <div>
      {isLogged() ? (
        <div className="h-full flex items-center gap-2">
          <Link href="/dashboard" className="text-xs">
            {user?.user.name}
          </Link>
          <Link href="/cart" className="text-xs">
            {`CART${cart.length > 0 ? " (" + cart.length + ")" : ""}`}
          </Link>
          <button onClick={logOut} className="text-xs">
            LOG OUT
          </button>
        </div>
      ) : (
        <Link href="/login"> Log In </Link>
      )}
    </div>
  );
};

export default UserWidget;
