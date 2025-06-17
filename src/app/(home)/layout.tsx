// import { prisma } from '@/lib/prisma';
// import { currentUser } from '@clerk/nextjs/server'
// import React from 'react'

// const Layout = async ({children}:{children:React.ReactNode}) => {
//     const user = await currentUser();
//     // console.log("User authenticated:", user?.id)
//     if(!user) return  <div>Loading or Not Authenticated</div>; // ✅ fallback instead of null
    
    
//     const loginUser = await prisma.user.findUnique({
//         where:{clerkUserId:user.id}
//     })

//     if(!loginUser){
//         await prisma.user.create({
//             data:{
//                 name:user.fullName as string,
//                 clerkUserId:user.id,
//                 email:user.emailAddresses[0].emailAddress,
//                 imageUrl:user.imageUrl


//             }
//         })
//     }
//   return (
//     <div>{children}</div>
//   )
// }

// export default Layout
import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';
import Navbar from '@/components/home/header/navbar';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (user) {
    const loginUser = await prisma.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!loginUser) {
      await prisma.user.create({
        data: {
           name: user.fullName ?? "Anonymous", // fallback name
          clerkUserId: user.id,
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
           role: "user", // optional, but recommended
        },
      });
    }
  }

  return (
  <>
  <Navbar/>
  {children}
  
  </>
  ) // ✅ Always return the app
};

export default Layout;
