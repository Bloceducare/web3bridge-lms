import Image from "next/image";
import js from "@/public/assets/js.svg";
import react from "@/public/assets/react.svg";
import solidity from "@/public/assets/solidity.svg";
import node from "@/public/assets/node.svg";
import remix from "@/public/assets/remix.svg";
import go from "@/public/assets/go.svg";
import cairo from "@/public/assets/cairo.svg";

const techLogos = [
  { name: "JavaScript", logo: js },
  { name: "React", logo: react },
  { name: "Solidity", logo: solidity },
  { name: "Node.js", logo: node },
  { name: "Remix", logo: remix },
  { name: "Cairo", logo: cairo },
  { name: "Go", logo: go },
];

const TechnologiesSection: React.FC = () => {
  return (
    <div className="relative mb-12 text-[#1B1B1B]">
      {/* Background Section */}
      <div className="relative bg-[#FFE4E4] p-8">
        <div className="absolute -top-4   mx-auto lg:w-[720px] h-8 bg-[#FCF7F2] rounded-b-xl  "></div>

        <h2 className="text-center font-bold mb-2">
          Your one-stop avenue to learn programming skills from scratch
        </h2>
        <p className="text-center text-sm mb-6">
          JavaScript, React, TypeScript, Solidity, Cairo, Clarity, & More
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {techLogos.map((tech) => (
            <div key={tech.name} className="p-2">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={42}
                height={42}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
