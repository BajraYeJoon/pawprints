import { Button, Heading, Typography, RangeSlider } from "@/components";
import React from "react";
import Image from "next/image";
import { donationSummaries } from "@/constants";
import { StaticImageData } from "next/image";

interface DonationSummaryProps {
  img: StaticImageData;
  goal: number;
  raised: number;
  title: string;
  subtitle: string;
}

const DonationSummary = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-accent px-10 py-20 md:gap-16 md:px-24 md:py-28 lg:gap-24 lg:px-44 lg:py-32">
      <Heading
        title="A Help to those who need it"
        heading="Each donation is an essential"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      <div className="grid grid-cols-1 place-content-center gap-8 md:grid-cols-2 lg:grid-cols-3">
        {donationSummaries.map(
          (
            { img, goal, raised, title, subtitle }: DonationSummaryProps,
            index,
          ) => {
            const percentageRaised = (raised / goal) * 100;

            return (
              <div
                key={index}
                className="max-w-sm rounded-lg border border-gray-200 bg-white"
              >
                <Image
                  className="h-36 rounded-t-lg object-cover lg:h-48"
                  src={img}
                  alt=""
                />
                <div className="grid grid-cols-2 gap-1 bg-accent p-5 text-sm font-medium uppercase tracking-wide md:gap-2 lg:gap-3">
                  <Typography tag="span">Goal: ${goal}</Typography>
                  <Typography tag="span" className="text-right">
                    Raised: ${raised}
                  </Typography>
                  <div className="col-span-2">
                    <RangeSlider value={percentageRaised} />
                  </div>
                </div>
                <figure className="flex min-h-28 flex-col items-start justify-between gap-3 p-5">
                  <Typography
                    tag="h2"
                    className="text-lg font-medium tracking-normal md:text-xl"
                  >
                    {title}
                  </Typography>
                  <figcaption className="text-xs font-normal text-gray-400 md:text-sm">
                    {subtitle}
                  </figcaption>
                  <Button
                    variant="link"
                    size="reset"
                    className="text-xs uppercase tracking-wider"
                  >
                    View Details
                  </Button>
                </figure>
              </div>
            );
          },
        )}
      </div>

      <Button>View All Cause</Button>
    </section>
  );
};

export default DonationSummary;
