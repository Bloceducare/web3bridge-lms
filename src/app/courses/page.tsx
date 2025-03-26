"use client"
import React from 'react'
import Input from '@/component/Input'

function Courses() {
  return (
    <section>
        <section className='flex flex-col justify-center items-center mt-10 space-y-14'>
        <div className='text-center w-[960px] space-y-5'>
            <h1 className='text-5xl font-semibold text-[#1B1B1B] '>Learn Web 2.0, Web 3.0 and Computer Science Courses</h1>
            <p className='text-lg font-medium text-[#4D4D4D]'>Just in case you are not certain as to where to start your learning journey from, check out the Learning Roadmaps </p>
        </div>

        <Input placeholder='Search for courses, languages, or tracks ' />
        </section>
     
    </section>
  )
}

export default Courses