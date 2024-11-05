import Link from "next/link";
import { Product } from "../../interfaces/products";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return (
    <Link href={`products/${product.id}`}>
      <article> {product.name} </article>
    </Link>
  );
};

export default Card;
