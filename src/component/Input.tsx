"use client";
import React from "react";
import SearchIcon from "@/assests/icon/search.svg"; 
import Image from "next/image";

interface InputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF00] border-[#E7D5D5E5] border-4 px-5 py-5 lg:w-[30%] rounded-full transition">
    <div className="flex items-center w-full justify-center">
      <Image src={SearchIcon} alt="search" width={20} height={20} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 ml-2 outline-none bg-transparent text-[#4D4D4D] placeholder-[#4D4D4D] placeholder:font-medium"
      />
    </div>
  </div>  
  );
};

export default Input;
