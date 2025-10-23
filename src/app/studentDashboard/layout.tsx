"use client"

import React from 'react'
import Header from '@/component/ui/Layout/Header'
import DesktopSidebar from '@/component/ui/Layout/Sidebar'
import { Learning, LearningFilled, Assignment, AssignmentFilled, Certification, CertificationFilled, LeaderBoard, LeaderBoardFilled } from '@/assests/icon';


const sidebarItems = [
  { icon: Learning, text: "Home", href: "/studentDashboard", iconFilled: LearningFilled },

  {
    icon: Assignment,
    text: "Event",
    href: "/dashboard/event",
    iconFilled: AssignmentFilled,
  },

  {
    icon: Certification,
    text: "Organization",
    href: "/dashboard/organization",
    iconFilled: CertificationFilled,
  },

  {
    icon: LeaderBoard,
    text: "Wallet",
    href: "/dashboard/wallet",
    iconFilled: LeaderBoardFilled,
  },
];

function StudentDashboardLayout
({ children }: Readonly<{ children: React.ReactNode }>) {
  return (

      <section>
      <Header dashboardLinks={sidebarItems}   pathname="/studentDashboard" />


      <section className='flex pt-20 '>
        <DesktopSidebar
          sidebarItems={sidebarItems}
          sidebarExpanded={true}
          toggleSidebar={() => {}}
          pathname="/studentDashboard"
        />
        <main className='flex-1 p-6 bg-gray-100 min-h-screen'>
          {children}
        </main>


      </section>


      </section>








  )
}

export default StudentDashboardLayout
