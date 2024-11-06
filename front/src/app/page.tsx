import { productsMock } from "../mocks/products";
import Card from "../components/Card/Card";
import Grid from "../components/Grid/Grid";

const featuredProducts = productsMock.slice(0, 3);

const page = () => {
  return (
    <div>
      <h1>ECOMMERCE</h1>
      <Grid>
        {featuredProducts.map((featuredProduct, i) => (
          <Card key={i} product={featuredProduct} />
        ))}
      </Grid>
    </div>
  );
};

export default page;
