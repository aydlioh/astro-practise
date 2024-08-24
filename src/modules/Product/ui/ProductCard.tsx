import { Chip } from "../../../ui/react";
import type { IProduct } from "../models";

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
      <div className="mb-48 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="bg-secondary absolute bottom-0 left-0 right-0 flex min-h-48 flex-col justify-between px-4 py-4 duration-500">
        <div>
          <p className="font-bold">{product.title}</p>
          <div className="my-3 max-h-10 overflow-hidden duration-500 group-hover:max-h-48">
            <p className="line-clamp-2 min-h-48 text-[13px] group-hover:line-clamp-none">
              {product.description}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-green-500">{product.price}$</p>
          <Chip className="lowercase">#{product.category.name}</Chip>
        </div>
      </div>
    </div>
  );
};
