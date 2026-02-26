import { CONTACT, SITE } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: SITE.name,
    url: `https://${SITE.domain}`,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Helsinki",
      postalCode: "00880",
      addressCountry: "FI",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 60.2039,
      longitude: 25.0271,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "15:00",
      },
    ],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
