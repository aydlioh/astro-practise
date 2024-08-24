import type { IProduct } from "./models";

export const getProducts = async () => {
  return (await (
    await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=40")
  ).json()) as IProduct[];
};
