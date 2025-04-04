import Image from "next/image";
import hero3 from "@/public/assets/hero3.svg";
import profile from "@/public/assets/profile.svg";
const CertificationSection: React.FC = () => {
  return (
    <div className=" rounded-2xl bg-[#BFEEFF] text-[#1B1B1B] p-4 flex flex-col md:flex-row justify-between items-center">
      <div className=" md:w-1/2 mb-6 md:mb-0 px-4 ">
        <Image
          src={profile}
          alt="Certificate icon"
          width={40}
          height={40}
          className="mb-4"
        />
        <h1 className="text-xl font-bold mb-3">
          Progress Tracking, Recognized Certification
        </h1>
        <p className="text-md">
          Track your progress and get certified at the end of your program. Our
          Certifications are verified and recognized around the world
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <Image
          src={hero3}
          alt="Certification and progress tracking"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CertificationSection;
