import { BOOKING_URL, CONTACT } from "./constants";

export type ChatFAQ = {
  id: string;
  category: string;
  keywords: { fi: string[]; en: string[] };
  question: { fi: string; en: string };
  answer: { fi: string; en: string };
  quickReplies?: string[];
  link?: { url: string; label: { fi: string; en: string } };
};

export type ChatCategory = {
  id: string;
  label: { fi: string; en: string };
  icon: string;
  faqId: string;
};

export const CHAT_CATEGORIES: ChatCategory[] = [
  { id: "pricing", label: { fi: "Hinnat", en: "Pricing" }, icon: "Tag", faqId: "price-basic" },
  { id: "hours", label: { fi: "Aukioloajat", en: "Hours" }, icon: "Clock", faqId: "hours" },
  { id: "location", label: { fi: "Sijainti", en: "Location" }, icon: "MapPin", faqId: "location" },
  { id: "booking", label: { fi: "Ajanvaraus", en: "Booking" }, icon: "Calendar", faqId: "booking" },
  { id: "process", label: { fi: "Katsastus", en: "Inspection" }, icon: "ClipboardCheck", faqId: "process-when" },
  { id: "services", label: { fi: "Palvelut", en: "Services" }, icon: "Wrench", faqId: "services" },
  { id: "contact", label: { fi: "Yhteystiedot", en: "Contact" }, icon: "Phone", faqId: "contact-phone" },
];

