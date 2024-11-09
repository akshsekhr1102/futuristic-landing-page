"use client";
import { Button, ButtonProps } from "@/components/button";
import Logo from "@/components/logo";
import Orbit from "@/components/orbit";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  name: string;
  href: string;
  buttonVariant: ButtonProps["variant"];
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-200/20  z-40 fixed top-0 w-full bg-gray-950 ">
        <div className="container">
          <div className="h-18 lg:h-20 flex  justify-between items-center">
            {/* logo container */}
            <div className="flex gap-4 items-center">
              <Logo />
              <div className="font-extrabold text-2xl">spherial.ai</div>
            </div>
            {/* navigation container */}
            <div className="hidden   lg:block">
              <div className="h-full">
                <nav className="h-full">
                  {navItems.map(({ name, href }) => (
                    <Link
                      href={href}
                      key={href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(href);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase inline-flex items-center before:content-['']  before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0  last:after:content-['']  last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 "
                    >
                      {name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            {/* cta */}
            <div className="hidden lg:flex gap-4">
              {loginItems.map(({ buttonVariant, href, name }) => (
                <Link key={href} href={href}>
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </div>
            {/* mobile responsive */}
            <div className="flex items-center lg:hidden">
              <button
                className="size-10 rounded-lg border-2 [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] border-transparent relative"
                onClick={() => setIsMobileNavOpen((current) => !current)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5  bg-gray-100 translate-y-1",
                      isMobileNavOpen &&
                        "translate-y-0 rotate-45 transition duration-500"
                    )}
                  ></div>
                </div>
                <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5  bg-gray-100 -translate-y-1",
                      isMobileNavOpen &&
                        "translate-y-0 -rotate-45  transition duration-500"
                    )}
                  ></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 bottom-0 right-0 bg-gray-950 z-30 overflow-hidden">
          <div className="absolute-center">
            <Orbit className="size-[200px]" />
          </div>
          <div className="absolute-center">
            <Orbit className="size-[350px]" />
          </div>
          <div className="absolute-center">
            <Orbit className="size-[500px]" />
          </div>
          <div className=" absolute-center">
            <Orbit className="size-[650px]" />
          </div>
          <div className=" absolute-center">
            <Orbit className="size-[800px]" />
          </div>
          <div className="container h-full">
            <nav className="flex flex-col gap-4 items-center py-8 h-full justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      setIsMobileNavOpen(false);
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
              {loginItems.map(({ buttonVariant, href, name }) => (
                <Link key={name} href={href} className="">
                  <Button variant={buttonVariant}>{name}</Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
