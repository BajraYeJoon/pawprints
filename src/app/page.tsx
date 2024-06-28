import Navbar from "@/screens/Navbar/Navbar";
import Hero from "@/screens/Hero/Hero";
import About from "@/screens/About/About";
import DonationSummary from "@/screens/DonationSummary/DonationSummary";
import DonateCard from "@/screens/DonateCard/DonateCard";
import Event from "@/screens/Event/Event";
import UserActionCTA from "@/screens/Cta/Cta";
import NewsLetterCTASection from "@/screens/Cta/NewsLetter";
import Footer from "@/screens/Footer/Footer";
import CustomersTestimonial from "@/screens/Testimonials/Testimonial";
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
    <main className="mx-auto flex flex-col justify-between">
      <div className="relative h-fit bg-foreground px-6 py-3">
        <Navbar />
        <Hero />
      </div>
      <About />
      <DonationSummary />
      <DonateCard />
      <Event />
      <CustomersTestimonial />
      <UserActionCTA />
      <NewsLetterCTASection />
      <Footer />

      {/* FOr seo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
