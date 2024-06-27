import React from "react";
import { Button, Typography } from "@/components";

const NewsLetterCTASection = () => {
  return (
    <section className="my-10 bg-foreground px-6 py-10 md:my-12 md:px-0 lg:my-12">
      <div className="mx-auto flex flex-col justify-between gap-5 px-4 lg:flex-row lg:px-56">
        <div className="flex flex-col items-center gap-1 md:gap-2 lg:items-start lg:gap-2">
          <Typography
            tag="h3"
            className="text-sm font-semibold md:text-base lg:text-2xl"
          >
            Join our Newsletter{" "}
          </Typography>
          <Typography tag="p" className="font-normal md:text-sm lg:text-base">
            Pawprint that has been for pets.
          </Typography>
        </div>

        <form className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="email"
            name="email"
            className="h-10 w-full rounded-md px-5 py-1 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none md:h-14 md:max-w-md md:text-base lg:text-lg"
            placeholder="Enter your email"
            required
          />

          <Button hideIcon>Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterCTASection;
