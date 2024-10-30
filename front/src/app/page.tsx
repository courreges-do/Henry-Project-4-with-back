import { productsMock } from "../../mocks/products";
import Card from "../../components/Card/Card";

const featuredProducts = productsMock.slice(0, 3);

const page = () => {
  return (
    <div>
      <h1>ECOMMERCE</h1>
      {featuredProducts.map((featuredProduct, i) => (
        <Card key={i} product={featuredProduct} />
      ))}
    </div>
  );
};

export default page;
