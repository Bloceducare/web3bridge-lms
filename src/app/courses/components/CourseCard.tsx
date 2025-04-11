import React from "react";
import Image, { StaticImageData } from "next/image";
import { Clock, Cap, Tasks } from "@/assests/icon";

interface CardProps {
  tag: string;
  level: string;
  topic: string;
  image: StaticImageData | string;
  desc: string;
  duration: string;
  lesson: number;
  tasks: number;
  overlayColor?: string; // Different overlay color for each card
}

const CourseCard: React.FC<CardProps> = ({
  tag,
  level,
  topic,
  image,
  desc,
  duration,
  lesson,
  tasks,
  overlayColor = "bg-blue-500", // Default overlay color
}) => {
  return (
    <div className="bg-gradient-to-r from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF00] border-[#E7D5D5E5] border-4 shadow-lg  py-3 overflow-hidden w-full sm:w-[80%] md:w-[48%] lg:w-[32%] xl:w-[30%] space-y-3 h-full rounded-2xl" >
      {/* Header */}
      <div className="flex justify-between items-center px-3 py-2">
        <p>{tag}</p>
        <p className="bg-gradient-to-b from-[#B8D1B775] via-[#E7D5D533] to-[#EBFFE7] border border-[#E7D5D5E5] px-4 py-1 rounded-full text-xs">
          {level}
        </p>
      </div>

      <h1 className="font-semibold px-3 text-[#1B1B1B]">{topic}</h1>

      {/* Image Container with Overlay */}
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={topic}
          layout="fill"
          objectFit="cover"
        />

        {/* Overlay with dynamic color */}
        <div className={`absolute inset-0 bg-[#1a160f75]/30 backdrop-blur-[28px]`}></div>

        {/* Topic text overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg z-10">
          {topic}
        </div>
      </div>
      <p className="text-gray-600 text-[16px] px-3 line-clamp-2">{desc}</p>


      {/* Content */}
      <div className="px-5 py-3 space-y-3">

        {/* Course Details */}
        <div className="py-4 text-sm text-gray-600">
  <table className="w-full border-collapse">
    <tbody>
      {/* First Row: Duration (Left) | Lessons (Right) */}
      <tr className="border-b-2 border-t-2  border-[#AEA8A8]">
        <td className="py-2 border-r-2 border-[#AEA8A8]">
          <div className="flex gap-3 items-center">
            <Image src={Clock} alt="clock" /> {duration}
          </div>
        </td>
        <td className="px-4 py-2">
          <div className="flex gap-3 items-center justify-end">
            <Image src={Cap} alt="cap" /> {lesson} Lessons
          </div>
        </td>
      </tr>

      {/* Second Row: Tasks (Left) | Empty (Right) */}
      <tr>
        <td className="py-2 border-r-2 border-[#AEA8A8]">
          <div className="flex gap-3 items-center">
            <Image src={Tasks} alt="tasks" /> {tasks} Tasks
          </div>
        </td>
        <td className="px-4 py-2">{/* Empty Cell */}</td>
      </tr>
    </tbody>
  </table>
</div>





        {/* Footer */}
        <div className="w-full">
        
          <button className="bg-gradient-to-r from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF] border-[#E7D5D5E5] border-4 rounded-full font-medium text-[#CA1B1B] px-4 py-3  text-[16px]  transition w-full">
            Go to Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

