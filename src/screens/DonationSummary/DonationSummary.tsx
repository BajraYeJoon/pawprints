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
    <section className="bg-accent flex flex-col items-center justify-center gap-12 px-10 py-20 md:gap-16 md:px-24 md:py-28 lg:gap-24 lg:px-52 lg:py-32">
      <Heading
        title="A Help to those who need it"
        heading="Each donation is an essential"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      <div className="grid h-fit grid-cols-1 place-content-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {donationSummaries.map((summary, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg border border-gray-200 bg-white"
          >
            <Image
              className="h-36 rounded-t-lg object-cover lg:h-72"
              src={summary.img}
              alt=""
            />
            <div className="bg-accent grid grid-cols-2 p-5 text-sm font-medium uppercase tracking-wide">
              <Typography tag="span">Goal: ${summary.goal}</Typography>
              <Typography tag="span" className="text-right">
                Raised: ${summary.raised}
              </Typography>
              <div className="col-span-2">
                <RangeSlider min="0" max="50" value="30" />
              </div>
            </div>
            <figure className="flex min-h-28 flex-col items-start justify-between gap-3 p-5">
              <Typography
                tag="h2"
                className="text-lg font-semibold tracking-normal md:text-2xl"
              >
                {summary.title}
              </Typography>
              <figcaption className="text-sm text-gray-400 first-letter:font-normal md:text-base">
                {summary.subtitle}
              </figcaption>
              <Button
                variant="link"
                size="reset"
                className="text-sm uppercase tracking-wider"
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
