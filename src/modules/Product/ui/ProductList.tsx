import type { IProduct } from "../models";
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <ul className="mb-32 grid grid-cols-1 gap-7 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 large:grid-cols-5">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};
