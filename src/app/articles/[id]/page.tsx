
// import SingleArticleDetailPage from "@/components/article/single-article-page";
import { SingleArticleDetailPage } from "@/components/article/single-article-page";
import { prisma } from "@/lib/prisma";
import React from "react";
import { notFound } from "next/navigation"; // use this to trigger 404
type ArticleDetailPageProps = {
params: Promise<{ id: string }>;

};

const page = async ({ params }: ArticleDetailPageProps) => {
   const { id } = await params;
  try {
     const article = await prisma.articles.findUnique({
    where: {
      id,
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });
  if (!article) {
    return <h1>Article not found.</h1>;
  }
   return (
    <div>
      <SingleArticleDetailPage article={article} /> 
    </div>
  );
  } catch (error) {
    console.error("Error fetching article:", error);
    notFound(); // triggers 404 on Vercel
  }
 
 
};

export default page;