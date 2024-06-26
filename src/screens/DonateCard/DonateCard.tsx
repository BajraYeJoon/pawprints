import React from "react";
import donateCardImg from "@/assets/donate-card-thumbnail.png";
import Image from "next/image";
import { Heading, Typography } from "@/components";
import { RangeSlider } from "@/components/RangeSlider/RangeSlider";
import { Button } from "@/components";

const donationAmounts = [10, 25, 50, 100, 250];

const DonateCard = () => {
  return (
    <section className="px-10 md:px-24 lg:px-52  mx-auto  sm:px-6 my-20 md:my-28 lg:my-32">
      <div className="grid grid-cols-2  gap-6">
        <div className="relative">
          <Image
            className="max-w-sm flex-1 place-content-center object-contain"
            src={donateCardImg}
            alt="Donate Dog"
          />

          <div className="absolute bottom-12 right-40 px-6 py-4 rotate-90 bg-background rounded-md text-white">
            Paw Prints
          </div>
        </div>

        <div className="md:flex-1 justify-center">
          <Heading
            title="A Help to those who need it"
            heading="Transform lives with donations"
            subtitle="Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!"
            placeContentLeft
          />

          <div className="flex flex-col gap-6 mt-3">
            <RangeSlider min="0" max="200" value="50" />
            <div className="flex justify-between">
              <Typography tag="p">Goal: $500</Typography>
              <Typography tag="p" className="text-right">
                Raised: $300
              </Typography>
            </div>

            <div className="flex items-center border-2 w-fit">
              <div className="border-r-2 px-4 py-2">$</div>

              <input
                type="number"
                className="pl-2 max-w-16"
                placeholder="10.00"
                required
              />
            </div>

            <div className="flex gap-3 items-start justify-start font-normal text-base">
              {donationAmounts.map((amount) => (
                <div key={amount} className="px-4 py-2 rounded-md border-2 ">
                  ${amount.toFixed(2)}
                </div>
              ))}
            </div>

            <Button className="w-fit">Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCard;
