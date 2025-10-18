"use client"
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/component/Header";
import Hero from "@/component/Hero";
import Hero2 from "@/component/Hero2";
import LearningPathSection from "@/component/LearningPathSection";
import TechnologiesSection from "@/component/TechnologiesSection";
import CertificationSection from "@/component/CertificationSection";
import Footer from "@/component/Footer";
import TestimonialsSection from "@/component/Testimonial";
import FAQSection from "@/component/FAQSection";
import CardsSection from "@/component/Hero1";
const Home: NextPage = () => {
  return (
    <div className="bg-[#FCF7F2] text-[#1B1B1B] ">
      <main>
        {/* Hero Section */}
        <Hero
          title="The ultimate track to becoming a principal Developer"
          subtitle="Africa's largest blockchain school, renowned for producing the best blockchain developers in the world"
        />
        <Head>
          <title>WebBridge - Learn Web3 Development</title>
          <meta
            name="description"
            content="Learn blockchain and web3 development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="">
          <Navbar />
          <div className=" max-w-max mx-auto px-4 ">
            <CardsSection />
          </div>
          <div className="my-6 max-w-6xl mx-auto px-4 py-4">
            <Hero2 />
          </div>

          <div className="my-8 max-w-6xl mx-auto px-4 py-4">
            <LearningPathSection />
          </div>
          <div className="">
            <TechnologiesSection />
          </div>
          <div className="my-8 max-w-6xl mx-auto px-4 py-4">
            <CertificationSection />
          </div>
          <div className="my-8 max-w-6xl mx-auto px-4 py-4">
            <TestimonialsSection />
          </div>
          <div className="my-8 max-w-6xl mx-auto px-4 py-4">
            <FAQSection />
          </div>
        </main>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
