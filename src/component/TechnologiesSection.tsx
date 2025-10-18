import Image from "next/image";
import { Cairo, Go, Javascript, Node, React, Remix, Solidity } from "@/assests/icon";

const techLogos = [
  { name: "JavaScript", logo: Javascript },
  { name: "React", logo: React },
  { name: "Solidity", logo: Solidity },
  { name: "Node.js", logo: Node },
  { name: "Remix", logo: Remix },
  { name: "Cairo", logo: Cairo },
  { name: "Go", logo: Go },
];

const TechnologiesSection: React.FC = () => {
  return (
    <div className="relative mb-12 text-[#1B1B1B]">
      {/* Background Section */}
      <div className="relative bg-gray-white p-8">
        <div className="absolute -top-4   mx-auto lg:w-[720px] h-8 bg-[#FCF7F2] rounded-b-xl  "></div>

        <h2 className="text-center font-medium mb-2 text-primary-black text-3xl">
          Your one-stop avenue to learn programming skills from scratch
        </h2>
        <p className="text-center text-xl font-thin mb-6 text-primary-black">
          JavaScript, React, TypeScript, Solidity, Cairo, Clarity, & More
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {techLogos.map((tech) => (
            <div key={tech.name} className="p-2">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={52}
                height={52}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
