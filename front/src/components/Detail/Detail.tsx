"use client";
import { useContext } from "react";
import { Product } from "../../interfaces/products";
import { UserContext } from "@/app/contexts/userContext";
import { useRouter } from "next/navigation";
import { cartContext } from "@/app/contexts/cartContext";
import Link from "next/link";

interface DetailProps {
  product: Product;
}

const Detail = ({ product }: DetailProps) => {
  const { isLogged } = useContext(UserContext);
  const { cart, setCart } = useContext(cartContext);
  const isInCart = cart.some((p) => p.id === product.id);
  const router = useRouter();
  const handleBuy = () => {
    if (isLogged()) {
      alert("Product added");
      setCart([...cart, product]);
    } else {
      alert("You must sign in first");
      router.push("/login");
    }
  };
  return (
    <article className="bg-secondary w-full h-20 transition ease-in-out delay-150 hover:scale-105">
      <h4> {product.name} </h4>
      {!isInCart ? (
        <button
          className="border-2 border-quaternary px-4 py-2"
          onClick={handleBuy}
        >
          Add to cart
        </button>
      ) : (
        <Link className="border-2 border-quaternary" href="cart">
          Buy
        </Link>
      )}
    </article>
  );
};

export default Detail;
