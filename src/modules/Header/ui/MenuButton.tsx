import { MenuActiveIcon, MenuIcon } from "@/shared/icons";

export interface MenuButtonProps
  extends React.ComponentPropsWithoutRef<"button"> {
  isOpen: boolean;
}

export const MenuButton = ({
  className,
  isOpen,
  ...props
}: MenuButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center rounded-md bg-background text-5xl duration-200 active:text-accent ${className}`}
      {...props}
    >
      <div>
        {isOpen ? (
          <MenuActiveIcon className="p-1" />
        ) : (
          <MenuIcon className="p-1" />
        )}
      </div>
    </button>
  );
};
