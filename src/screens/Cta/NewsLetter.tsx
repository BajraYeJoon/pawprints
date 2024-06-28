import React from "react";
import { Button, Typography } from "@/components";

const NewsLetterCTASection = () => {
  return (
    <section className="my-10 bg-foreground py-10 md:my-0 md:px-0">
      <div className="mx-auto flex flex-col justify-between gap-5 lg:max-w-screen-lg lg:flex-row">
        <div className="flex flex-col items-center gap-1 md:gap-2 lg:items-start lg:gap-2">
          <Typography
            tag="h3"
            className="text-xs font-semibold md:text-sm lg:text-lg"
          >
            Join our Newsletter{" "}
          </Typography>
          <Typography tag="p" className="text-xs font-normal lg:text-sm">
            Pawprint that has been for pets.
          </Typography>
        </div>

        <form className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <input
            type="email"
            name="email"
            className="h-10 w-full rounded-md px-5 py-1 text-xs shadow-sm placeholder:text-gray-400 focus:outline-none md:h-10 md:max-w-md md:text-sm"
            placeholder="Enter your email"
            required
          />

          <Button hideIcon className="md:h-10">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterCTASection;
