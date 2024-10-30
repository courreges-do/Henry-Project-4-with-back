import { Product } from "../../interfaces/products";

interface CardProps {
  product: Product;
}

const Card = ({ product }: CardProps) => {
  return <article> {product.name} </article>;
};

export default Card;
