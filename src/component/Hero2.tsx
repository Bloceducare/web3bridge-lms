import Image from "next/image";
import { Image1, OpenBook } from "@/assests/icon";
const HeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-[#FFE3FC] p-4  rounded-2xl flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/2 mb-6 md:mb-0 px-4 space-y-4 ">
        <div className="inline-flex items-center justify-start bg-tertiary p-2 rounded-lg">
  <Image
    src={OpenBook}
    alt="WebBridge Logo"
    width={40}
    height={40}
    className="mb-0"
  />
</div>

          <p className="text-3xl font-semibold text-[#1B1B1B] mb-3">
            Seamless Learning Experience
          </p>
          <p className="text-xl leading-8 text-vibrant-grey">
            WebBridge will guide you through the learning process of web3, web3
            technologies and blockchain development from foundational knowledge
            to advanced development topics.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={Image1}
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
