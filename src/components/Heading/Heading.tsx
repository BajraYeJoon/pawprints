import React from "react";
import { Typography } from "@/components";
import { cn } from "@/lib/utils";

interface HeadingProps {
  heading: string;
  subtitle: string;
  title: string;
  placeContentLeft?: boolean;
}

const Heading = ({
  heading,
  subtitle,
  title,
  placeContentLeft,
}: HeadingProps) => {
  return (
    <section
      className={cn(
        "flex flex-col justify-center gap-4 md:gap-3 lg:gap-5",
        placeContentLeft ? "items-start" : "items-center",
      )}
    >
      <Typography
        tag="span"
        className={cn(
          "font-workSans text-xs font-medium uppercase tracking-wide text-primary md:text-sm",
          placeContentLeft ? "text-left" : "text-center",
        )}
      >
        {title}
      </Typography>
      <Typography
        tag="h1"
        className={cn(
          "text-2xl font-semibold md:text-2xl lg:text-3xl",
          placeContentLeft ? "text-left" : "text-center",
        )}
      >
        {heading}
      </Typography>
      <Typography
        tag="h2"
        className={cn(
          "max-w-md font-workSans text-sm font-normal tracking-normal text-gray-400 md:max-w-xl md:text-base lg:max-w-3xl lg:text-base",
          placeContentLeft ? "text-left" : "text-center",
        )}
      >
        {subtitle}
      </Typography>
    </section>
  );
};

Heading.displayName = "Heading";

export { Heading };
