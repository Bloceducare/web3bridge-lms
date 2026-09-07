import React from 'react'
import { EmptyState, ArrowRightFilled } from '@/assests/icon'
import Image from 'next/image'
import Button from './Button'

function DashboardEmptyState() {
  return (
    <div className='flex flex-col items-center justify-center mt-40 gap-5'>



        <Image src={EmptyState} alt="No Data" width={500} height={500} />
        <p className='text-primary-black font-semibold'>You haven’t enrolled for any course yet.</p>


        <Button variants="outline" className="mt-6 flex items-center gap-2" icon={ArrowRightFilled}  iconStyle="bg-primary-white">
          Explore Courses
        </Button>





    </div>
  )
}

export default DashboardEmptyState