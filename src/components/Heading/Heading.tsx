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
        "flex flex-col justify-center gap-4 md:gap-6 lg:gap-8",
        placeContentLeft ? "items-start" : "items-center"
      )}
    >
      <Typography
        tag="span"
        className={cn(
          "text-primary text-xs md:text-base uppercase font-medium tracking-wide",
          placeContentLeft ? "text-left" : "text-center"
        )}
      >
        {title}
      </Typography>
      <Typography
        tag="h1"
        className={cn(
          "text-2xl md:text-3xl lg:text-4xl font-semibold",
          placeContentLeft ? "text-left" : "text-center"
        )}
      >
        {heading}
      </Typography>
      <Typography
        tag="h2"
        className={cn(
          "text-gray-400 max-w-md md:max-w-3xl lg:max-w-5xl text-sm md:text-lg lg:text-xl font-normal tracking-normal",
          placeContentLeft ? "text-left" : "text-center"
        )}
      >
        {subtitle}
      </Typography>
    </section>
  );
};

Heading.displayName = "Heading";

export { Heading };
