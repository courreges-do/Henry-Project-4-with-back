import Card from "../../components/Card/Card";
import { getProducts } from "../../services/productServices";
import Grid from "../../components/Grid/Grid";

const products = getProducts();

const page = () => {
  return (
    <div>
      <Grid>
        {products.map((featuredProduct, i) => (
          <Card key={i} product={featuredProduct} />
        ))}
      </Grid>
    </div>
  );
};

export default page;
