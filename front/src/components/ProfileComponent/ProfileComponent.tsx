"use client";

import { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import { notFound } from "next/navigation";

const ProfileComponent = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    notFound();
  }

  const { name, email, address, phone } = user.user;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold text-gray-700">Name:</h4>
          <p className="text-gray-600">{name}</p>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold text-gray-700">Email:</h4>
          <p className="text-gray-600">{email}</p>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold text-gray-700">Address:</h4>
          <p className="text-gray-600">{address}</p>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="text-lg font-semibold text-gray-700">Phone:</h4>
          <p className="text-gray-600">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
