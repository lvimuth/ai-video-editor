import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="hidden md:w-64 md:flex ">
        <SideBar />
      </div>
      <div className="w-full md:ml-20">
        <Header />
        <div> {children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
