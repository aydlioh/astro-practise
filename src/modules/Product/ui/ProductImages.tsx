interface Props {
  images: string[];
  title: string;
}

export const ProductImages = ({ images, title }: Props) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-1">
      <img
        className="col-span-2 row-span-2 w-full rounded-md"
        src={images[0]}
        alt={`${title}`}
      />
      {images.slice(1, 3).map((image, index) => (
        <img
          key={index}
          className="col-span-1 row-span-1 w-full rounded-md"
          src={image}
          alt={`${title} ${index}`}
        />
      ))}
    </div>
  );
};
