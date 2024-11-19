"use client";
import { UserContext } from "@/app/contexts/userContext";
import { useContext } from "react";
import Link from "next/link";

const UserWidget = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? user.user.name : <Link href="/login"> Log In </Link>}</div>
  );
};

export default UserWidget;
