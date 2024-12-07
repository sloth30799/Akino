import { NavLink } from "@remix-run/react";

const NAVIGATION_MENUS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const SOCIAL_LINKS = [
  {
    name: "FB",
    link: "",
  },
  {
    name: "IG",
    link: "",
  },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-3 items-center justify-between min-h-screen min-w-[10%] py-4 border-r border-foreground">
      <section className="border-b border-foreground w-full text-center px-4 pb-4">
        <h4 className="font-semibold">Akino</h4>
      </section>

      <section className="space-y-4 text-center uppercase px-4">
        {NAVIGATION_MENUS.map((nm) => (
          <NavLink
            to={nm.path}
            className={({ isActive }) =>
              isActive
                ? "block text-primary font-bold"
                : "block hover:text-primary active:text-primary hover:font-bold"
            }
            key={nm.name}
          >
            {nm.name}
          </NavLink>
        ))}
      </section>

      <section className="space-y-2 text-sm text-center px-4">
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
