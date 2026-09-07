"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Logo, Bell, Hamburger, CloseIcon } from "@/assests/icon";
import Button from "../Button";
import Link from "next/link";

interface DashboardLink {
    icon: string;
    text: string;
    href: string;
    iconFilled?: string;
  }
  
  interface HeaderProps {
    dashboardLinks: DashboardLink[];
    pathname: string;

  }
  
  function Header({ dashboardLinks, pathname }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { id: 0, name: "Courses", href: "/courses" },
    { id: 1, name: "Learn", href: "/learn" },
  ];



  return (
    <>
      <section className="fixed top-0 left-0 w-full bg-app-white shadow-2xl z-50 px-5 py-2">
        <header className="flex justify-between items-center">
          <Image
            src={Logo}
            alt="logo"
            width={140}
            height={50}
            className="my-3"
          />

          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Button key={link.id} variants="link">
                {link.name}
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <p className="bg-gray-white p-2 rounded-full shadow-md">
              <Image src={Bell} alt="notification" width={24} height={24} />
            </p>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2"
            aria-label="Open Menu"
          >
            <Image src={Hamburger} alt="menu" width={28} height={28} />
          </button>
        </header>
      </section>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[999] flex justify-end">
          <div className="w-3/4 sm:w-1/2 bg-white h-full p-6 flex flex-col relative shadow-2xl animate-slide-in">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4"
              aria-label="Close Menu"
            >
              <Image src={CloseIcon} alt="close" width={24} height={24} />
            </button>

            <div className="flex items-center justify-start mb-8">
              <Image src={Logo} alt="logo" width={120} height={40} />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {links.map((link) => (
                <Button
                  key={link.id}
                  variants="link"
                  className="text-lg font-medium text-gray-700 text-left"
                >
                  {link.name}
                </Button>
              ))}
            </div>

            <hr className="my-4 border-gray-300" />

            {/* Dashboard Links */}
            <div className="flex flex-col gap-4">
              {dashboardLinks.map((item: any, idx: any) => (
                <Link
                  key={idx}
                  href={item.href}
                  className={`flex items-center py-4 text-primary  gap-5 ${
                    pathname === item.href ? "link-hover" : ""
                  }`}
                >
                  <Image
                        src={pathname === item.href ? item.iconFilled ?? item.icon : item.icon ?? ""}
                        alt={item.text}
                    width={24}
                    height={24}
                  />
                  <span className="text-base">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease forwards;
        }
      `}</style>
    </>
  );
}

export default Header;
