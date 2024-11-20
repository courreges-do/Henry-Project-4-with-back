import Detail from "@/components/Detail/Detail";
import { notFound } from "next/navigation";
import { getProduct } from "../../../services/productServices";

interface PageProps {
  params: {
    id: string;
  };
}

const page = async ({ params }: PageProps) => {
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

export default page;
