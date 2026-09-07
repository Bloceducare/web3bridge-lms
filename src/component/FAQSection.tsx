"use client";

import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className="border-b border-pink-100 py-4 cursor-pointer hover:bg-pink-50 transition-colors "
      onClick={onClick}
    >
      <div className="flex items-center">
        <p className="text-gray-800">{question}</p>
      </div>
      {isOpen && answer && (
        <div className="pl-8 mt-2 text-gray-600">{answer}</div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems = [
    { question: "How much does the training cost?" },
    { question: "Can I join virtually?" },
    { question: "What is the duration for each course?" },
    { question: "How much does the training cost?" },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section
      className="py-12 px-4 bg-[#FFEFEF] rounded-2xl  mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Have other questions? Reach us at{" "}
          <a
            href="mailto:support@web3bridge.com"
            className="text-black hover:underline"
          >
            support@web3bridge.com
          </a>
        </p>
      </div>

      <div className=" rounded-xl">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
