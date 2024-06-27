import { Button, Typography } from "@/components";
import Image from "next/image";
import ctaDog from "@/assets/cta/cta-dog.png";
import ctaCat from "@/assets/cta/cta-cat.png";

const UserActionCTA = () => {
  return (
    <section className="relative mx-auto flex w-4/5 flex-col items-center justify-center gap-4 overflow-hidden rounded-md bg-primary p-6 text-white md:gap-10 md:py-20 lg:my-24 lg:w-3/4">
      <div className="absolute left-0 top-0 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full border-[30px] border-foreground md:block md:h-[200px] md:w-[200px] lg:h-[500px] lg:w-[500px] lg:border-[60px]"></div>
      <div className="absolute bottom-0 right-0 hidden translate-x-1/2 translate-y-1/2 transform rounded-full border-[30px] border-foreground md:block md:h-[200px] md:w-[200px] lg:h-[500px] lg:w-[500px] lg:border-[60px]"></div>

      <Image
        src={ctaDog}
        alt="cta dog"
        className="absolute bottom-0 left-0 z-30 hidden object-contain lg:block"
      />

      <Typography
        tag="h1"
        className="text-lg font-semibold md:text-2xl lg:text-4xl"
      >
        Get Involved
      </Typography>
      <Typography
        tag="p"
        className="text-center text-sm font-normal text-gray-200 md:max-w-xl md:p-0 md:text-base lg:max-w-5xl lg:text-xl"
      >
        Our work is made possible by the generosity of people like you, who have
        contributed to our mission to improve the lives of all animals.
      </Typography>

      <div className="flex w-full flex-col items-center justify-center gap-3 md:space-x-4 lg:flex-row">
        <Button variant="secondary">Adopt & Donate to help us</Button>
        <Button variant="secondary">Volunteering opportunities</Button>
      </div>

      <Image
        src={ctaCat}
        alt="cta cat"
        className="absolute bottom-0 right-0 z-30 hidden lg:block"
      />
    </section>
  );
};

export default UserActionCTA;
