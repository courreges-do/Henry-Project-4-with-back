"use client";
import { useContext } from "react";
import { Product } from "../../interfaces/products";
import { UserContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import { cartContext } from "@/contexts/cartContext";
import Link from "next/link";
import Image from "next/image";

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
      alert("Product added to cart");
      setCart([...cart, product]);
    } else {
      alert("You must sign in first");
      router.push("/login");
    }
  };
  return (
    <article className="min-w-[700px] max-w-xs bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 mt-4 ml-8">
      <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
      <p className="text-sm text-gray-900 flex-1"> {product.description} </p>
      <div className="flex justify-center items-center">
        <Image
          src={product.image}
          alt="Product Image"
          width={150}
          height={50}
          style={{ width: "fit-content", height: "fit-content" }}
          className="object-contain"
        />
      </div>
      <p className="text-lg font-bold mt-4 text-gray-800">$ {product.price}</p>
      <div className="flex items-center gap-4 mt-4">
        {!isInCart ? (
          <button
            className="bg-quaternary text-white py-2 px-4 rounded-lg hover:bg-tertiary transition-colors"
            onClick={handleBuy}
          >
            ADD TO CART
          </button>
        ) : (
          <Link
            className="bg-quaternary text-white py-2 px-4 rounded-lg hover:bg-tertiary transition-colors"
            href="/cart"
          >
            CHECKOUT
          </Link>
        )}
      </div>
    </article>
  );
};

export default Detail;
