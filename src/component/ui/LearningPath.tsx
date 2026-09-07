import React from "react";
import Image from "next/image";
import { Certification, Clock, Tasks } from "@/assests/icon";
import Button from "@/component/ui/Button";

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

      <h3 className="font-bold mb-5 text-primary-black text-2xl">{title}</h3>

      <p className="text-[16px] text-vibrant-grey font-medium mb-2 flex-grow">{description}</p>
      <div className="border-t border-border-light"></div>
      <div className="grid grid-cols-2 border-t border  border-transparent ">
        <div className="py-3 flex items-center gap-2 border-b border-border-light">
          <Image src={Clock} alt="clock" width={16} height={16} />
          <span className="text-xs text-gray-700">{duration}</span>
        </div>
        <div className="py-3 flex items-center gap-2 border-b border-border-light border-l  pl-3">
          <Image src={Tasks} alt="book" width={16} height={16} />
          <span className="text-xs text-gray-700">{lessons} lessons</span>
        </div>
        <div className="py-3 flex items-center gap-2 col-span-2">
          <Image src={Certification} alt="cap" width={16} height={16} />
          <span className="text-xs text-gray-700">{task} Tasks</span>
        </div>
      </div>
      <div className="  border-b border-border-light w-full  "></div>

      <Button variants="inactive" className="mt-4 w-full">
        Go to Course
      </Button>
    </div>
  );
};

export default LearningPath;
