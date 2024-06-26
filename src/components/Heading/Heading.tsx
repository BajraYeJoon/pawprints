import React from "react";
import { Typography } from "@/components";

interface HeadingProps {
  heading: string;
  subtitle: string;
  title: string;
}

const Heading = ({ heading, subtitle, title }: HeadingProps) => {
  return (
    <section className="flex flex-col  justify-center items-center gap-4 md:gap-6 lg:gap-8">
      <Typography
        tag="span"
        className="text-primary text-xs md:text-base  uppercase font-medium tracking-wide"
      >
        {title}
      </Typography>
      <Typography
        tag="h1"
        className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold"
      >
        {heading}
      </Typography>
      <Typography
        tag="h2"
        className="text-gray-400 max-w-md text-center md:max-w-3xl lg:max-w-5xl text-sm md:text-lg lg:text-xl font-normal tracking-normal "
      >
        {subtitle}
      </Typography>
    </section>
  );
};

Heading.displayName = "Heading";

export { Heading };
