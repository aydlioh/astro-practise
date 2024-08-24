import { Button, Chip } from "../../../ui/react";
import type { IProduct } from "../models";

interface Props {
  product: IProduct;
}

export const Product = ({ product }: Props) => {
  return (
    <div className="mx-auto flex max-w-[900px] flex-col justify-center gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-thin">{product.title}</h1>
        <p className="text-2xl text-green-500">{product.price}$</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-1">
        <img
          className="col-span-2 row-span-2 w-full rounded-md"
          src={product.images[0]}
          alt={`${product.title}`}
        />
        {product.images.slice(1, 3).map((image, index) => (
          <img
            key={index}
            className="col-span-1 row-span-1 w-full rounded-md"
            src={image}
            alt={`${product.title} ${index}`}
          />
        ))}
      </div>
      <div className="flex flex-row items-center justify-between">
        <Chip>#{product.category.name}</Chip>
        <h1 className="mt-5 text-end text-2xl font-thin">{product.title}</h1>
      </div>
      <p>{product.description}</p>
      <Button className="self-start w-[200px]">Купить</Button>
    </div>
  );
};