export const FAQ_DATA: ChatFAQ[] = [
  // --- PRICING ---
  {
    id: "price-basic",
    category: "pricing",
    keywords: {
      fi: ["hinta", "maksaa", "paljonko", "euro", "katsastus hinta", "halpa", "edullinen", "39"],
      en: ["price", "cost", "much", "euro", "cheap", "affordable", "39"],
    },
    question: { fi: "Paljonko katsastus maksaa?", en: "How much does inspection cost?" },
    answer: {
      fi: `Määräaikaiskatsastus arkisin alkaen **39 €** (ilman pakokaasumittausta). Suosituimmat paketit:\n\n• Katsastus: 39 €\n• Katsastus + Käsinpesu: 75 € (koodi VARMAPESU)\n• Katsastus + Täyspesu: 99 €\n\nKaikki hinnat sisältävät ALV 25,5 %.`,
      en: `Periodic inspection weekdays from **39 €** (without emission measurement). Most popular packages:\n\n• Inspection: 39 €\n• Inspection + Hand Wash: 75 € (code VARMAPESU)\n• Inspection + Full Wash: 99 €\n\nAll prices include VAT 25.5%.`,
    },
    quickReplies: ["price-saturday", "price-electric", "booking"],
    link: { url: "/hinnasto", label: { fi: "Katso koko hinnasto", en: "View full pricing" } },
  },
  {
    id: "price-saturday",
    category: "pricing",
    keywords: {
      fi: ["lauantai", "viikonloppu", "la"],
      en: ["saturday", "weekend"],
    },
    question: { fi: "Paljonko katsastus maksaa lauantaisin?", en: "How much on Saturdays?" },
    answer: {
      fi: "Lauantain hinnat:\n\n• Katsastus (ilman pakokaasumittausta): **55 €**\n• Katsastuspaketti (sis. lakisääteiset mittaukset): **78 €**\n• Drive-In katsastus: **98 €**\n\nLauantaisin palvelemme klo 9-15.",
      en: "Saturday prices:\n\n• Inspection (without emission): **55 €**\n• Inspection package (incl. statutory measurements): **78 €**\n• Drive-In inspection: **98 €**\n\nSaturdays we serve 9 AM - 3 PM.",
    },
    quickReplies: ["price-basic", "booking"],
  },
  {
    id: "price-electric",
    category: "pricing",
    keywords: {
      fi: ["sahkoauto", "sahko", "ev", "tesla", "hybridi"],
      en: ["electric", "ev", "tesla", "hybrid"],
    },
    question: { fi: "Paljonko sähköauton katsastus maksaa?", en: "Electric vehicle inspection cost?" },
    answer: {
      fi: "Sähköauton katsastus:\n\n• Arkisin: **50 €**\n• Lauantaisin: **68 €**",
      en: "Electric vehicle inspection:\n\n• Weekdays: **50 €**\n• Saturdays: **68 €**",
    },
    quickReplies: ["price-basic", "booking"],
  },
  {
    id: "price-reinspection",
    category: "pricing",
    keywords: {
      fi: ["jalkitarkastus", "uusintatarkastus", "uusinta", "hylky"],
      en: ["reinspection", "re-inspection", "recheck", "failed"],
    },
    question: { fi: "Paljonko jälkitarkastus maksaa?", en: "Re-inspection cost?" },
    answer: {
      fi: "Jälkitarkastus:\n\n• Arkisin: **33 €**\n• Lauantaisin: **37 €**\n• Päästömittauksella: **48 €**\n\nJälkitarkastus on tehtävä kuukauden kuluessa alkuperäisestä katsastuksesta.",
      en: "Re-inspection:\n\n• Weekdays: **33 €**\n• Saturdays: **37 €**\n• With emission measurement: **48 €**\n\nRe-inspection must be done within one month of the original inspection.",
    },
    quickReplies: ["process-fail", "booking"],
  },
  {
    id: "price-registration",
    category: "pricing",
    keywords: {
      fi: ["rekisterointikatsastus", "rekisterointi", "tuonti", "tuontiauto", "maahantuonti"],
      en: ["registration", "import", "imported"],
    },
    question: { fi: "Rekisteröintikatsastuksen hinta?", en: "Registration inspection cost?" },
    answer: {
      fi: "Rekisteröintikatsastus:\n\n• ETA-maat, tyyppihyväksytyt (ilman kuntotarkastusta): **150 €**\n• ETA-maat, kuntotarkastettavat: **210 €**\n• ETA-maiden ulkopuolelta (esim. USA, Japani): **440 €**",
      en: "Registration inspection:\n\n• EEA countries, type-approved (without condition check): **150 €**\n• EEA countries, with condition check: **210 €**\n• Outside EEA (e.g., USA, Japan): **440 €**",
    },
    quickReplies: ["booking", "contact-phone"],
  },

  // --- HOURS ---
  {
    id: "hours",
    category: "hours",
    keywords: {
      fi: ["aukiolo", "auki", "avoinna", "milloin", "kellonaika", "aika"],
      en: ["open", "hours", "when", "time", "schedule"],
    },
    question: { fi: "Milloin olette auki?", en: "When are you open?" },
    answer: {
      fi: "Aukioloajat:\n\n• **Ark. (ma-pe):** 8:00 - 18:00\n• **Lauantai:** 9:00 - 15:00\n• **Sunnuntai:** Suljettu\n• **Pyhäpäivät:** Suljettu",
      en: "Opening hours:\n\n• **Mon-Fri:** 8:00 AM - 6:00 PM\n• **Saturday:** 9:00 AM - 3:00 PM\n• **Sunday:** Closed\n• **Public holidays:** Closed",
    },
    quickReplies: ["location", "booking"],
  },

  // --- LOCATION ---
  {
    id: "location",
    category: "location",
    keywords: {
      fi: ["sijainti", "osoite", "missa", "paikka", "herttoniemi", "mekaanikonkatu", "kartta"],
      en: ["location", "address", "where", "place", "herttoniemi", "map", "directions"],
    },
    question: { fi: "Missä olette?", en: "Where are you located?" },
    answer: {
      fi: `Olemme Herttoniemessä, Helsingissä:\n\n📍 **${CONTACT.address}**\n**${CONTACT.city}**\n\nHelppo tulla autolla — löydät meidät Mekaanikonkadulta.`,
      en: `We are in Herttoniemi, Helsinki:\n\n📍 **${CONTACT.address}**\n**${CONTACT.city}**\n\nEasy to reach by car — find us on Mekaanikonkatu.`,
    },
    quickReplies: ["hours", "booking"],
  },

  // --- BOOKING ---
  {
    id: "booking",
    category: "booking",
    keywords: {
      fi: ["varaa", "ajanvaraus", "varata", "varaan", "netti", "verkko", "online"],
      en: ["book", "appointment", "reserve", "online", "schedule"],
    },
    question: { fi: "Miten varaan ajan?", en: "How do I book an appointment?" },
    answer: {
      fi: `Voit varata katsastusajan helposti verkossa 24/7 ajanvarausjärjestelmästämme. Voit myös soittaa meille numeroon **${CONTACT.phone}**.`,
      en: `You can book an inspection appointment easily online 24/7 through our booking system. You can also call us at **${CONTACT.phone}**.`,
    },
    quickReplies: ["price-basic", "hours"],
    link: { url: BOOKING_URL, label: { fi: "Varaa aika nyt", en: "Book now" } },
  },

  // --- INSPECTION PROCESS ---
  {
    id: "process-when",
    category: "process",
    keywords: {
      fi: ["milloin katsastaa", "katsastusvali", "ensimmainen", "kuinka usein", "maaraaika"],
      en: ["when inspect", "interval", "first", "how often", "frequency", "periodic"],
    },
    question: { fi: "Milloin auto pitää katsastaa?", en: "When does my car need inspection?" },
    answer: {
      fi: "Katsastusvälit:\n\n• **Uusi auto:** Ensimmäinen katsastus 4 vuoden iässä\n• **4-10 vuotta:** Katsastus 2 vuoden välein\n• **Yli 10 vuotta:** Katsastus vuosittain\n\nKatsastuspäivän voit tarkistaa Trafin palvelusta tai rekisteröintitodistuksesta.",
      en: "Inspection intervals:\n\n• **New car:** First inspection at 4 years\n• **4-10 years:** Every 2 years\n• **Over 10 years:** Annually\n\nYou can check your inspection date through Trafi's service or your registration certificate.",
    },
    quickReplies: ["process-what", "booking"],
  },
  {
    id: "process-what",
    category: "process",
    keywords: {
      fi: ["mita tapahtuu", "katsastuksessa", "tarkastetaan", "miten katsastus"],
      en: ["what happens", "during", "checked", "how inspection"],
    },
    question: { fi: "Mitä katsastuksessa tapahtuu?", en: "What happens during inspection?" },
    answer: {
      fi: "Katsastuksessa tarkastetaan:\n\n1. **Auton kunto**\n2. **Rekisteriin merkityt tiedot**\n3. **Liikenneturvallisuus**\n4. **Pakokaasupäästöt**\n\nVoit olla mukana tai odottaa toimistossa. Voit myös jättää auton aamulla ja hakea illalla. Katsastus kestää noin 30 minuuttia.",
      en: "During inspection, the following are checked:\n\n1. **Vehicle condition**\n2. **Registry information**\n3. **Traffic safety**\n4. **Exhaust emissions**\n\nYou can be present or wait in the office. You can also drop off your car in the morning and pick it up in the evening. Inspection takes about 30 minutes.",
    },
    quickReplies: ["process-fail", "booking"],
  },
  {
    id: "process-fail",
    category: "process",
    keywords: {
      fi: ["hylky", "ei mene lapi", "hylatty", "korjaus", "vika", "ajokielto"],
      en: ["fail", "failed", "rejected", "defect", "repair", "ban"],
    },
    question: { fi: "Entä jos auto ei mene läpi?", en: "What if my car fails inspection?" },
    answer: {
      fi: "Jos auto ei mene läpi:\n\n• **Jälkitarkastus** on tehtävä kuukauden kuluessa (33 € ark., 37 € la)\n• **Lievät viat:** Vain korjauskehotus, ei tarvitse hyväksyttää uudelleen\n• **Vakavat viat:** Auto voidaan määrätä ajokieltoon\n\nAutoa ei saa käyttää liikenteessä ilman voimassa olevaa katsastusta.",
      en: "If the car fails:\n\n• **Re-inspection** must be done within one month (33 € weekdays, 37 € Sat)\n• **Minor defects:** Only repair recommendation, no re-approval needed\n• **Serious defects:** Driving ban may be imposed\n\nThe vehicle may not be used in traffic without a valid inspection.",
    },
    quickReplies: ["price-reinspection", "booking"],
  },

  // --- SERVICES ---
  {
    id: "services",
    category: "services",
    keywords: {
      fi: ["palvelu", "tarjoat", "mita teette", "kaikki palvelut"],
      en: ["service", "offer", "what do you", "all services"],
    },
    question: { fi: "Mitä palveluja tarjoatte?", en: "What services do you offer?" },
    answer: {
      fi: "Kaikki palvelumme saman katon alla:\n\n• **Katsastus** — määräaikais-, muutos- ja rekisteröintikatsastukset\n• **Rengaspalvelut** — vaihto, tasapainotus, myynti\n• **Autohuolto** — pikahuolto, öljynvaihto, pienet korjaukset\n• **Autopesu** — käsinpesu ja sisäpuhdistus\n• **Rengashotelli** — kausirenkaiden säilytys\n• **Varaosat** — kaikki merkit, nopea toimitus\n• **Kahvila** — odottaessa",
      en: "All services under one roof:\n\n• **Inspection** — periodic, modification, and registration\n• **Tire Services** — changes, balancing, sales\n• **Car Repair** — quick service, oil changes, minor repairs\n• **Car Wash** — hand wash and interior cleaning\n• **Tire Hotel** — seasonal tire storage\n• **Spare Parts** — all brands, fast delivery\n• **Cafe** — while you wait",
    },
    quickReplies: ["price-basic", "booking"],
    link: { url: "/katsastukseen", label: { fi: "Lue lisää palveluista", en: "Read more about services" } },
  },
  {
    id: "services-tires",
    category: "services",
    keywords: {
      fi: ["rengas", "renkaanvaihto", "tasapainotus", "rengashotelli", "sailytys", "kausirengas"],
      en: ["tire", "tyre", "change", "balance", "storage", "seasonal", "hotel"],
    },
    question: { fi: "Rengaspalvelut ja hinnat?", en: "Tire services and prices?" },
    answer: {
      fi: "Rengaspalvelumme:\n\n• **Kausirenkaanvaihto:** 35 €\n• **Pyörätyöt ja tasapainotus:** 25 €/kpl\n• **Rengashotelli (kausirenkaiden säilytys):** 65 €/kausi\n\nRenkaanvaihdon voit yhdistää katsastukseen samalla käynnillä!",
      en: "Our tire services:\n\n• **Seasonal tire change:** 35 €\n• **Wheel work and balancing:** 25 €/pc\n• **Tire hotel (seasonal storage):** 65 €/season\n\nYou can combine a tire change with inspection in one visit!",
    },
    quickReplies: ["price-basic", "booking"],
  },
  {
    id: "services-parts",
    category: "services",
    keywords: {
      fi: ["varaosa", "osat", "varma-osat", "tilaa", "toimitus"],
      en: ["spare", "parts", "order", "delivery"],
    },
    question: { fi: "Varaosien tilaus ja toimitus?", en: "Spare parts ordering and delivery?" },
    answer: {
      fi: `Varma-Osat — varaosia kaikkiin merkkeihin:\n\n• **Jopa 30 % edullisemmat hinnat**\n• Tilaa ennen klo 15, nouda seuraavana päivänä\n• Saman päivän toimitukset myös mahdollisia\n\nTilaukset: **${CONTACT.partsPhone}** tai ${CONTACT.partsEmail}`,
      en: `Varma-Osat — spare parts for all brands:\n\n• **Up to 30% lower prices**\n• Order before 3 PM, pick up next day\n• Same-day delivery also available\n\nOrders: **${CONTACT.partsPhone}** or ${CONTACT.partsEmail}`,
    },
    quickReplies: ["contact-phone", "location"],
  },

  // --- CONTACT ---
  {
    id: "contact-phone",
    category: "contact",
    keywords: {
      fi: ["puhelin", "numero", "soittaa", "yhteystieto"],
      en: ["phone", "number", "call", "contact"],
    },
    question: { fi: "Puhelinnumerot?", en: "Phone numbers?" },
    answer: {
      fi: `Puhelinnumeromme:\n\n• **Katsastus:** ${CONTACT.phone}\n• **Autohuolto:** ${CONTACT.servicePhone}\n• **Varaosat:** ${CONTACT.partsPhone}`,
      en: `Our phone numbers:\n\n• **Inspection:** ${CONTACT.phone}\n• **Car repair:** ${CONTACT.servicePhone}\n• **Spare parts:** ${CONTACT.partsPhone}`,
    },
    quickReplies: ["contact-email", "hours"],
  },
  {
    id: "contact-email",
    category: "contact",
    keywords: {
      fi: ["sahkoposti", "email", "meili", "viesti"],
      en: ["email", "mail", "write"],
    },
    question: { fi: "Sähköpostiosoitteet?", en: "Email addresses?" },
    answer: {
      fi: `Sähköpostimme:\n\n• **Katsastus:** ${CONTACT.email}\n• **Autohuolto:** ${CONTACT.serviceEmail}\n• **Varaosat:** ${CONTACT.partsEmail}`,
      en: `Our email addresses:\n\n• **Inspection:** ${CONTACT.email}\n• **Car repair:** ${CONTACT.serviceEmail}\n• **Spare parts:** ${CONTACT.partsEmail}`,
    },
    quickReplies: ["contact-phone", "booking"],
  },

  // --- PAYMENT ---
  {
    id: "payment",
    category: "payment",
    keywords: {
      fi: ["maksu", "maksutapa", "kortti", "kateinen", "visa", "mastercard"],
      en: ["payment", "pay", "card", "cash", "visa", "mastercard"],
    },
    question: { fi: "Mitä maksutapoja hyväksytte?", en: "What payment methods do you accept?" },
    answer: {
      fi: "Hyväksymme seuraavat maksutavat:\n\n• Pankkikortti\n• Visa Electron\n• Visa\n• Mastercard\n• Käteinen",
      en: "We accept the following payment methods:\n\n• Debit card\n• Visa Electron\n• Visa\n• Mastercard\n• Cash",
    },
    quickReplies: ["price-basic", "booking"],
  },

  // --- CORPORATE ---
  {
    id: "corporate",
    category: "corporate",
    keywords: {
      fi: ["yritys", "yritysasiakas", "korjaamo", "taksi", "kuljetus", "sopimus"],
      en: ["business", "corporate", "company", "fleet", "taxi", "transport", "contract"],
    },
    question: { fi: "Tarjoatteko yrityspalveluja?", en: "Do you offer business services?" },
    answer: {
      fi: "Kyllä! Tarjoamme räätälöityjä palveluja yrityksille:\n\n• Autokorjaamot, taksi- ja kuljetusyritykset\n• Joustavat hinnat ja aikataulut\n• Mahdollisuus koostaa sopivat paketit\n\nOta yhteyttä niin kerromme lisää!",
      en: "Yes! We offer tailored services for businesses:\n\n• Auto repair shops, taxi and transport companies\n• Flexible pricing and schedules\n• Customizable service packages\n\nGet in touch and we'll tell you more!",
    },
    quickReplies: ["contact-phone", "contact-email"],
    link: { url: "/yrityksille", label: { fi: "Lue lisää", en: "Read more" } },
  },
];

