import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative min-h-[780px] md:min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-purple-950 via-indigo-950 to-indigo-950">
      {/* Gradient overlay */}
      <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl">
        
        
        
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-24 md:flex-row md:py-32">
          {/* Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Explore the World Through
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Words
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
              Discover insightful articles, thought-provoking stories, and
              expert perspectives on technology, lifestyle, and innovation.
            </p>
            <div className="flex  flex-col items-center gap-4 sm:flex-row md:justify-start">
            <Link href={'/articles'}><Button size="lg" className="rounded-full px-8 py-6 text-lg">
                Start Reading
              </Button></Link> 
             <Link href={'/articles/tutorial'}> <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg dark:text-white"
              >
                Explore Blogs
              </Button></Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 md:max-w-md">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white ">1K+</div>
                <div className="text-sm text-gray-400">Published Articles</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white ">50+</div>
                <div className="text-sm text-gray-400">Expert Writers</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-white">10M+</div>
                <div className="text-sm text-gray-400">Monthly Readers</div>
              </div>
            </div>
          
          </div>
           <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto h-64 w-64 md:h-100 md:w-105 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <Image
              // src="https://media.istockphoto.com/id/641691488/photo/blog-writing-online-on-the-internet-blue-computer-keyboard.webp?a=1&b=1&s=612x612&w=0&k=20&c=c_VO06ISZktLNvivMUqdpL7JBEwzwqOTfotKjmQiKwc="
             src="https://media.istockphoto.com/id/1438623716/photo/black-woman-with-laptop-reading-typing-and-working-for-online-digital-newspaper-marketing-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=fy5OuxMv4o5YmPUj3IZ3ufDX2qV3UHNRhMYf5wEv0-k="
              alt="Illustration for the blog"
              fill
              className="object-cover"
            />
          </div>
        </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default HeroSection;
