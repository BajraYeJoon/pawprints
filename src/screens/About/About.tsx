import { Heading } from "@/components";
import React from "react";
import { Typography, Button } from "@/components";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import AboutImg from "@/assets/about.png";

const About = () => {
  return (
    <section className="px-10 md:px-24 lg:px-52 my-20 md:my-28 lg:my-32 flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24">
      <Heading
        title="Who we are and our mission"
        heading="About our shelter and values"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-6 md:gap-7 lg:gap-12 place-content-between">
        <div className="flex text-center md:text-left flex-col justify-center items-start gap-5 md:gap-4 lg:gap-10 md:col-span-3 lg:col-auto">
          <Typography
            tag="h1"
            className="text-2xl font-normal tracking-tight md:tracking-normal md:leading-10 md:text-[25px] md:text-balance md:font-normal lg:text-5xl "
          >
            Your donations help us run important projects
          </Typography>
          <Typography
            tag="p"
            className="font-medium text-sm md:text-base lg:max-w-2xl lg:text-xl text-gray-400"
          >
            As a pioneer of the no-kill movement, Paw Print leads the way with
            national and international programs designed to increase adoptions
            and raise awareness about the plight of homeless animals, continuing
            to make a significant impact.
          </Typography>

          <Button className="w-full py-2 md:py-4 md:w-fit ">About Us</Button>
        </div>

        <Image
          src={AboutImg}
          alt="dogs playing with each"
          className="object-cover h-fit md:ml-3 lg:ml-0 lg:col-auto md:min-w-96 md:min-h-[450px]  md:col-span-2 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default About;
