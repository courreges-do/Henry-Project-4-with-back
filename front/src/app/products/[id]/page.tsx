import Detail from "@/components/Detail/Detail";
import { notFound } from "next/navigation";
import { getProduct } from "../../../services/productServices";

type Params = Promise<{ id: string }>;

const ProductDetailPage = async ({ params }: { params: Params }) => {
  const { id } = await params;

  const product = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Detail product={product} />
    </div>
  );
};

export default ProductDetailPage;
