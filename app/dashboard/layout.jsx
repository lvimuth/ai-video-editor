import React from "react";
import SideBar from "./_components/SideBar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="hidden md:w-64 md:flex ">
        <SideBar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default DashboardLayout;
