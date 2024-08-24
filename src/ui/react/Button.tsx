interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`rounded-md bg-accent px-5 py-3 duration-200 hover:bg-accent/80 ${className}`}
    >
      {children}
    </button>
  );
};
