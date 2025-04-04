import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
}

const GradientCard: React.FC<CardProps> = ({
  title,
  subtitle,
  imageUrl,
  altText,
}) => {
  return (
    <div className="lg:w-[193] h-[405] lg:h-[305] rounded-4xl bg-black overflow-hidden  text-white flex flex-col justify-between ">
      {/* Title Section */}
      <div className="py-4 text-center bg-gradient-to-r from-[rgba(111,110,110,0.31)] to-[rgba(50,49,49,0.31)]">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>

      {/* Subtitle Section */}
      <div className="p-4 text-center bg-black bg-opacity-60">
        <p className="text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default GradientCard;
