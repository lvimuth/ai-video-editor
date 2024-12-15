"use client";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { Progress } from "@/components/ui/progress";
import { CoinsIcon, Grid2X2, UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";

function SideBar() {
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const path = usePathname();
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
    <div className="fixed shadow-md h-screen w-64 p-5">
      <div className="flex gap-2 items-center justify-center">
        <Image src={"/logo.png"} alt="logo" width={35} height={35} />
        <h2 className="font-medium text-lg">AI Video Editor</h2>
      </div>
      <ul className="mt-10">
        {menuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <li
              className={`flex gap-2 items-center p-3 mt-2 hover:bg-primary rounded-lg hover:text-white cursor-pointer ${
                path == item.path && "bg-primary text-white"
              }`}
            >
              <item.icon />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="p-3 border rounded-lg text-sm absolute bottom-10 w-[85%] flex flex-col gap-2">
        <h2 className="font-bold">Total Usage</h2>
        <Progress value={(userDetails?.userResult?.[0]?.credits ?? 0) * 10} />
        <h2 className="text-xs text-gray-500">
          {10 - (userDetails?.userResult?.[0]?.credits ?? 0)} Min used out of 10
          min{" "}
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
