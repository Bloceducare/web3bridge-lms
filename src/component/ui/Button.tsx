"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ButtonProps {
  variants: "active" | "inactive" | "link" | "outline";
  className?: string;
  icon?: StaticImageData | string;
  children?: React.ReactNode;
  onClick?: () => void;
  iconStyle?: string;
  disabled?: boolean;
}

function Button({ variants, className = "", icon, children, onClick, iconStyle = "", disabled }: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-8 px-4 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer";

  let variantStyles = "";

  switch (variants) {
    case "active":
      variantStyles = " bg-[var(--button-primary-bg)]  text-white   w-[200px] h-[54px] shadow-[0_0_0_2px_#FF9292,0_0_0_3px_#CA1B1B,0_0_0_6px_#f4dada]  w-[220px] h-[58px]   ";
      break;
    case "inactive":
      variantStyles =
        "bg-gradient-to-b from-[rgba(255,147,147,0.1)] to-[rgba(230,39,39,0.1)] border border-2 border-[#f5c0c0] text-[#CA1B1B] hover:bg-pink-100  w-[220px] h-[58px]";
      break;
    case "link":
      variantStyles = "bg-transparent border border-2 border-none text-primary-black hover:text-primary-red w-full ";
      break;
      case "outline":
        variantStyles = " text-white   w-[200px] h-[54px] shadow-[0_0_0_2px_#D1B7B775]  w-[220px] h-[58px]  ";
        break;
    default:
      variantStyles = "";
  }

  const combinedClass = `${baseStyles} ${variantStyles} ${className}`;

  return (
    <button
      onClick={onClick}
      className={combinedClass}
      disabled={disabled}
    >
      {children}

      {icon && (
        <div className={`${iconStyle} flex justify-center items-center w-[30px] h-[30px] rounded-full`}>
           <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={`object-contain `}
        />
        </div>
       
      )}
    </button>
  );
}

export default Button;
