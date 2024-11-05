import Card from "../../../components/Card/Card";
import { getProducts } from "../../../services/productServices";

const products = getProducts();

const page = () => {
  return (
    <div>
      {products.map((featuredProduct, i) => (
        <Card key={i} product={featuredProduct} />
      ))}
    </div>
  );
};

export default page;
