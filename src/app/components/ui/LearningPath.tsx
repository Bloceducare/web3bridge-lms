import React from "react";
import Image from "next/image";
import cap from "@/public/assets/cap.svg";
import clock from "@/public/assets/clock.svg";
import book from "@/public/assets/book.svg";

interface LearningPathProps {
  title: string;
  icon: string;
  description: string;
  duration: string;
  lessons: number;
  task: number;
}

const LearningPath: React.FC<LearningPathProps> = ({
  title,
  icon,
  description,
  duration,
  lessons,
  task,
}) => {
  return (
    <div
      className="
        bg-[radial-gradient(97.57%_210.75%_at_0.9%_2.98%,_rgba(231,213,213,0.69)_0%,_rgba(255,255,255,0.13)_100%)]
        opacity-100 rounded-2xl p-4 shadow-sm flex flex-col h-full"
    >
      <div
        className={`w-10 h-10  rounded-lg flex items-center justify-center mb-3`}
      >
        <Image src={icon} alt={`${title} icon`} width={40} height={40} />
      </div>

      <h3 className="font-bold mb-2">{title}</h3>

      <p className="text-xs text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="border-t"></div>
      <div className="grid grid-cols-2 border-t border border-transparent ">
        <div className="py-3 flex items-center gap-2 border-b border-gray-600">
          <Image src={clock} alt="clock" width={16} height={16} />
          <span className="text-xs text-gray-700">{duration}</span>
        </div>
        <div className="py-3 flex items-center gap-2 border-b border-gray-600 border-l  pl-3">
          <Image src={book} alt="book" width={16} height={16} />
          <span className="text-xs text-gray-700">{lessons} lessons</span>
        </div>
        <div className="py-3 flex items-center gap-2 col-span-2">
          <Image src={cap} alt="cap" width={16} height={16} />
          <span className="text-xs text-gray-700">{task} Tasks</span>
        </div>
      </div>
      <div className="  border-b border-gray-600 w-full  "></div>

      <button className=" bg-gradient-to-b from-[rgba(255,147,147,0.1)] to-[rgba(230,39,39,0.1)] text-center py-2 mt-6 text-sm text-[#CA1B1B] hover:text-red-700 rounded-2xl transition-colors">
        Go to Course
      </button>
    </div>
  );
};

export default LearningPath;
