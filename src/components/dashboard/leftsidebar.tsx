'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"

import {
  Sheet,

  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BarChart, FileText, LayoutDashboard, MessageCircle, Settings } from 'lucide-react'
import Link from 'next/link'

const  Leftsidebar=()=> {
    const [isOpen, setisOpen]= useState(false)
  return (
    <div>
    <Sheet open={isOpen} onOpenChange={setisOpen}>
     <SheetTrigger asChild>
        <Button variant={'outline'} className='md:hidden m-4'>
            <LayoutDashboard/>
        </Button>
     </SheetTrigger>
     <SheetContent side={'left'} className='w-[250px]'>
        <SheetHeader>
      <SheetTitle className="text-lg font-semibold"></SheetTitle>
    </SheetHeader>
        <DashboardSidebar />
     </SheetContent>
    </Sheet>
    <div className='hidden w-[250] md:block h-screen border-r bg-background'>
        <DashboardSidebar/>
    </div>
    </div>
  )
}
export default Leftsidebar
const DashboardSidebar=()=>{
    return(
        <div className='h-full px-4 py-6'>
            <div className='flex items-center gap-2 mb-8 px-2'>
                <Link href=''>
                <span className='text-xl font-bold'>BlogCode</span>
                </Link>
            </div>
            <nav>
                <Link href='/dashboard'>
                <Button variant={'ghost'} className='w-full justify-start'>
                    <LayoutDashboard className='w-5 h-5 mr-2'/>
                    Overview
                </Button>
                </Link>
                 <Link href='/dashboard/article/create'>
                <Button variant={'ghost'} className='w-full justify-start'>
                    <FileText className='w-5 h-5 mr-2'/>
                    Article
                </Button>
                </Link>
                 <Link href='/dashboard'>
                <Button variant={'ghost'} className='w-full justify-start'>
                    <MessageCircle className='w-5 h-5 mr-2'/>
                    Comment
                </Button>
                </Link>
                 <Link href='/dashboard'>
                <Button variant={'ghost'} className='w-full justify-start'>
                    <BarChart className='w-5 h-5 mr-2'/>
                    Analytics
                </Button>
                </Link>
                  <Link href='/dashboard'>
                <Button variant={'ghost'} className='w-full justify-start'>
                    <Settings className='w-5 h-5 mr-2'/>
                    Settings
                </Button>
                </Link>
            </nav>
        </div>
    )
}