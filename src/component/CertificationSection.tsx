import Image from "next/image";
import { Hero3, Profile } from "@/assests/icon";
const CertificationSection: React.FC = () => {
  return (
    <div className=" rounded-2xl bg-tertiary-white text-primary-black p-4 flex flex-col md:flex-row gap-5 items-end">
      <div className=" md:w-1/2 mb-6 md:mb-10 px-4 ">
        <Image
          src={Profile}
          alt="Certificate icon"
          width={60}
          height={60}
          className="mb-4"
        />
        <p className=" text-3xl font-semibold mb-3">
          Progress Tracking, Recognized Certification
        </p>
        <p className="text-vibrant-grey text-2xl">
          Track your progress and get certified at the end of your program. Our
          Certifications are verified and recognized around the world
        </p>
      </div>
      <div className="md:w-1/2 flex justify-end">
        <Image
          src={Hero3}
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
