import { Button } from "../../components/ui/button";
import React, { Suspense } from "react";
import Link from "next/link";
import { fetchArticleByQuery } from "../../lib/fetcharticle";
import ArticleSearchInput from "../../components/article/article-search-input";
import { AllArticlesPage } from "../../components/article/all-article-page";
import { AllArticlesPageSkeleton } from "@/components/article/articleSkeleton";

type PageProps = {
  searchParams?: any;  // <-- changed here to any to fix type error
};

export default async function Page({ searchParams }: PageProps) {
  const searchText = searchParams?.search ?? "";
  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const skip = (currentPage - 1) * 3;
  const take = 3;

  const { articles, total } = await fetchArticleByQuery(searchText, skip, take);
  const totalPages = Math.ceil(total / 3);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Articles
          </h1>
          <Suspense>
            <ArticleSearchInput />
          </Suspense>
        </div>

        <Suspense fallback={<AllArticlesPageSkeleton />}>
          <AllArticlesPage articles={articles} />
        </Suspense>

        <div className="mt-12 flex justify-center gap-2">
          <Link href={`?search=${searchText}&page=${currentPage - 1}`} passHref>
            <Button variant="ghost" size="sm" disabled={currentPage === 1}>
              ← Prev
            </Button>
          </Link>

          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              key={index}
              href={`?search=${searchText}&page=${index + 1}`}
              passHref
            >
              <Button
                variant={currentPage === index + 1 ? "destructive" : "ghost"}
                size="sm"
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </Button>
            </Link>
          ))}

          <Link href={`?search=${searchText}&page=${currentPage + 1}`} passHref>
            <Button
              variant="ghost"
              size="sm"
              disabled={currentPage === totalPages}
            >
              Next →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
