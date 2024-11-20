"use client";

import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";

const Page = () => {
  const { cart, setCart } = useContext(cartContext);
  const handleCart = () => {
    setCart([]);
    alert("Order complete");
  };
  return (
    <div>
      {cart.map((product, i) => (
        <h3 key={i}> Id: {product} </h3>
      ))}
      <button onClick={handleCart}>Order</button>
    </div>
  );
};

export default Page;
