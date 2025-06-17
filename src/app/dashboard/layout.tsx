import Leftsidebar from '@/components/dashboard/leftsidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' w-full min-h-screen'>
        <div className='flex'>
        <Leftsidebar />
        {/* // children is basilly page.tsx content like blogdashboard content */}
        <div className=' flex-1'>{children}</div>
        </div>
       
    </div>
  )
}

export default layout