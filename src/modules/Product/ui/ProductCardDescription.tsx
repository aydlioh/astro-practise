import { Chip } from "../../../ui/react";

interface Props {
  title: string;
  description: string;
  price: number;
  category: {
    name: string;
  };
}

export const ProductCardDescription = ({
  title,
  description,
  price,
  category,
}: Props) => {
  return (
    <div className="bg-secondary absolute bottom-0 left-0 right-0 flex min-h-48 flex-col justify-between px-4 py-4 duration-500">
      <div>
        <p className="font-bold">{title}</p>
        <div className="my-3 max-h-10 overflow-hidden duration-500 group-hover:max-h-48">
          <p className="line-clamp-2 min-h-48 text-[13px] group-hover:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <p className="text-green-500">{price}$</p>
        <Chip className="lowercase">#{category.name}</Chip>
      </div>
    </div>
  );
};
