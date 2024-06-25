import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Page
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
