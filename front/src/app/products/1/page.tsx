import { productsMock } from "../../../../mocks/products";
import Card from "../../../../components/Card/Card";

const product = productsMock[0];

const page = () => {
  return (
    <div>
      <Card product={product} />
    </div>
  );
};

export default page;
