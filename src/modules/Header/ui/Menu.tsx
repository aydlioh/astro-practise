import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { links } from "../data";

export const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div className="tablet:hidden">
      <MenuButton isOpen={isOpen} onClick={handleToggle} />
      {isOpen && (
        <div className="absolute left-2 right-2 top-[72px] h-auto rounded-md bg-header shadow-md">
          <ul className="flex flex-col gap-1 px-10 py-5 text-center">
            {links.map(({ href, label }) => (
              <a
                key={href}
                className="rounded-md px-2 py-3 duration-200 active:bg-background active:text-accent"
                href={href}
              >
                {label}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
