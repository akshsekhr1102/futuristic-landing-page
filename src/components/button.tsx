"use client";
import { HTMLAttributes, useEffect, useState } from "react";
import { cva } from "class-variance-authority";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  MotionProps,
} from "framer-motion";

// Define ButtonProps type with 'variant' and 'block', extending both HTMLAttributes and MotionProps
export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement> &
  MotionProps;

// Define classes for button styles
const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary: "bg-white text-gray-800 border-2 border-gray-300",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

// Button Component
export const Button = (props: ButtonProps) => {
  const { className = "", children, variant, block, ...otherProps } = props;

  const buttonClasses = classes({ variant, block, className });
  const [isHovered, setIsHovered] = useState(false);

  const angle = useMotionValue(45);
  const background = useMotionTemplate`
    linear-gradient(var(--color-gray-950), var(--color-gray-950)) padding-box,
    conic-gradient(from ${angle}deg, var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-300), var(--color-teal-300), var(--color-violet-400)) border-box
  `;

  // Handle hover to animate angle rotation
  const handleMouseEnter = () => {
    setIsHovered(true);
    animate(angle, angle.get() + 180, { duration: 1 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animate(angle, angle.get() + 180, { duration: 1 });
  };

  useEffect(() => {
    if (!isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    }
  }, [isHovered, angle]);

  return (
    <motion.button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={buttonClasses}
      {...(otherProps as MotionProps)} // Type cast to MotionProps to avoid conflicts
      style={variant === "primary" ? { background } : undefined}
    >
      {children}
    </motion.button>
  );
};
