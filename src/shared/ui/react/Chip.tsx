interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Chip = ({ children, className }: Props) => {
  return (
    <div
      className={`cursor-pointer bg-accent text-foreground duration-200 hover:bg-accent/80 ${className} rounded-2xl px-3 py-2 text-xs`}
    >
      {children}
    </div>
  );
};
