import Card from "../../components/Card/Card";
import { getProducts } from "../../services/productServices";
import Grid from "../../components/Grid/Grid";

const page = async () => {
  const products = await getProducts();
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
