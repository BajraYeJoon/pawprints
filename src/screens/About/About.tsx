import { Heading } from "@/components";
import React from "react";
import { Typography, Button } from "@/components";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import AboutImg from "@/assets/about.png";

const About = () => {
  return (
    <section className="mx-auto my-20 flex flex-col items-center justify-center gap-12 px-10 md:my-28 md:gap-16 md:px-24 lg:my-32 lg:max-w-screen-xl lg:gap-24">
      <Heading
        title="Who we are and our mission"
        heading="About our shelter and values"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      <div className="grid grid-cols-1 place-content-between gap-6 md:grid-cols-5 md:gap-7 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start justify-center gap-5 text-center md:col-span-3 md:gap-4 md:text-left lg:col-auto lg:gap-10">
          <Typography
            tag="h1"
            className="text-xl font-normal tracking-tight md:text-balance md:text-2xl md:font-normal md:leading-10 md:tracking-normal lg:text-4xl"
          >
            Your donations help us run important projects
          </Typography>
          <Typography
            tag="p"
            className="text-ellipsis text-xs font-medium text-gray-400 md:text-sm lg:max-w-2xl lg:text-balance lg:text-base lg:leading-7"
          >
            As a pioneer of the no-kill movement, Paw Print leads the way with
            national and international programs designed to increase adoptions
            and raise awareness about the plight of homeless animals, continuing
            to make a significant impact.
          </Typography>

          <Button className="w-full md:w-fit">Donate for pets</Button>
        </div>

        <Image
          src={AboutImg}
          alt="dogs playing with each"
          className="h-fit rounded-2xl object-cover md:col-span-2 md:ml-3 md:min-h-[450px] md:min-w-96 lg:col-auto lg:ml-0"
        />
      </div>
    </section>
  );
};

export default About;
