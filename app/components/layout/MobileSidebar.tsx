import { NavLink } from "@remix-run/react";
import { NAVIGATION_MENUS, SOCIAL_LINKS } from "~/data/sidebar";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { Button } from "../ui/button";
import { AlignStartHorizontal, CircleArrowUp } from "lucide-react";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className={`fixed z-10 p-2 -translate-y-1/2 bg-white shadow-xl left-2 top-1/2 rounded-xl h-fit ease-in duration-500 ${
        isOpen ? "-translate-y-1/2 opacity-100" : "translate-y-0 top-2"
      }`}
    >
      {isOpen ? (
        <section className="space-y-2 text-sm text-center">
          {NAVIGATION_MENUS.map((nm) => (
            <NavLink
              to={nm.path}
              className={({ isActive }) =>
                isActive
                  ? "block text-primary font-medium"
                  : "block hover:text-primary active:text-primary"
              }
              key={nm.name}
              onClick={() => setIsOpen(false)}
            >
              {nm.name}
            </NavLink>
          ))}

          <Separator />

          {SOCIAL_LINKS.map((sl) => (
            <a
              href={sl.link}
              key={sl.name}
              className="block text-xs hover:underline active:underline hover:text-primary active:text-primary"
            >
              {sl.name}
            </a>
          ))}

          <Button
            className="p-2 rounded-full size-8"
            onClick={() => setIsOpen(false)}
          >
            <CircleArrowUp />
          </Button>
        </section>
      ) : (
        <Button
          className="p-2 rounded-full size-8"
          onClick={() => setIsOpen(true)}
        >
          <AlignStartHorizontal />
        </Button>
      )}
    </aside>
  );
};

export default MobileSidebar;
