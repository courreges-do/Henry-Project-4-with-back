import Card from "../../../../components/Card/Card";
import { notFound } from "next/navigation";
import { getProduct } from "../../../../services/productServices";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;

  const product = getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return (
    <div>
      <Card product={product} />
    </div>
  );
};

export default page;
