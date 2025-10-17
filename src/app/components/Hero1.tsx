import Image from "next/image";
import start from "@/public/assets/start.svg";
import Button from "@/component/ui/Button";
import acticon from "@/public/assets/acticon.svg";
import training from "@/public/assets/training.svg";
import card2 from "@/public/assets/card2.svg";
import card3 from "@/public/assets/card3.svg";
import card4 from "@/public/assets/card4.svg";
import GradientCard from "./ui/Card";
const CardsSection = () => {
  return (
    <div className="px-4 py-10 bg-[#FCF7F2] md:px-6">
      <div
        className="grid grid-cols-1 gap-6 max-w-7xl mx-auto 
        md:grid-cols-2 
        lg:grid-cols-5 
        lg:gap-4"
      >
        {/* First Column - Programmers Card */}
        <div className="flex flex-col  items-center  md:col-span-1 lg:col-span-1  lg:mb-0 mb-4">
          <div className="relative w-full lg:w-[302px] h-[309px] rounded-3xl p-5 text-white bg-gradient-to-b from-[#6D031D] to-[#AE0730] mb-4">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-[122px] h-14 bg-[#FCF7F2] rounded-b-full"></div>

            <h2 className="lg:text-xl text-2xl mt-8 font-bold">
              2000+ <br /> Programmers
            </h2>
            <p className="mt-3 lg:text-md text-lg">
              Web3Bridge has trained more than 2000 developers, who are actively
              practicing.
            </p>
            <div className="lg:mt-10 mt-6">
            <Button variants="inactive">Start Learning</Button>
            </div>
          </div>
          <div className=" w-full lg:w-[302px] flex items-center bg-gradient-to-b from-[#151515] to-[#1F1F1F] text-white rounded-4xl">
            <button className="flex items-center cursor-pointer    h-[111px] ">
              <Image
                src={start}
                alt="Start"
                className="w-[80px] h-[80px] ml-6"
              />
              <span className="ml-3 text-2xl">
                Start your <br /> tech journey
              </span>
            </button>
          </div>
        </div>

        {/* Second Column - Web 3.0 Image */}

        <div className="lg:mt-32 lg:ml-12  lg:mb-0 mb-4 ">
          <GradientCard
            title="Web 3.0"
            subtitle="Smart Contract development"
            imageUrl={card2}
            altText="A book about Python"
          />
        </div>
        {/* Third Column - Developer Image */}
        <div className="flex justify-center items-center md:col-span-1 lg:col-span-1 lg:mt-70">
          <div className="w-full lg:w-[130px] h-auto  lg:mb-0 mb-4">
            <Image
              src={card3}
              alt="Developer"
              layout="responsive"
              className="rounded-4xl object-contain"
            />
          </div>
        </div>

        {/* Fourth Column - Web 2.0 Image */}
        <div className="lg:mt-32 lg:-ml-10 lg:mb-0 mb-4">
          <GradientCard
            title="Web 2.0"
            subtitle="The basics of web development"
            imageUrl={card4}
            altText="web development"
          />
        </div>
        {/* Fifth Column - Explore Courses Card */}
        <div className="flex flex-col lg:max-w-[302px] w-full items-center  md:col-span-2 lg:col-span-1">
          <div className="relative lg:w-[302px] w-full h-[309px] rounded-3xl p-5 text-white bg-gradient-to-b from-[#FF5005F2] to-[#BC3A02] mb-4">
            <svg
              className="absolute -top-12 left-0 right-0 mx-auto w-[162px] h-[110px]"
              viewBox="0 0 200 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 5 L123 38 L168 38 L132 62 L143 95 L100 75 L57 95 L68 62 L32 38 L77 38 Z"
                fill="#FCF7F2"
                stroke="#FCF7F2"
                strokeWidth="24"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <Image
                src={training}
                alt="Developer"
                layout="responsive"
                className="mx-auto lg:max-w-[200px] max-h-[200px] object-contain"
              />
            </div>
            <div className="mt-4">
              <Button variants="active">ExpLore Courses</Button>
            </div>
          </div>
          <div className="  flex items-center bg-gradient-to-b from-[#004617] to-[#516E00] text-white rounded-4xl">
            <button className="flex items-center cursor-pointer lg:w-[302px] w-full h-[111px] ">
              <Image
                src={acticon}
                alt="Acticon"
                className="w-[80px] h-[80px] ml-6"
              />
              <span className="ml-3 text-2xl">Become a programmer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
