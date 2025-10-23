"use client"

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/assests/icon";

interface SidebarItem {
  icon: string;
  text: string;
  href: string;
  iconFilled?: string;
}

interface DesktopSidebarProps {
  sidebarItems: SidebarItem[];
  sidebarExpanded: boolean;
  toggleSidebar: () => void;
  pathname: string;
}

const DesktopSidebar: FC<DesktopSidebarProps> = ({
  sidebarItems,
  sidebarExpanded,
  pathname,
}) => {
  return (
    <aside
    className=" fixed z-20 left-0 top-0 bg-app-white hidden h-screen flex-col shadow-md md:flex transition-all duration-300 ease-in-out"
  >
   
  
   
    <div className="flex h-full flex-col gap-y-2 overflow-y-auto">
    
  
      <div className="flex w-full flex-col gap-y-2 mt-20 p-8">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center py-4 text-primary  ${
              pathname === item.href ? "link-hover" : ""
            }`}
          >
   <Image
  src={pathname === item.href ? item.iconFilled ?? item.icon : item.icon ?? ""}
  alt={item.text}
  width={24}
  height={24}
  className="object-contain"
/>


            {sidebarExpanded && <span className="ml-4">{item.text}</span>}
          </Link>
        ))}
      </div>
  
      {/* Footer Actions */}
      <div className="mt-auto flex flex-col gap-4 py-2 px-4 text-text-primary">   
       
      </div>


    </div>
  </aside>
  
  );
};

export default DesktopSidebar;