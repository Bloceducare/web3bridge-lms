"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  variants: "active" | "inactive" | "link";
  className?: string;
  icon?: StaticImageData | string;
  children?: React.ReactNode;
  onClick?: () => void;
  iconStyle?: string;
}

function Button({ variants, className = "", icon, children, onClick, iconStyle = "" }: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer";

  let variantStyles = "";

  switch (variants) {
    case "active":
      variantStyles = " bg-[var(--button-primary-bg)]  text-white   w-[200px] h-[54px] shadow-[0_0_0_2px_#FF9292,0_0_0_3px_#CA1B1B,0_0_0_6px_#f4dada]  w-[200px] h-[54px]   shadow-[0_0_0_2px_#FF9292,0_0_0_3px_#CA1B1B,0_0_0_6px_#f4dada]  ";
      break;
    case "inactive":
      variantStyles =
        "bg-gradient-to-b from-[rgba(255,147,147,0.1)] to-[rgba(230,39,39,0.1)] border border-2 border-[#f5c0c0] text-[#CA1B1B] hover:bg-pink-100  w-[200px] h-[54px]";
      break;
    case "link":
      variantStyles = "bg-transparent border border-2 border-[#D1B7B775] text-white hover:bg-white/10 w-full ";
      break;
    default:
      variantStyles = "";
  }

  const combinedClass = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClass}
      disabled={variants === "inactive"}
    >
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={`object-contain ${iconStyle}`}
        />
      )}
      {children}
    </button>
  );
}

export default Button;
