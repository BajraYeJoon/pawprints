import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paw Prints - Your donation can save a life",
  description: "Donate for cause and help animals in need.",

  openGraph: {
    title: "Paw Prints",
    type: "website",
    siteName: "Paw Prints",
    locale: "en_US",
    description: "Donate for cause and help animals in need.",
    url: "http://localhost:3000/",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}