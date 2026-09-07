'use client';
import React from 'react';
import Image from 'next/image';
import { BeginnerBlockchainIcon, IntermediateBlockchainIcon, AdvancedBlockchainIcon } from '@/assests/icon';

const assignments = [
  {
    id: 1,
    title: 'Introduction to Blockchain',
    desc: 'You are enrolled in "Introduction to Blockchain", assignments contained in this course are necessary to guarantee your certification.',
    type: 'Beginner',
    tasks: 3,
    status: 'Not Submitted',
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    desc: 'You are enrolled in "Smart Contract Development", assignments contained in this course are necessary to guarantee your certification.',
    type: 'Intermediate',
    tasks: 3,
    status: 'Not Submitted',
  },
  {
    id: 3,
    title: 'Advanced Blockchain Security',
    desc: 'You are enrolled in "Advanced Blockchain Security", assignments contained in this course are necessary to guarantee your certification.',
    type: 'Advanced',
    tasks: 3,
    status: 'Not Submitted',
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'Beginner':
      return BeginnerBlockchainIcon;
    case 'Intermediate':
      return IntermediateBlockchainIcon;
    case 'Advanced':
      return AdvancedBlockchainIcon;
    default:
      return BeginnerBlockchainIcon;
  }
};

export default function Assignment() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(97.57%_210.75%_at_0.9%_2.98%,_rgba(231,213,213,0.69)_0%,_rgba(255,255,255,0.13)_100%)]
        opacity-100 rounded-2xl shadow-sm p-6">
      <div className="max-w-3xl ">
        <h1 className="text-2xl font-semibold mb-1 text-primary-black">Assignments</h1>
        <p className="text-gray-500 mb-8">You have {assignments.length} assignments.</p>

        <div className="space-y-4">
          {assignments.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-start bg-primary-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-4"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={getIcon(item.type)}
                    alt={`${item.type} Icon`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-primary-black ">{item.title}</h2>
                  <p className="text-gray-white text-sm leading-snug mt-1">{item.desc}</p>

                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    <span className=" cursor-pointer">📄 Audit.pdf</span>
                    <span className=" cursor-pointer">🧠 Smart Contracts</span>
                    <span className="">{item.tasks} Tasks</span>
                  </div>
                </div>
              </div>

              <div className="text-sm text-primary-red font-medium mt-1">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
