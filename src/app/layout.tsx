import type { Metadata } from "next";
import { Montserrat, Oleo_Script, Work_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"] });

const oleo = Oleo_Script({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-oleo",
});

const work_sans = Work_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Paw Prints - Your donation can save a life",
  description: "Donate for cause and help animals in need.",

  openGraph: {
    title: "Paw Prints",
    type: "website",
    siteName: "Paw Prints",
    locale: "en_US",
    description: "Donate for cause and help animals in need.",
    url: "https://pawprints-one.vercel.app/",
    images: "https://cdn-icons-png.flaticon.com/512/12/12638.png",
    emails: "binaya.bajrashakya@gmail.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,

    googleBot: {
      index: true,
      follow: false,
      "max-image-preview": "large",
      // "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${oleo.variable} ${work_sans.variable}`}
      >
        {children}

        <Analytics />
      </body>
    </html>
  );
}
