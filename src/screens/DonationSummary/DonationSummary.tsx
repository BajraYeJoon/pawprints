"use client";
import { Button, Heading, Typography } from "@/components";
import React, { useState, useEffect } from "react";
import DogsDonationImg from "@/assets/dogs/dog-donate-1.png";
import Image from "next/image";
import { MoveRightIcon } from "lucide-react";
import { RangeSlider } from "@/components/RangeSlider/RangeSlider";
import { donationSummaries } from "@/constants";

const DonationSummary = () => {
  const [rangeValue, setRangeValue] = useState(50);

  return (
    <section className="bg-[#FDF7F4] px-10 md:px-24 lg:px-52 py-20 md:py-28 lg:py-32  flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24">
      <Heading
        title="A Help to those who need it"
        heading="Each donation is an essential"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-3 gap-8 h-fit">
        {donationSummaries.map((summary, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg"
          >
            <Image
              className="lg:h-72 h-36 object-cover rounded-t-lg"
              src={summary.img}
              alt=""
            />
            <div className="bg-[#FDF7F4] grid p-5 grid-cols-2 font-medium uppercase tracking-wide text-sm">
              <Typography tag="span">Goal: ${summary.goal}</Typography>
              <Typography tag="span" className="text-right">
                Raised: ${summary.raised}
              </Typography>
              <div className="col-span-2">
                <RangeSlider min="0" max="50" value="30" />
              </div>
            </div>
            <figure className="flex flex-col justify-between min-h-28 gap-3 p-5 items-start ">
              <Typography
                tag="h2"
                className="text-lg md:text-2xl font-semibold tracking-normal"
              >
                {summary.title}
              </Typography>
              <figcaption className="text-sm md:text-base first-letter:font-normal text-gray-400">
                {summary.subtitle}
              </figcaption>
              <Button
                variant="link"
                size="reset"
                className="uppercase text-sm tracking-wider"
              >
                View Details
              </Button>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationSummary;
