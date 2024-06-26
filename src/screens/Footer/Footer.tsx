import { Typography } from "@/components";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6"; // Corrected import for Twitter icon
import { footerLinks, subFooterLinks } from "@/constants";
import { IconType } from "react-icons";

interface Section {
  title: string;
  links: { name: string; url: string }[];
}

interface LinkItem {
  name: string;
  url: string;
}

const Footer = () => (
  // Main footer
  <footer
    className="mx-auto max-w-80 pb-8 sm:max-w-2xl md:mt-24 lg:max-w-screen-lg xl:px-0"
    aria-labelledby="footer-heading"
  >
    <Typography
      tag="h1"
      className={cn(
        "mb-4 font-oleo text-2xl font-bold md:mb-6 md:text-xl lg:mb-16 lg:text-2xl",
      )}
    >
      PawPrints
    </Typography>
    <div className="grid xl:grid-cols-3 xl:gap-8">
      <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-3 lg:mb-0 xl:col-span-2">
        {footerLinks.map((section, index) => (
          <FooterSectionLinks key={index} {...section} />
        ))}
      </div>
      <div className="space-y-4 md:space-y-8">
        <Typography
          tag="h3"
          className="text-sm font-medium uppercase md:text-base md:font-normal"
        >
          Social Media
        </Typography>
        <Typography
          tag="p"
          className="text-xs tracking-wider text-gray-800 md:text-sm"
        >
          Follow us on social media to find out the latest updates on our
          progress.
        </Typography>
        <div className="flex space-x-6">
          <SocialIcon Icon={FaXTwitter} />
          <SocialIcon Icon={FaFacebookF} />
          <SocialIcon Icon={AiFillInstagram} />
        </div>
      </div>
    </div>

    {/* Sub Footer */}
    <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-900/50 pt-8 text-xs font-medium tracking-wide text-gray-700 sm:mt-20 md:text-sm lg:mt-24 lg:flex-row">
      <Typography tag="p">
        Copyright &copy; {new Date().getUTCFullYear()} fourpaws. All Rights
        Reserved
      </Typography>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:justify-items-end">
        {subFooterLinks.map(({ name, url }, index) => (
          <li key={index}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

const SocialIcon = ({ Icon }: { Icon: IconType }) => (
  <Icon size={20} className="text-gray-800 hover:text-gray-500" />
);

const FooterSectionLinks = ({ title, links }: Section) => (
  <div>
    <Typography
      tag="h3"
      className="text-xs font-medium uppercase leading-6 md:text-sm md:font-normal lg:text-base"
    >
      {title}
    </Typography>
    <ul className="mt-6 space-y-2 font-medium tracking-wide md:space-y-4">
      {links.map(({ name, url }: LinkItem, index) => (
        <li key={index}>
          <Link
            href={url}
            className="text-xs text-gray-500 hover:text-gray-900 md:text-sm"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
