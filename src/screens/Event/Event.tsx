import { Button, Heading, Typography } from "@/components";
import React from "react";
import { eventScheduleDates } from "@/constants";

const Event = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-center gap-12 bg-accent px-10 md:my-28 md:gap-16 md:px-24 md:py-28 lg:my-32 lg:px-52">
      <Heading
        title="Calender
        "
        heading="Event Schedule"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {eventScheduleDates.map((event, index) => (
          <div
            key={index}
            className="grid h-fit grid-cols-1 place-content-evenly gap-5 rounded-sm bg-[#FBEFE9] p-5 md:h-72"
          >
            <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:justify-start">
              <Typography tag="span" className="text-3xl font-normal">
                {" "}
                {event.date}
              </Typography>
              <Typography tag="span" className="text-base text-gray-400">
                {" "}
                {event.month}
              </Typography>
            </div>
            <Typography
              tag="h1"
              className="text-base font-medium tracking-normal md:text-lg"
            >
              {event.eventName}
            </Typography>
            <div className="flex flex-row items-start justify-between gap-1 text-sm tracking-wide text-background md:flex-col md:justify-center">
              <Typography tag="span">{event.time}</Typography>
              <Typography tag="span">{event.location}</Typography>
            </div>
          </div>
        ))}
      </div>

      <Button>View All</Button>
    </section>
  );
};

export default Event;
