import { productsMock } from "../mocks/products";

export const getProducts = () => {
  return productsMock;
};

export const getProduct = (id: number) => {
  const product = productsMock.filter((product) => product.id === id)[0];

  return product;
};
