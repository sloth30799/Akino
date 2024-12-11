import { ReactNode } from "react";
import Sidebar from "~/components/layout/Sidebar";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex min-w-screen">
      <Sidebar />

      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default DefaultLayout;
