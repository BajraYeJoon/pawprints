import React from "react";
import Link from "next/link";
import { AlignJustify, ChevronDown } from "lucide-react";
import { Button } from "@/components";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";

interface DropdownItem {
  name: string;
  link: string;
}

interface NavItem {
  name: string;
  link: string;
  dropdown?: DropdownItem[];
}
const Navbar = () => {
  const renderNavItems = () =>
    navItems.map(({ name, link, dropdown = [] }: NavItem, index) => (
      <li key={link} className="lg:mr-12">
        <Link
          className="flex items-center text-sm text-gray-700 transition-all ease-in-out hover:text-background"
          href={link}
        >
          {name}
          {dropdown && <ChevronDown size={12} className="ml-2" />}
        </Link>
      </li>
    ));

  return (
    <header className="fixed inset-x-0 top-10 z-[5000] mx-auto flex w-4/5 flex-col items-start justify-start rounded-2xl border border-gray-400 bg-white px-4 py-3 pl-8 lg:flex-row lg:items-center">
      <Link
        href="/"
        className={cn(
          "flex items-center whitespace-nowrap border-gray-200 font-oleo text-xl text-primary lg:border-r-2 lg:pr-4",
        )}
      >
        Paw Prints
      </Link>

      {/* FOR MOBILE NAVIGATION */}
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute right-5 top-2 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <AlignJustify size={30} />
      </label>

      <nav
        aria-label="Header Navigation"
        className="flex max-h-0 w-full flex-col items-center overflow-hidden text-nowrap transition-all peer-checked:max-h-fit peer-checked:pt-8 lg:ml-24 lg:max-h-full lg:flex-row xl:ml-0"
      >
        <ul className="flex w-full flex-col items-center justify-center space-y-2 lg:flex-row lg:justify-start lg:space-y-0 lg:pl-3">
          {renderNavItems()}
        </ul>

        <hr className="mt-4 w-full lg:hidden" />

        {/* NAVIGATIONAL BUTTON */}
        <div className="my-4 flex w-full flex-col items-center justify-center gap-5 md:flex-row lg:my-0 lg:justify-end">
          <Button variant="secondary" className="w-full lg:w-fit" hideIcon>
            Volunteer
          </Button>
          <Button hideIcon className="w-full lg:w-fit">
            Donate
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
