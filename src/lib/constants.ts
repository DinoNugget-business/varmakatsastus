export const SITE = {
  name: "Varma Autokatsastus Oy",
  shortName: "Varmakatsastus",
  businessId: "3490695-1",
  domain: "varmakatsastus.fi",
} as const;

export const CONTACT = {
  phone: "040 4153017",
  phoneHref: "tel:+358404153017",
  servicePhone: "040 834 0060",
  servicePhoneHref: "tel:+358408340060",
  partsPhone: "050 364 5366",
  partsPhoneHref: "tel:+358503645366",
  email: "asiakaspalvelu@varmakatsastus.fi",
  serviceEmail: "huolto@varmakatsatus.fi",
  partsEmail: "Tilaus@varma-osat.fi",
  address: "Mekaanikonkatu 23",
  city: "00880 Helsinki",
  fullAddress: "Mekaanikonkatu 23, 00880 Helsinki",
} as const;

export const HOURS = {
  weekdays: { fi: "Ark. 8-18", en: "Mon-Fri 8-18" },
  saturday: { fi: "La 9-15", en: "Sat 9-15" },
  sunday: { fi: "Su suljettu", en: "Sun closed" },
} as const;

export const BOOKING_URL =
  "https://ajanvaraus.muster.fi/?cid=57387&sid=95559";

export const PROMO_CODE = "VARMAPESU";

export const SERVICE_LINKS: Record<string, string | null> = {
  inspection: "/katsastukseen",
  tires: "/pikahuolto",
  repair: "/pikahuolto",
  carwash: null,
  tirehotel: "/pikahuolto",
  parts: "/varaosat",
  cafe: null,
};

export const NAV_LINKS = [
  { href: "/katsastukseen", labelKey: "nav.inspection" },
  { href: "/hinnasto", labelKey: "nav.pricing" },
  { href: "/yrityksille", labelKey: "nav.corporate" },
  { href: "/pikahuolto", labelKey: "nav.quickRepair" },
  { href: "/varaosat", labelKey: "nav.spareParts" },
  { href: "/toihin", labelKey: "nav.careers" },
  { href: "/yhteystiedot", labelKey: "nav.contact" },
] as const;
