import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Orbit(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "size-[350px] border border-gray-200/30 rounded-full",
        props.className
      )}
    ></div>
  );
}
