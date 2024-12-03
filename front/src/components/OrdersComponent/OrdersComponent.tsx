"use client";

import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { notFound } from "next/navigation";
import { Order } from "@/interfaces/orders";

const OrdersComponent = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    notFound();
  }
  const { name, email, orders } = user.user;

  return (
    <div>
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700">Name: {name}</h4>
        <h4 className="text-lg font-semibold text-gray-700">Email: {email}</h4>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">Orders:</h4>
      {orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order: Order, i) => (
            <div
              key={i}
              className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
            >
              <p className="text-gray-700 font-medium">ID: {order.id}</p>
              <p className="text-gray-600">{order.date}</p>
              <p
                className={`font-semibold ${
                  order.status === "approved"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {order.status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">You have no orders yet.</p>
      )}
    </div>
  );
};

export default OrdersComponent;
