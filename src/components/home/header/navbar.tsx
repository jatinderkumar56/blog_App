"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import SearchInput from "./searchInput";
import ToggleMode from "./togglemode";
import { Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { searchAction } from "../../../../action/search";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  console.log("navbar comment loading")
   const params = useSearchParams()
  const [isMobileMenu, setisMobileMenu] = useState(false);
  return (
 
    <div
      className="sticky top-0 z-50 w-full 
        border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:p-6 md:px-8">
        {/* inside container */}
        <div className="flex h-16 items-center justify-between">
          {/* left section */}

          <div className="flex bg gap-8 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">
                <span className="bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Blog
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex  items-center gap-4">
           
            <Link
              href={`articles/about`}
              className="text-sm font-medium text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href={`articles/tutorial`}
              className="text-sm font-medium text-foreground transition-colors"
            >
              Tutorial
            </Link>
            <Link
              href={"/dashboard"}
              className="text-sm font-medium text-foreground transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-4 ">
            <SearchInput />
            <ToggleMode />

            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="hidden md:flex gap-2 items-center">
                <SignInButton>
                
                  <Button variant={"outline"}>Login</Button>
                </SignInButton>
                <SignUpButton>
                 
                  <Button>Singup</Button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>

          {/* mobile menu button */}
          <Button
            onClick={() => setisMobileMenu(!isMobileMenu)}
            variant={"ghost"}
            size={"icon"}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            {isMobileMenu ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      {/* mobile menu */}
      {/* Mobile Menu */}
      {isMobileMenu && (
        <div className="md:hidden py-4 space-y-4 border-t">
          {/* Search Bar (Mobile) */}
          <form action={searchAction} className="px-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
               defaultValue={params.get("search") || ""}
                
                 type="search"
                 name="search"
                placeholder="Search articles..."
                className="pl-10 w-full focus-visible:ring-1"
              />
            </div>
          </form>

          {/* Mobile Navigation Links */}
          <div className="space-y-2 px-4">
            
            <Link
              href={`articles/tutorial`}
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setisMobileMenu(false)}
            >
              Tutorials
            </Link>
            <Link
              href={`articles/about`}
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setisMobileMenu(false)}
            >
              About
            </Link>
            <Link
              href={"/dashboard"}
              className="block px-3 py-2 text-base font-medium text-foreground"
              onClick={() => setisMobileMenu(false)}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Auth Buttons */}
          {/* <SignedOut> */}
          <div className="px-4 flex flex-col gap-2">
            {/* <SignInButton> */}
            <Button variant="outline" className="w-full">
              Login
            </Button>
            {/* </SignInButton> */}
            {/* <SignUpButton> */}
            <Button className="w-full">Sign up</Button>
            {/* </SignUpButton> */}
          </div>
          {/* </SignedOut> */}
        </div>
      )}
    </div>
   
  );
};

export default Navbar;
