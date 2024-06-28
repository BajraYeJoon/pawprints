import React from "react";
import donateCardImg from "@/assets/donate-card-thumbnail.png";
import Image from "next/image";
import { Heading, Typography } from "@/components";
import { RangeSlider } from "@/components/RangeSlider/RangeSlider";
import { Button } from "@/components";

const DonateCard = () => {
  const donationAmounts = [10, 25, 50, 100, 250];
  const goalDonateAmount = 500;
  const raisedDonateAmount = 300;

  const goalCompletedPercent = (raisedDonateAmount / goalDonateAmount) * 100;

  return (
    <section className="lg:my-30 mx-auto my-20 px-10 sm:px-6 md:my-28 md:px-24 lg:px-52">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4 lg:gap-0">
        <div className="relative col-span-2 flex justify-center">
          <Image
            className="flex rounded-md object-cover"
            src={donateCardImg}
            alt="Donate Dog"
          />

          <div className="bottom-20 right-12 hidden rotate-90 rounded-md bg-background px-6 py-4 text-white lg:absolute lg:block">
            Paw Prints
          </div>
        </div>

        <div className="col-span-2 justify-center md:flex-1">
          <Heading
            title="A Help to those who need it"
            heading="Transform lives with donations"
            subtitle="Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!"
            placeContentLeft
          />

          <div className="mt-3 flex flex-col gap-6">
            <RangeSlider value={goalCompletedPercent} />
            <div className="flex justify-between">
              <Typography tag="p">Goal: ${goalDonateAmount}</Typography>
              <Typography tag="p" className="text-right">
                Raised: ${raisedDonateAmount}
              </Typography>
            </div>

            <div className="flex w-fit items-center border-2">
              <div className="border-r-2 px-4 py-2">$</div>

              <input
                type="number"
                className="max-w-16 pl-2"
                placeholder="10.00"
                required
              />
            </div>

            <div className="flex flex-wrap justify-start gap-3 text-sm font-normal md:items-start lg:text-base">
              {donationAmounts.map((amount) => (
                <div
                  key={amount}
                  className="rounded-md border-2 px-3 py-1 lg:px-4 lg:py-2"
                >
                  ${amount.toFixed(2)}
                </div>
              ))}
            </div>

            <Button>Donate Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCard;
