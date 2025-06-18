import { SingleArticleDetailPage } from "@/components/article/single-article-page";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type ArticleDetailPageProps = {
  params: { id: string };
};

const page = async ({ params }: ArticleDetailPageProps) => {
  const { id } = params;

  try {
    const article = await prisma.articles.findUnique({
      where: { id },
      include: {
        author: {
          select: { name: true, email: true, imageUrl: true },
        },
      },
    });

    if (!article) {
      notFound(); // Next.js 15 idiomatic 404 handler
    }

    return (
      <div>
        <SingleArticleDetailPage article={article} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    notFound();
  }
};

export default page;
