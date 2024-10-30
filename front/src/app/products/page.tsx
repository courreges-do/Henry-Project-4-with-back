import { productsMock } from "../../../mocks/products";
import Card from "../../../components/Card/Card";

const products = productsMock;

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
