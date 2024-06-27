import { Button, Heading, Typography } from "@/components";
import React from "react";

const eventScheduleDates = [
  {
    date: "08",
    month: "June",
    eventName: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
  {
    date: "08 ",
    month: "June",

    eventName: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
  {
    date: "08 ",
    month: "June",

    eventName: "Disaster Relief for Animals",
    time: "07:00 AM - 10:00 PM",
    location: "Kathmandu",
  },
];

const Event = () => {
  return (
    <section className="px-10 md:px-24 lg:px-52 my-20 md:my-28 lg:my-32 flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-24">
      <Heading
        title="Calender
        "
        heading="Event Schedule"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
        {eventScheduleDates.map((event, index) => (
          <div
            key={index}
            className="h-fit md:h-72 lg:min-w-[400px] grid grid-cols-1 gap-5 p-5 bg-[#FDF7F4] place-content-evenly rounded-sm"
          >
            <div className="flex flex-row items-center md:flex-col justify-between md:justify-start md:items-start ">
              <Typography tag="span" className="text-4xl font-normal ">
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
              className="text-base md:text-2xl font-medium tracking-normal"
            >
              {event.eventName}
            </Typography>
            <div className="flex flex-row justify-between md:flex-col tracking-wide gap-1 text-sm text-background md:justify-center items-start">
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
