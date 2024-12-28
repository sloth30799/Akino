import { NavLink, Link } from "@remix-run/react";
import { NAVIGATION_MENUS, SOCIAL_LINKS } from "~/data/sidebar";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col gap-3 items-center justify-between min-h-screen min-w-[10%] pb-4 border-r border-foreground">
      <Link
        to="/"
        className="font-semibold cursor-pointer select-none header-bar font-fascinate first-letter:text-primary"
      >
        Akino
      </Link>

      <section className="px-4 space-y-4 text-sm text-center uppercase lg:text-base">
        {NAVIGATION_MENUS.map((nm) => (
          <NavLink
            to={nm.path}
            className={({ isActive }) =>
              isActive
                ? "block text-primary font-medium"
                : "block hover:text-primary active:text-primary"
            }
            key={nm.name}
          >
            {nm.name}
          </NavLink>
        ))}
      </section>

      <section className="px-4 space-y-2 text-sm text-center">
        {SOCIAL_LINKS.map((sl) => (
          <a
            href={sl.link}
            key={sl.name}
            className="block hover:underline active:underline hover:text-primary active:text-primary"
          >
            {sl.name}
          </a>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
