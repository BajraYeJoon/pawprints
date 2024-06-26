import React from "react";
import Link from "next/link";
import { AlignJustify, HamIcon } from "lucide-react";
import { Button } from "@/components";
import { Oleo_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";

const oleo = Oleo_Script({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="flex flex-col items-start w-[90%] md:w-[78%] fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-2xl bg-white z-[5000] px-4 pl-8 py-3  lg:items-center justify-start lg:flex-row ">
      <Link
        href="/"
        className={cn(
          "flex items-center lg:border-r-2 lg:pr-8 border-gray-200 whitespace-nowrap text-2xl text-primary",
          oleo.className
        )}
      >
        Paw Prints
      </Link>

      {/* FOR MOBILE NAVIGATION */}
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-2 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <AlignJustify size={30} />
      </label>

      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-fit flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 xl:ml-0 lg:max-h-full lg:flex-row"
      >
        <ul className="flex w-full flex-col lg:pl-8  justify-center items-center space-y-2 lg:flex-row lg:justify-start lg:space-y-0 ">
          {navItems.map((item, index) => (
            <li key={index} className="lg:mr-12">
              <Link
                className=" text-gray-700 hover:text-background hover:font-semibold transition-all ease-in-out "
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
        <div className="my-4 flex flex-col w-full justify-center lg:justify-end gap-5 md:flex-row items-center lg:my-0 lg:ml-auto lg:space-x-3  ">
          <Button variant="secondary" className="w-full lg:w-fit " showIcon>
            Volunteer
          </Button>
          <Button showIcon className="w-full lg:w-fit">
            Donate
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
