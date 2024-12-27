import { NavLink, Link } from "@remix-run/react";

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
    name: "Book",
    path: "/book",
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
    <aside className="flex flex-col gap-3 items-center justify-between min-h-screen min-w-[10%] pb-4 border-r border-foreground">
      <section className="header-bar">
        <Link
          to="/"
          className="font-semibold cursor-pointer select-none font-fascinate first-letter:text-primary"
        >
          Akino
        </Link>
      </section>

      <section className="px-4 space-y-4 text-center uppercase">
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
