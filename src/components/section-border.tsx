import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export default function SectionBorder(
  props: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>
) {
  const { className, borderTop, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "border-l border-r border-[var(--color-border)] relative",
        borderTop && "border-t",
        className
      )}
      {...otherProps}
    >
      {borderTop && (
        <div className="">
          <div className="absolute  left-0 top-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200 " />
          </div>
          <div className="absolute right-0 translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 text-gray-200 " />
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
