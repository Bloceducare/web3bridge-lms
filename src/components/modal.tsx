"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useState, type FC } from "react";

import modalImg1 from "../../public/assets/Web 2.0 Beginner Track.svg";
import modalImg2 from "../../public/assets/camera.svg";

interface OnboardingModalProps {
  isOpen: boolean;
}

const OnboardingModal: FC<OnboardingModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  const [currentStep, setCurrentStep] = useState(1);
  const [radio, setRadio] = useState<string>("");

  function nextStep() {
    if (currentStep >= 3) return;
    setCurrentStep((prev) => prev + 1);
  }
  function prevStep() {
    if (currentStep <= 1) return;
    setCurrentStep((prev) => prev - 1);
  }

  function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
    setRadio(e.target.value);
  }

  function handleStep(step: number) {
    if (step === 1) {
      setCurrentStep(1);
    }
    if (step === 2) {
      setCurrentStep(2);
    }
    if (step === 3) {
      setCurrentStep(3);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 z-40 backdrop-blur-sm bg-black/20"></div>

      <div className="relative z-50 bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full">
        {/* Modal Image */}
        <div
          className={`relative w-full h-44 ${
            currentStep !== 3 ? "bg-black" : ""
          }`}
        >
          {currentStep === 1 || currentStep === 2 ? (
            <Image
              src={modalImg1}
              alt="Person with glasses"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className=" mt-3 p-8 border-gray-300 bg-gray-300 w-40 h-40 mx-auto rounded-full">
              <Image
                src={modalImg2}
                alt="Person with glasses"
                className="object-contain bg-gray-400 rounded-full p-8 w-24 h-24"
                priority
              />
            </div>
          )}
        </div>

        <div className="p-6">
          {currentStep === 1 && (
            <div className="flex justify-between items-start mb-6">
              <p className="text-gray-800 text-lg pr-4">
                You are all set and ready to begin your journey into the realms
                of the starlight!
              </p>
              <button className="cursor-pointer text-red-600 font-medium hover:text-red-700 transition-colors">
                Skip
              </button>
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex-col flex relative justify-between items-start mb-6">
              <button className="cursor-pointer absolute right-1 text-red-600 font-medium hover:text-red-700 transition-colors">
                Skip
              </button>
              <p className=" text-gray-800 text-lg pr-4">
                Receive progress updates and get the latest news from the
                community
              </p>
              <form className=" space-y-3 mt-3">
                <label className="flex items-center">
                  <input
                    name="updatePreference"
                    value="on"
                    onChange={handleRadio}
                    checked={radio === "on"}
                    type="radio"
                    className="w-5 h-5 me-2 accent-red-600"
                  />{" "}
                  I want to receive updates
                </label>{" "}
                <label className="flex items-center">
                  <input
                    name="updatePreference"
                    value="off"
                    checked={radio === "off"}
                    onChange={handleRadio}
                    type="radio"
                    className="w-5 h-5 me-2 accent-red-600"
                  />
                  I don't want to receive updates
                </label>{" "}
              </form>
            </div>
          )}
          {currentStep === 3 && (
            <div className="mb-8">
              <p className="font-semibold">
                Complete your profile to begin your learning journey!
              </p>

              <form className="mt-5">
                <label htmlFor="name">Your Name</label>
                <input
                  type="email"
                  placeholder="Enter your email Could be a nickname"
                  className="w-full rounded-md border border-input bg-background px-3 py-1 transition-all focus:border-input/200 focus:ring-2 focus:ring-input/200 focus-visible:outline-none"
                />
              </form>
            </div>
          )}

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-6">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentStep === step ? "bg-red-600" : "bg-gray-300"
                }`}
                onClick={() => handleStep(step)}
              />
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              className="cursor-pointer px-6 py-3 rounded-full border border-red-100 bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={nextStep}
              className="cursor-pointer px-6 py-3 rounded-full bg-red-600 text-white font-medium flex items-center hover:bg-red-700 transition-colors"
            >
              Next
              <ArrowRightIcon className="ms-2 w-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingModal;
