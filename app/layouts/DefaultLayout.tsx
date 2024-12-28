import { ReactNode } from "react";
import MobileSidebar from "~/components/layout/MobileSidebar";
import Sidebar from "~/components/layout/Sidebar";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex items-stretch min-w-screen">
      <Sidebar />
      <MobileSidebar />

      <div className="w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
