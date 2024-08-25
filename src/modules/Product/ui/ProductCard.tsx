import { Chip } from "@/shared/ui/react";
import type { IProduct } from "../models";
import { ProductCardDescription } from "./ProductCardDescription";
import { ProductCardImage } from "./ProductCardImage";

interface Props {
  product: IProduct;
}

export const ProductCard = ({ product }: Props) => {
  const handleClick = () => {
    window.location.href = `/product/${product.id}`;
  };

  return (
    <div
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-md shadow-md"
    >
      <ProductCardImage image={product.images[0]} title={product.title} />
      <ProductCardDescription {...product} />
    </div>
  );
};
