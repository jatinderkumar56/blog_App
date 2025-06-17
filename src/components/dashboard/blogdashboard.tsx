import React from 'react'

import RecentArticle from '@/components/dashboard/recentarticle'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Clock, FileText, MessageCircle, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { prisma } from '@/lib/prisma'

const BlogDashboard = async () => {
  const [articles, totalComments] = await Promise.all([
    prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: true,
        author: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
    }),
    prisma.comment.count(),
  ]);

  return (
   <main className='flex-1 p-4 md:p-8'>
    {/* // Top */}
    <div className='flex justify-between items-center mb-8 '>
   <div>
    <h1 className='font-bold text-2xl'>Blog Dashboard</h1>
    <p>Manage your content and analytics</p>
   </div>
   <Link href='/dashboard/article/create'>
   <Button>
    <PlusCircle className='h-4 w-4'/>
    New Article
   </Button> 
   </Link>
    </div>
     {/* quick stats */}
     <div className='grid md:grid-cols-3 gap-4 mb-8'>
      <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='font-medium text-sm'>Total Articles</CardTitle>
          <FileText className='h-4 w-4'/>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{articles.length}</div>
          <p className='text-sm text-muted-foreground mt-1'>+5 from last month</p>
        </CardContent>
      </Card>
       <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='font-medium text-sm'>Top Comments</CardTitle>
          <Clock className='h-4 w-4'/>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>{totalComments}</div>
          <p className='text-sm text-muted-foreground mt-1'>12 awaiting moderatrion</p>
        </CardContent>
      </Card>
       <Card>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='font-medium text-sm'>Inside Post</CardTitle>
          <FileText className='h-4 w-4'/>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>10</div>
          <p className='text-sm text-muted-foreground mt-1'>+0.6 from last month</p>
        </CardContent>
      </Card>
     </div>

     {/* recent article */}
     <RecentArticle articles={articles}/>
   </main>
  )
}

export default BlogDashboard