// --- KEYWORD MATCHING ENGINE ---

const FINNISH_SUFFIXES = [
  "ssa", "ssä", "sta", "stä", "lle", "lta", "ltä",
  "een", "ään", "aan", "iin", "lla", "llä",
  "ksi", "tta", "ttä", "na", "nä",
  "n", "t", "a", "ä",
];

function stemFinnish(word: string): string {
  const lower = word.toLowerCase();
  for (const suffix of FINNISH_SUFFIXES) {
    if (lower.length > suffix.length + 2 && lower.endsWith(suffix)) {
      return lower.slice(0, -suffix.length);
    }
  }
  return lower;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[äå]/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

export function findBestMatch(
  input: string,
  locale: string
): ChatFAQ | null {
  const lang = locale === "fi" ? "fi" : "en";
  const normalizedInput = normalize(input);
  const inputWords = normalizedInput.split(/\s+/).filter(Boolean);
  const stemmedInput = inputWords.map(stemFinnish);

  let bestScore = 0;
  let bestMatch: ChatFAQ | null = null;

  for (const faq of FAQ_DATA) {
    let score = 0;
    const keywords = faq.keywords[lang];

    for (const keyword of keywords) {
      const normalizedKeyword = normalize(keyword);
      const keywordParts = normalizedKeyword.split(/\s+/);

      // Exact phrase match (highest weight)
      if (normalizedInput.includes(normalizedKeyword)) {
        score += 3 * keywordParts.length;
        continue;
      }

      // Individual word matching
      for (const kw of keywordParts) {
        const stemmedKw = stemFinnish(kw);
        for (const sw of stemmedInput) {
          if (sw === kw || sw === stemmedKw) {
            score += 2;
          } else if (sw.includes(stemmedKw) || stemmedKw.includes(sw)) {
            score += 1;
          }
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  }

  // Require a minimum score threshold
  return bestScore >= 2 ? bestMatch : null;
}
