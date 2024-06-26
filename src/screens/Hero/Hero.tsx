import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/hero-image.png";
import { Typography, Button } from "@/components";

import {
  CircleChevronDown,
  CircleChevronUp,
  MoveRightIcon,
} from "lucide-react";
const Hero = () => {
  return (
    <section className="realtive flex items-center flex-col gap-12 md:gap-2 md:flex-row py-8 lg:gap-12 xl:gap-0 mx-auto px-4 lg:px-32 mt-28 md:mt-32 md:mb-10 lg:mb-0 lg:mt-40">
      <div className="mr-auto place-self-center space-y-4 lg:space-y-8 max-w-4xl">
        <Typography
          tag="span"
          className="leading-none lg:leading-7 font-semibold uppercase tracking-wider text-base lg:text-lg"
        >
          Saving lives every day
        </Typography>
        <Typography
          tag="h1"
          className="max-w-3xl h-fit mb-4 text-5xl font-extrabold tracking-tight md:tracking-normal md:leading-7 md:text-3xl lg:text-7xl "
        >
          Saving lives of cats and dogs across world
        </Typography>
        <Typography
          tag="p"
          className=" mb-6 font-medium lg:mb-8 md:text-base lg:max-w-4xl lg:text-xl text-gray-800"
        >
          We advocate for vulnerable animals, providing safety while promoting
          responsible pet ownership. We uplift both animals and communities.
        </Typography>

        <Button className="w-full md:w-44 lg:w-fit ">About Us</Button>
      </div>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="object-contain h-96 md:h-72 lg:h-full"
      />

      <div className="absolute   top-1/2 hidden left-20 lg:flex md:flex-col gap-3 justify-center items-center">
        <CircleChevronUp
          size={40}
          className="bg-gray-400 rounded-full cursor-pointer"
        />
        <CircleChevronDown
          size={40}
          className="bg-gray-400 rounded-full cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Hero;
