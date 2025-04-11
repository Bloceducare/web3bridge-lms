import Image from "next/image";
import hero2logo from "@/public/assets/hero2logo.svg";
import image1 from "@/public/assets/image1.svg";
const HeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#FFE3FC] p-4  rounded-2xl flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 px-4 ">
          <Image src={hero2logo} alt="WebBridge Logo" width={40} height={40} className="mb-4" />
          <h1 className="text-xl font-bold text-[#1B1B1B] mb-3">
            Seamless Learning Experience
          </h1>
          <p className="text-md text-[#1B1B1B]">
            WebBridge will guide you through the learning process of web3, web3
            technologies and blockchain development from foundational knowledge
            to advanced development topics.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={image1}
            alt="Stack of programming books"
            width={1280}
            height={690}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
