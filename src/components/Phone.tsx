import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

//extends HTMLAttributes<HTMLDivElement> by using this we can use this component as div element and get methods on it like normal element

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* phone image */}
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone-image"
      />
      {/* user image */}
      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          className="object-cover min-w-full min-h-full"
          alt="overlaying-phone-image"
        />
      </div>
    </div>
  );
};

export default Phone;
