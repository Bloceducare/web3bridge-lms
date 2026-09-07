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
    <div className="relative w-full lg:w-[250px] h-[350px] rounded-[30px] overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-cover brightness-[0.45]"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold mt-2">{title}</h2>

        {/* Subtitle */}
        <p className="text-lg font-medium mb-2">{subtitle}</p>
      </div>
    </div>
  );
};

export default GradientCard;
