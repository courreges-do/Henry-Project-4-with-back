import Link from "next/link";
import Image from "next/image";
import { Product } from "../../interfaces/products";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <article className="bg-secondary h-[440px] text-primary rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-tertiary p-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-1">
          {product.name}
        </h4>
        <p className="text-xs text-gray-900 flex-1"> {product.description} </p>
        <div className="flex justify-center items-center mb-4 mt-4">
          <Image
            src={product.image}
            alt="Product Image"
            width={250}
            height={150}
            style={{ width: "fit-content", height: "fit-content" }}
            className="object-contain"
            priority
          />
        </div>
        <p className="text-lg font-bold mt-6 text-gray-800">
          $ {product.price}
        </p>
      </article>
    </Link>
  );
};

export default Card;
