interface Props {
  image: string;
  title: string;
}

export const ProductCardImage = ({ image, title }: Props) => {
  return (
    <div className="mb-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};
