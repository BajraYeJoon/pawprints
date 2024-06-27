import dogDonateImg1 from "@/assets/dogs/dog-donate-1.png";
import dogDonateImg2 from "@/assets/dogs/dog-donate-2.png";
import dogDonateImg3 from "@/assets/dogs/dog-donate-3.png";

export const navItems = [
  {
    name: "Campaigns & Topics",
    link: "#",
    dropdown: [
      { name: "Campaign 1", link: "#" },
      { name: "Campaign 2", link: "#" },
      { name: "Topic 1", link: "#" },
    ],
  },
  {
    name: "Animals",
    link: "#",
    dropdown: [
      { name: "Cats", link: "#" },
      { name: "Dogs", link: "#" },
      { name: "Wildlife", link: "#" },
    ],
  },
  {
    name: "About Us",
    link: "#",
    dropdown: [
      { name: "Our Mission", link: "#" },
      { name: "Our Team", link: "#" },
      { name: "Careers", link: "#" },
    ],
  },
  { name: "Contact", link: "#" },
];

export const donationSummaries = [
  {
    goal: 100,
    raised: 50,
    title: "New chance for animals",
    subtitle: "Give new chance for animals to live a better life",
    img: dogDonateImg1,
  },
  {
    goal: 100,
    raised: 50,
    title: "Help the ecosystem",
    subtitle: "Ensure the ecosystem is safe for animals",
    img: dogDonateImg2,
  },
  {
    goal: 100,
    raised: 50,
    title: "New Sustainanbility",
    subtitle:
      "Support the community with animals care lorem ipsum dolor sit amet consectetur adipiscing elit",
    img: dogDonateImg3,
  },
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "About Us", url: "#" },
      { name: "Get Involved", url: "#" },
      { name: "Contact Us", url: "#" },
      { name: "Media", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Animal Safety", url: "#" },
      { name: "Programs", url: "#" },
      { name: "Events", url: "#" },
      { name: "Alumni", url: "#" },
    ],
  },
  {
    title: "Ways to Give",
    links: [
      { name: "Find a Family", url: "#" },
      { name: "Donation", url: "#" },
      { name: "Volunteer", url: "#" },
      { name: "Give a Gift", url: "#" },
    ],
  },
];

export const subFooterLinks = [
  {
    name: "Terms of Service",
    url: "#",
  },
  {
    name: "Privacy Policy",
    url: "#",
  },
  {
    name: "Security",
    url: "#",
  },
  {
    name: "Sitemap",
    url: "#",
  },
];
