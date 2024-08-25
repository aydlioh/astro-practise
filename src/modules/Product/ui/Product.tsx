import { Button, Chip } from "@/shared/ui/react";
import type { IProduct } from "../models";
import { ProductImages } from "./ProductImages";

interface Props {
  product: IProduct;
}

export const Product = ({ product }: Props) => {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col justify-center gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-thin">{product.title}</h1>
        <p className="text-2xl text-green-500">{product.price}$</p>
      </div>
      <ProductImages {...product} />
      <div className="flex flex-row items-center justify-between">
        <Chip>#{product.category.name}</Chip>
        <h1 className="mt-5 text-end text-2xl font-thin">{product.title}</h1>
      </div>
      <p>{product.description}</p>
      <Button className="w-[200px] self-start">Купить</Button>
    </div>
  );
};
