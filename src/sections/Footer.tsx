"use client";
import React from "react";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  {
    name: "Login",
    href: "#",
  },
];

export const socialLinks = [
  {
    name: "Youtube",
    icon: faYoutube,
    href: "#",
  },
  {
    name: "X",
    icon: faXTwitter,
    href: "#",
  },
  {
    name: "Discord",
    icon: faDiscord,
    href: "#",
  },
];

export const Footer = () => {
  return (
    <footer className=" border-t border-[var(--color-border)]">
      <div className="container py-8 ">
        <div className=" flex flex-col items-center lg:flex-row md:justify-between  gap-8 lg:mb-16">
          <div className="text-2xl font-extrabold">sphereal.ai</div>
          <nav className="flex flex-col gap-8 items-center md:flex-row md:gap-16">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="uppercase text-xs tracking-widest font-bold text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 py-8 md:flex-row-reverse md:justify-between">
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  key={link.href}
                  className="size-10 rounded-full bg-gray-900 inline-flex justify-center items-center"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="size-4 text-gray-500"
                  />
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs font-thin text-gray-500">
            ©️damnitaksh, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
