"use client";
import { useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import { buyOrder } from "@/services/ordersServices";
import { UserContext } from "../../contexts/userContext";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

const CartComponent = () => {
  const { cart, clearCart } = useContext(cartContext);
  const { user, updateOrders } = useContext(UserContext);
  const router = useRouter();
  if (!user) {
    return notFound();
  }
  const handleCart = async () => {
    const res = await buyOrder(cart, user);
    if (res.status === "approved") {
      clearCart();
      updateOrders({ status: res.status, id: res.id, date: res.date });
      alert("Order complete");
      router.push("/dashboard");
    } else {
      alert(res.message);
    }
  };

  const initialOrder = 0;
  const totalOrder = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialOrder
  );

  if (cart.length === 0)
    return (
      <h2 className="text-center text-lg font-semibold text-gray-600 mt-6">
        Your cart is currently empty
      </h2>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((product, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-700">Name:</h3>
                <p className="text-gray-700">{product.name}</p>
              </div>
              <p className="text-gray-600"> ID: {product.id} </p>
              <p className="text-gray-800 font-semibold">
                Price: $ {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-800">
          Total: ${totalOrder}
        </span>
        <button
          onClick={handleCart}
          className="bg-quaternary text-white py-2 px-4 rounded-lg hover:bg-tertiary transition-colors"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
