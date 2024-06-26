import Hero from "@/screens/Hero/Hero";
import Navbar from "@/screens/Navbar/Navbar";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Paw Prints",
    image: "https://cdn-icons-png.flaticon.com/512/12/12638.png",
    description:
      "We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.",
  };

  return (
    <main className="flex flex-col mx-auto justify-between ">
      <div className="relative px-6 md:px-16 lg:px-24 bg-foreground h-fit lg:h-screen">
        <Navbar />
        <Hero />
      </div>
      Page
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      /> */}
    </main>
  );
}
