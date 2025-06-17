"use client"
import React, { useTransition } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import type { Prisma } from "@prisma/client";
import { deleteArticle } from '../../../action/deleteArticle'


type RecentArticlesProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      comments: true;
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const RecentArticle: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <Card className='mb-8'>
        <CardHeader>
            <div className='flex items-center justify-between'>
                <CardTitle>Recent Article</CardTitle>
                <Button className='text-muted-foreground' size={'sm'}  variant={'ghost'}>View All ➙</Button>
            </div>
        </CardHeader>
        {
            !articles.length ?(
        <CardContent>No articles found.</CardContent>
      ) : (
  <CardContent>
          <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
           
            <TableBody>
                 {articles.map((article) => (
                 <TableRow  key={article.id}>
                    <TableCell>{article.title}</TableCell>
                    <TableCell>
                        <Badge variant={'secondary'} className='rounded-full bg-green-100 text-green-800'>Published</Badge>
                    </TableCell>
                    <TableCell>{article.comments.length}</TableCell>
                    <TableCell>{article.createdAt.toDateString()}</TableCell>
                    <TableCell>
                        <div className='flex gap-2'>
                            <Link href={`/dashboard/article/${article.id}/edit`}>
                            <Button variant={'ghost'} size={'sm'}>Edit</Button>
                            </Link>
                            <DeleteButton articleId={article.id}/>
                        </div>
                    </TableCell>
                </TableRow>
            ))}
               
            </TableBody>
          </Table>
        </CardContent>
      )
        }
       
    </Card>
  )
}

export default RecentArticle
type deleteArticleProps={
  articleId:string
}
const DeleteButton: React.FC<deleteArticleProps>=({articleId})=>{
    const [isPending, startTransition] = useTransition();
    return(
        <form
          action={() =>
        startTransition(async () => {
          await deleteArticle(articleId);
        })
      }
        >
            <Button variant={'ghost'} size={'sm'} type='submit'>{isPending?'Deleting..':'Delete'}</Button>
        </form>
    )
}