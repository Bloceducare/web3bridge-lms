import Image from "next/image";

import bgTwisted from "@/assets/bg/twisted-torus.svg";
import bgBracket from "@/assets/bg/curly-brackets.svg";
import bgTag from "@/assets/bg/inequality.svg";
import bgSphere from "@/assets/bg/sphere.svg";
import bgSpiral from "@/assets/bg/spiral.svg";
import Logo from "@/assets/logo-light.svg";
import AuthForm from "@/components/AuthForm";

export default function Page() {
  return (
    <div className="flex flex-wrap-reverse min-h-screen">
      <div className="relative w-full md:w-1/2">
        <div className="md:flex">
          <div className="relative md:me-auto max-w-[40%] h-[49%]">
            <Image
              src={bgTwisted}
              className="object-contain"
              alt="bg"
              priority
            />
          </div>
          <div className="mt-15">
            <div className="hidden space-y-12 me-12 md:block relative">
              <Image
                src={bgBracket}
                alt="bg"
                className="object-contain block ms-7 "
                priority
              />
              <Image
                src={bgTag}
                alt="bg"
                className="object-contain left-5"
                priority
              />
            </div>
          </div>
        </div>

        <div className=" rounded-2xl md:h-auto h-48 shadow-sm absolute inset-x-0 inset-y-36 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="flex flex-col space-y-4 justify-center my-8 items-center">
            <Image src={Logo} alt="logo" />
            <p className="text-center">
              Start your journey into blockchain technology with Web3Bridge
              learning management system
            </p>
          </div>
        </div>

        <div className="flex justify-between items-end relative h-80">
          <Image src={bgSpiral} className="ms-5 h-44 w-44" alt="bg" />
          <Image src={bgSphere} className="h-44 w-44" alt="bg" />
        </div>
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 bg-gradient-mid/200 p-8 pt-20">
        <h1>Welcome!</h1>
        <p>Please sign in to your account.</p>

        <AuthForm />
      </div>
    </div>
  );
}
