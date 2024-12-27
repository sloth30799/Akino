import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="header-bar">
      <a
        href="https://www.google.com/maps"
        className="flex items-center justify-center gap-1 cursor-pointer hover:underline active:underline hover:text-primary"
      >
        <MapPin size={16} /> Location
      </a>
    </header>
  );
};

export default Header;
