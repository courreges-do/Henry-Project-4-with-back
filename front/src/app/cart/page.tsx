"use client";

import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";
import { buyOrder } from "@/services/ordersServices";
import { UserContext } from "../contexts/userContext";
import { notFound } from "next/navigation";

const Page = () => {
  const { cart, clearCart } = useContext(cartContext);
  const { user, updateOrders } = useContext(UserContext);
  if (!user) {
    return notFound();
  }
  const handleCart = async () => {
    const res = await buyOrder(cart, user);
    if (res.status === "approved") {
      clearCart();
      updateOrders({ status: res.status, id: res.id, date: res.date });
      alert("Order complete");
    } else {
      alert(res.message);
    }
  };

  const initialOrder = 0;
  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialOrder
  );

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      {cart.map((product, i) => (
        <div key={i}>
          <h3> Id: {product.id} </h3>
          <h3> Name: {product.name} </h3>
          <h3> Price: {product.price} </h3>
        </div>
      ))}
      <button onClick={handleCart}>{`Order (total ${totalOrder})`}</button>
    </div>
  );
};

export default Page;
