import { CoinsIcon, Grid2X2, UserCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

function SideBar() {
  const menuOption = [
    {
      name: "Dashboard",
      icon: Grid2X2,
      path: "/dashboard",
    },
    {
      name: "Buy Credits",
      icon: CoinsIcon,
      path: "/buy-credits",
    },
    {
      name: "Profile",
      icon: UserCircle,
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="fixed shadow-md h-screen md:w-64 p-5">
      <div className="flex gap-2 items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={35} height={35} />
        <h2 className="font-medium text-lg">AI Video Editor</h2>
      </div>
      <ul className="mt-10">
        {menuOption.map((item, index) => (
          <li
            key={index}
            className="flex gap-2 items-center p-3 mt-2 hover:bg-primary rounded-lg hover:text-white cursor-pointer"
          >
            <item.icon />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;