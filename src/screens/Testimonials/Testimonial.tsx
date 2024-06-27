"use client";

import { useState } from "react";
import { Heading, NavigationArrows } from "@/components";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { LoaderCircleIcon } from "lucide-react";
import { useTestimonials } from "@/hooks/useTestimonialApiCall";
import { cn } from "@/lib/utils";
const CustomersTestimonial = () => {
  const { testimonials, isLoading, setIsLoading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <section className="mx-auto my-20 flex w-full flex-col items-center justify-center gap-12 px-10 md:my-32 md:gap-12 md:px-24 lg:gap-12 xl:max-w-screen-2xl">
      <Heading
        title="Testimonials"
        heading="Check what our volunteers are saying"
        subtitle="We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities."
      />

      {testimonials.length > 0 && (
        <article className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-24 lg:gap-32">
          <div className="relative h-52 w-52 overflow-hidden rounded-t-full md:h-[380px] md:min-w-[300px] lg:h-[560px] lg:w-[452px]">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoaderCircleIcon size={50} className="animate-spin" />
              </div>
            )}
            <Image
              key={testimonials[currentIndex].imagePath}
              src={testimonials[currentIndex].imagePath}
              alt="Testimonial"
              width={720}
              height={1080}
              className="h-full w-full object-contain md:object-cover"
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>

          <figure className="flex max-w-screen-md flex-col items-center justify-center gap-4 text-sm md:items-start md:gap-10 md:text-base lg:text-xl">
            <FaQuoteLeft size={40} className="hidden md:block" />
            <blockquote className="text-center font-normal text-gray-900 md:text-left lg:leading-[2.5rem]">
              {testimonials[currentIndex].content}
            </blockquote>
            <figcaption className="font-medium">
              {testimonials[currentIndex].fullName}
            </figcaption>

            <div className="flex items-start justify-center gap-3">
              <NavigationArrows
                direction="prev"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
              />
              <NavigationArrows
                direction="next"
                onClick={goToNext}
                disabled={currentIndex === testimonials.length - 1}
              />
            </div>
          </figure>
        </article>
      )}
    </section>
  );
};

export default CustomersTestimonial;
