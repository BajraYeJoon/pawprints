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
        "flex flex-col justify-center gap-4 md:gap-3 lg:gap-8",
        placeContentLeft ? "items-start" : "items-center",
      )}
    >
      <Typography
        tag="span"
        className={cn(
          "text-xs font-medium uppercase tracking-wide text-primary md:text-base",
          placeContentLeft ? "text-left" : "text-center",
        )}
      >
        {title}
      </Typography>
      <Typography
        tag="h1"
        className={cn(
          "text-2xl font-semibold md:text-2xl lg:text-4xl",
          placeContentLeft ? "text-left" : "text-center",
        )}
      >
        {heading}
      </Typography>
      <Typography
        tag="h2"
        className={cn(
          "max-w-md text-sm font-normal tracking-normal text-gray-400 md:max-w-3xl md:text-base lg:max-w-5xl lg:text-xl",
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
