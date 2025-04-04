import React from "react";
import Link from "next/link";
import Image from "next/image";
// import redarrow from "@/public/assets/redarrow.svg";
// import whitearrow from "@/public/assets/whitearrow.svg";

interface ButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  href,
  variant = "primary",
  icon = false,
  className = "",
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-[#CA1B1B] text-white hover:bg-red-700   shadow-[0_0_0_2px_#FF9292,0_0_0_3px_#CA1B1B,0_0_0_6px_#f4dada]  ";
      case "secondary":
        return "bg-gradient-to-b from-[rgba(255,147,147,0.1)] to-[rgba(230,39,39,0.1)] border border-2 border-[#f5c0c0] text-[#CA1B1B] hover:bg-pink-100 w-[253px] h-[64px]";
      case "outline":
        return "bg-transparent border border-2 border-[#D1B7B775] text-white hover:bg-white/10 w-full ";
      default:
        return "bg-red-600 text-white hover:bg-red-700";
    }
  };

  return (
    <Link
      href={href}
      className={`${getButtonClasses()} ${className} px-6 py-3 rounded-full inline-flex items-center justify-center transition-colors`}
    >
      {text}
      {icon && (
        <span className=" ml-6">
          <Image
            src={variant === "secondary" ? '/assets/redarrow.svg' : '/assets/whitearrow.svg'}
            width={28}
            height={28}
            alt="Arrow"
          />
        </span>
      )}
    </Link>
  );
};

export default Button;
