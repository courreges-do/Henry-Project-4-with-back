"use client";
import { UserContext } from "@/app/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";

const UserWidget = () => {
  const { isLogged, user } = useContext(UserContext);
  return (
    <div>
      {isLogged() ? (
        <Link href="/dashboard"> {user?.user.name} </Link>
      ) : (
        <Link href="/login"> Log In </Link>
      )}
    </div>
  );
};

export default UserWidget;
