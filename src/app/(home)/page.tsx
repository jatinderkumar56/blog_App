import { Button } from "@/components/ui/button"
import Image from "next/image";


import HeroSection from "@/components/home/heroSection";
import TopArticle from "@/components/home/header/toparticle";
import Link from "next/link";
import { BlogFooter } from "@/components/home/header/blogfooter";
import { Suspense } from "react";
import { AllArticlesPageSkeleton } from "../articles/page";

export default   async function Page(){
  console.log("home page loading")
  return (
       <main>
      <HeroSection />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>

          {/* Top Articles */}
          <Suspense fallback={<h1>Loading....</h1>}>
            <TopArticle/>
          </Suspense>

          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
   

  );
}
