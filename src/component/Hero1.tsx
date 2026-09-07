import Image from "next/image";
import Button from "@/component/ui/Button";
import GradientCard from "@/component/Card";
import { Start, Action, Training, Card2, Card3, Card4, ArrowRightFilled, FirstLine } from "@/assests/icon";
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
        <div className="relative w-full lg:w-[302px] h-[359px] rounded-3xl p-5 text-white bg-gradient-to-b from-[#6D031D] to-[#AE0730] mb-4 overflow-hidden">
  {/* Curved top background */}
  <div className="absolute -top-6 left-0 right-0 mx-auto w-[160px] h-[70px] bg-[#FCF7F2] rounded-b-full"></div>

  {/* Decorative Line - Full Width */}
  <Image
    src={FirstLine}
    alt="First Line"
    width={1000}
    height={600}
    className="absolute top-20 left-0 right-0 w-full h-auto mx-auto object-cover scale-110"
  />

  {/* Content */}
  <h2 className="lg:text-xl text-2xl mt-12 font-bold relative z-10">
    2000+ <br /> Programmers
  </h2>

  <p className="mt-3 lg:text-md text-lg relative z-10">
    Web3Bridge has trained more than 2000 developers, who are actively
    practicing.
  </p>

  <div className="lg:mt-10 mt-6 relative z-10 flex justify-start">
    <div className="bg-button-primary-bg/50 p-2 rounded-full">
    <Button
      variants="outline"
      icon={ArrowRightFilled}
      iconStyle="bg-primary-white"
    >
      Start Learning
    </Button>
    </div>
  
  </div>
</div>


          <div className=" w-full lg:w-[302px] flex items-center bg-gradient-to-b from-[#151515] to-[#1F1F1F] text-white rounded-4xl">
            <button className="flex items-center cursor-pointer    h-[111px]  px-10">
              <Image
                src={Start}
                alt="Start"
                width={60}
                height={60}
              />
              <span className="ml-3 text-xl">
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
            imageUrl={Card2}
            altText="A book about Python"
          />
        </div>
        {/* Third Column - Developer Image */}
        <div className="flex justify-center items-center md:col-span-1 lg:col-span-1 lg:mt-70">
          <div className="w-full lg:w-[140px] h-auto  lg:mb-0 mb-4">
            <Image
              src={Card3}
              alt="Developer"
              layout="responsive"
              width={80}
              height={90}
              className="rounded-3xl object-cover"
            />
          </div>
        </div>

        {/* Fourth Column - Web 2.0 Image */}
        <div className="lg:mt-32 lg:-ml-10 lg:mb-0 mb-4">
          <GradientCard
            title="Web 2.0"
            subtitle="The basics of web development"
            imageUrl={Card4}
            altText="web development"
          />
        </div>
        {/* Fifth Column - Explore Courses Card */}
        <div className="flex flex-col lg:max-w-[302px] w-full items-center  md:col-span-2 lg:col-span-1">
          <div className="relative lg:w-[302px] h-[359px] w-full  rounded-3xl p-5 text-white bg-gradient-to-b from-[#FF5005F2] to-[#BC3A02] mb-4">
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

            <div className=" mx-auto w-[90%] mt-3">
              <Image
                src={Training}
                alt="Developer"
                layout="responsive"
                width={50}
                height={50}                
              />
            </div>
            <div className="mt-2">
              <Button    variants="outline"
      icon={ArrowRightFilled}
      iconStyle="bg-primary-white rounded-full h-[30px] w-[30px]">ExpLore Courses</Button>
            </div>
          </div>
          <div className="  flex items-center bg-gradient-to-b from-[#004617] to-[#516E00] text-white rounded-4xl ">
            <button className="flex items-center cursor-pointer lg:w-[302px] w-full h-[111px] px-10 ">
              <Image
                src={Action}
                alt="Acticon"
                width={80}
                height={80}
              />
              <span className="ml-3 text-xl">Become a programmer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
