"use client";
import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/hero-image.png";
import { Typography, Button, NavigationArrows } from "@/components";

import {
  CircleChevronDown,
  CircleChevronUp,
  MoveRightIcon,
} from "lucide-react";
const Hero = () => {
  return (
    <section className="realtive mx-auto mt-28 flex flex-col items-center gap-12 px-4 py-8 md:mb-10 md:mt-32 md:flex-row md:gap-2 lg:mb-0 lg:mt-40 lg:gap-12 lg:px-32 xl:gap-0">
      <div className="mr-auto max-w-4xl space-y-4 place-self-center lg:space-y-8">
        <Typography
          tag="span"
          className="text-base font-semibold uppercase leading-none tracking-wider lg:text-lg lg:leading-7"
        >
          Saving lives every day
        </Typography>
        <Typography
          tag="h1"
          className="mb-4 h-fit max-w-3xl text-5xl font-extrabold tracking-tight md:text-3xl md:leading-7 md:tracking-normal lg:text-7xl"
        >
          Saving lives of cats and dogs across world
        </Typography>
        <Typography
          tag="p"
          className="mb-6 font-medium text-gray-800 md:text-base lg:mb-8 lg:max-w-4xl lg:text-xl"
        >
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </Typography>

        <Button className="w-full md:w-44 lg:w-fit">About Us</Button>
      </div>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="h-96 object-contain md:h-72 lg:h-full"
      />

      <div className="absolute left-20 top-1/2 hidden items-center justify-center gap-3 md:flex-col lg:flex">
        <NavigationArrows
          direction="prev"
          onClick={() => console.log("prev")}
          // disabled
          horizontal
        />
        <NavigationArrows
          direction="next"
          onClick={() => console.log("next")}
          // disabled
          horizontal
        />
      </div>
    </section>
  );
};

export default Hero;
