import React from "react";
import Button from "@/component/ui/Button";
import { ArrowRightFilled, ArrowRight } from "@/assests/icon";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="text-center py-16 px-4 bg-[#FCF7F2] text-[#1B1B1B] mt-14">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-3xl mx-auto">
        {title}
      </h1>
      <p className=" mb-8 max-w-md mx-auto text-xl">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-4 ">
        <Button variants="active" icon={ArrowRightFilled} iconStyle="bg-primary-white rounded-full "  >Start Learning</Button>
        <Button variants="inactive" icon={ArrowRight} iconStyle="bg-primary-red-bg  rounded-full ">Explore Courses</Button>
    
      </div>
    </section>
  );
};

export default Hero;
