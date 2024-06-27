import { Typography } from "@/components";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { footerLinks, subFooterLinks } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="mx-auto max-w-80 pb-8 sm:max-w-2xl lg:mt-24 lg:max-w-7xl xl:max-w-screen-2xl xl:px-8"
      aria-labelledby="footer-heading"
    >
      <Typography
        tag="h1"
        className={cn(
          "font-oleo mb-4 text-2xl font-bold md:mb-6 md:text-xl lg:mb-16 lg:text-3xl",
        )}
      >
        PawPrints
      </Typography>
      <div className="grid xl:grid-cols-3 xl:gap-8">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:mb-0 xl:col-span-2">
          {footerLinks.map((section, index) => (
            <div key={index} className="md:gap-8">
              <Typography
                tag="h3"
                className="text-sm font-medium uppercase leading-6 md:text-base md:font-normal lg:text-lg"
              >
                {section.title}
              </Typography>
              <ul className="mt-6 space-y-2 font-medium tracking-wide md:space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.url}
                      className="text-sm text-gray-500 hover:text-gray-900 md:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-4 md:space-y-8">
          <Typography
            tag="h3"
            className="text-sm font-medium uppercase md:text-base md:font-normal lg:text-lg"
          >
            Social Media
          </Typography>
          <Typography
            tag="p"
            className="text-sm tracking-wider text-gray-800 md:text-base lg:text-lg"
          >
            Follow us on social media to find out the latest updates on our
            progress.
          </Typography>
          <div className="flex space-x-6">
            <FaXTwitter size={24} />
            <FaFacebookF size={24} />
            <AiFillInstagram size={24} />
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-900/50 pt-8 text-sm font-medium tracking-wide text-gray-700 sm:mt-20 md:text-base lg:mt-24 lg:flex-row">
        <Typography tag="p" className="">
          Copyright &copy; {new Date().getUTCFullYear()} fourpaws. All Rights
          Reserved
        </Typography>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:justify-items-end">
          {subFooterLinks.map((link, index) => (
            <Link key={index} href={link.url}>
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
