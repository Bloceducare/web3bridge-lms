"use client"
import React, { useState } from 'react'
import Input from '@/component/Input'
import { CarbonRoadmap, Filter, Grid, List } from '@/assests/icon'
import Image from 'next/image'
import { Web2Course, Web3Course} from './utils/Data'
import CourseCard from './components/CourseCard'

const allCourses = [...Web2Course, ...Web3Course,]
const uniqueCategories = ["All Courses", ...new Set(allCourses.map(course => course.filter))];

function Courses() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Filtered courses (Only show when filter is applied)
  const filteredCourses = selectedFilter === "All"
    ? []
    : allCourses.filter(course => course.filter === selectedFilter);

  return (
    <section>
      {/* Header Section */}
      <section className='flex flex-col justify-center items-center mt-10 space-y-14 px-5 lg:px-0'>
        <div className='text-center lg:w-[960px] space-y-5'>
          <h1 className='text-[28px] md:text-5xl font-semibold text-[#1B1B1B]'>
            Learn Web 2.0, Web 3.0 and Computer Science Courses
          </h1>
          <p className='text-lg font-medium text-[#4D4D4D]'>
            Just in case you are not certain as to where to start your learning journey from, check out the Learning Roadmaps.
          </p>
        </div>

        <Input placeholder='Search for courses, languages, or tracks ' />
      </section>

      <section className='flex justify-end mt-8 pr-10 md:pr-20 gap-5 items-center'>
    
      <label className="flex items-center gap-3 border-[#E7D5D5E5] border-4 px-4 py-4 rounded-full cursor-pointer relative bg-gradient-to-r from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF00]">
       
        <select
          className="bg-transparent outline-none cursor-pointer border-4 bg-[] px-3 py-2 appearance-none absolute inset-0 w-full h-full opacity-0"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          {uniqueCategories.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <span className="text-black">{selectedFilter}</span>

        <Image src={Filter} alt="Filter Icon" className="w-6 h-6" />
      </label>

      <div className='bg-gradient-to-r from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF00] border-[#E7D5D5E5] border-2 px-2 py-1'>
        <Image src={Grid} alt="Grid Icon" className="w-6 h-6" />
      </div>
      <div className='bg-gradient-to-r from-[#E7D5D566] via-[#E7D5D533] to-[#FFFFFF00] border-[#E7D5D5E5] border-2 px-2 py-1'>
        <Image src={List} alt="List Icon" className="w-6 h-6" />
      </div>
    </section>

      {/* Show Default Course Sections if No Filter is Applied */}
      {selectedFilter === "All Courses" ? (
        <>
          <section className='px-5 md:px-8 lg:px-10 xl:px-20 py-10'>
            <div className='flex justify-center items-center md:justify-between space-y-10 flex-wrap'>
              {Web2Course.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </section>

          <div className='bg-[#FFE9E9] w-full text-center flex flex-col justify-center items-center py-5 space-y-5'>
            <h1 className='text-[32px] text-[#CA1B1B] font-medium'>
              Your one-stop avenue to learn programming skills from scratch
            </h1>
            <p className='text-lg'>JavaScript, React, TypeScript, Solidity, Cairo, Clarity & More</p>
            <Image src={CarbonRoadmap} alt='carbon roadmap' />
          </div>

          {/* Web3 Courses */}
          <section className='px-5 md:px-8 lg:px-10 xl:px-20 py-10'>
            <div className='flex justify-center items-center md:justify-between space-y-10 flex-wrap'>
              {Web3Course.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </section>

          <div className='bg-[#FFE9E9] w-full text-center flex flex-col justify-center items-center py-5 space-y-5'>
            <h1 className='text-[32px] text-[#CA1B1B] font-medium'>
              Your one-stop avenue to learn programming skills from scratch
            </h1>
            <p className='text-lg'>JavaScript, React, TypeScript, Solidity, Cairo, Clarity & More</p>
            <Image src={CarbonRoadmap} alt='carbon roadmap' />
          </div>

          {/* Other Courses */}
          <section className='px-5 md:px-8 lg:px-10 xl:px-20 py-10'>
            <div className='flex justify-center items-center md:justify-between space-y-10 flex-wrap'>
              {Web3Course.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </section>
        </>
      ) : (
        // Show Filtered Courses
        <section className='px-5 md:px-8 lg:px-10 xl:px-20 py-10'>
          <div className='flex justify-center items-center md:gap-10 space-y-10 flex-wrap'>
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default Courses;
