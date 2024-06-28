import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: "/private/",
    },
    sitemap: "https://pawprints-one.vercel.app//sitemap.xml",
  };
}
