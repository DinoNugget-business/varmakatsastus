import { CONTACT, WEBSITE_URL } from "./constants";

export type ChatFAQ = {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
  quickReplies?: string[];
  link?: { url: string; label: string };
};

export type ChatCategory = {
  id: string;
  label: string;
  icon: string;
  faqId: string;
};

export const CHAT_CATEGORIES: ChatCategory[] = [
  { id: "pricing", label: "Hinnat", icon: "Tag", faqId: "price-tire-change" },
  { id: "hours", label: "Aukioloajat", icon: "Clock", faqId: "hours" },
  { id: "location", label: "Sijainti", icon: "MapPin", faqId: "location" },
  { id: "tires", label: "Renkaat", icon: "Circle", faqId: "tires-types" },
  { id: "maintenance", label: "Autohuolto", icon: "Wrench", faqId: "maintenance-packages" },
  { id: "rims", label: "Vanteet", icon: "CircleDot", faqId: "rims" },
  { id: "contact", label: "Yhteystiedot", icon: "Phone", faqId: "contact" },
];

export const FAQ_DATA: ChatFAQ[] = [
  // --- PRICING: TIRE CHANGE ---
  {
    id: "price-tire-change",
    category: "pricing",
    keywords: [
      "hinta", "maksaa", "paljonko", "renkaanvaihto", "allevaihto",
      "vaihto", "asennus", "rengas hinta", "halpa", "edullinen",
    ],
    question: "Paljonko renkaanvaihto maksaa?",
    answer: `Renkaiden allevaihto (4 rengasta):\n\n• **Henkilöauto:** 45 €\n• **Sähköauto (täysakku):** 50 €\n• **SUV tai pakettiauto:** 55 €\n• **Erikoisajoneuvot (matkailuauto yms.):** 65 €\n\nTPMS-ohjelmointi ilman renkaanvaihtoa alk. 20 €.\n\nHinnat sis. ALV.`,
    quickReplies: ["price-balancing", "price-alignment", "contact"],
    link: { url: `${WEBSITE_URL}/tyohinnasto`, label: "Katso koko työhinnasto" },
  },

  // --- PRICING: BALANCING ---
  {
    id: "price-balancing",
    category: "pricing",
    keywords: [
      "tasapainotus", "tasapainottaa", "valinainen", "irtorengas",
      "balanssi", "tarina", "roadforce",
    ],
    question: "Paljonko tasapainotus maksaa?",
    answer: `Irtorenkaiden tasapainotus (4 kpl):\n\n• **13"-16":** 30 €\n• **17"-19":** 35 €\n• **20"-21":** 40 €\n• **22"+ SUV/4x4:** 50 €\n\nAuton alla tasapainotus (sis. asennus + konepesu):\n\n• **12"-18":** 75 €\n• **19"-21":** 80 € (+10 € SUV/pakettiauto)\n• **22" 4x4/SUV:** 100 €`,
    quickReplies: ["price-roadforce", "price-tire-change", "contact"],
    link: { url: `${WEBSITE_URL}/tyohinnasto`, label: "Katso koko työhinnasto" },
  },

  // --- PRICING: ROADFORCE ---
  {
    id: "price-roadforce",
    category: "pricing",
    keywords: [
      "roadforce", "road force", "tarina", "erikoistasapainotus",
    ],
    question: "Paljonko RoadForce-tasapainotus maksaa?",
    answer: `RoadForce-tasapainotus:\n\n**Ilman suuntausta:**\n• 13"-18": **90 €** (19" +10 €, 20"+ +20 €)\n\n**Suuntauksen kanssa:**\n• 13"-18": **140 €** (19" +20 €, 20" +35 €, 21"-23" +50 €)\n• Run-Flat lisä: +50 €`,
    quickReplies: ["price-alignment", "price-balancing", "contact"],
  },

  // --- PRICING: ALIGNMENT ---
  {
    id: "price-alignment",
    category: "pricing",
    keywords: [
      "suuntaus", "nelipyorasuuntaus", "nelipyora", "ohjauskulma",
      "kulmat", "suuntaukset", "alignment",
    ],
    question: "Paljonko nelipyöräsuuntaus maksaa?",
    answer: `Nelipyöräsuuntaus (Suomalaistentie 5):\n\n• **Etuakselin säätö:** alk. 40 €\n• **Diagnostiikka + etuakselin säätö:** 80 €\n• **Taka-akselin säätö:** alk. 40 €\n• **Koko auto (etu + taka):** 120 €\n• **Muutoskatsastuslausunto:** 10 €\n• **Ylityö (jumittuneet pultit yms.):** 65 €/h\n\nOhjauskulmat kannattaa tarkistaa vähintään kerran vuodessa!`,
    quickReplies: ["price-tire-change", "tires-depth", "contact"],
  },

  // --- PRICING: RIM INSTALLATION ---
  {
    id: "price-rim-install",
    category: "pricing",
    keywords: [
      "vanteen asennus", "vanne asennus", "vannetyot", "vannetyö",
      "uudet vanteet", "vanteiden asennus",
    ],
    question: "Paljonko vanteen asennus maksaa?",
    answer: `Vanteen asennus + tasapainotus (4 kpl):\n\n| Koko | Kokoonpano | + Asennus autoon |\n|---|---|---|\n| 13"-16" | 70 € | 100 € |\n| 17"-18" | 80 € | 110 € |\n| 19" | 90 € | 120 € |\n| 20"-21" | 110 € | 140 € |\n| 22"-24" | 160 € | 190 € |\n\nLisät: ulkoa ostetut renkaat +20 €, raskaat/SUV +15 €, sähköauto +10 €.`,
    quickReplies: ["rims", "price-balancing", "contact"],
  },

  // --- PRICING: TIRE REPAIR ---
  {
    id: "price-repair",
    category: "pricing",
    keywords: [
      "paikkaus", "renkaan korjaus", "puhjennut", "renga rikki",
      "paikka", "minicombi", "korjaus rengas",
    ],
    question: "Paljonko renkaan paikkaus maksaa?",
    answer: `Renkaan paikkaus:\n\n• **Pikapaikkaus (tubeless):** 37,50 €/rengas\n• **Minicombi-paikkaus:** 50 €/rengas (sis. irrotus, asennus, tasapainotus)\n• **Paikkausmassan puhdistus:** 20 €/rengas`,
    quickReplies: ["price-tire-change", "tires-types", "contact"],
  },

  // --- PRICING: MAINTENANCE ---
  {
    id: "price-maintenance",
    category: "pricing",
    keywords: [
      "huolto hinta", "vuosihuolto", "huoltopaketti", "premium",
      "huollon hinta", "autohuolto hinta",
    ],
    question: "Mitä huoltopaketit maksavat?",
    answer: `BestDrive-huoltopaketit (Martinsillantie 10):\n\n• **BestDrive Vuosihuolto:** 199 €\n• **BestDrive Premium:** 249 €\n• **BestDrive Van (pakettiauto):** 229 €\n• **Sähköautohuolto:** 49 €\n\nMuut huoltotoimet:\n• Öljynvaihtohuolto: alk. 99 €\n• Jarrunesteen vaihto: 75 €`,
    quickReplies: ["price-oil", "price-ac", "maintenance-ev"],
    link: { url: `${WEBSITE_URL}/shop/category/autohuolto-huolto-ohjelmat-47`, label: "Katso huoltopaketit" },
  },

  // --- PRICING: OIL ---
  {
    id: "price-oil",
    category: "pricing",
    keywords: [
      "oljynvaihto", "oljy", "oljynvaihtohuolto", "moottorioljy",
    ],
    question: "Paljonko öljynvaihto maksaa?",
    answer: `Öljynvaihtohuolto alk. **99 €**.\n\nHuolto suoritetaan osoitteessa Martinsillantie 10, Espoo.\n\nVaraa aika soittamalla ${CONTACT.phone} (valitse 2).`,
    quickReplies: ["price-maintenance", "price-ac", "contact"],
  },

  // --- PRICING: AC ---
  {
    id: "price-ac",
    category: "pricing",
    keywords: [
      "ilmastointi", "ilmastoinnin taytto", "ac", "kylma", "r134",
      "r1234", "ilmastointihuolto",
    ],
    question: "Paljonko ilmastointihuolto maksaa?",
    answer: `Ilmastoinnin täyttöhuolto:\n\n• **R134A (100g):** 79 €\n• **R1234YF (100g):** 149 €\n\nHuolto suoritetaan Martinsillantie 10:ssä.`,
    quickReplies: ["price-maintenance", "price-diagnostics", "contact"],
  },

  // --- PRICING: DIAGNOSTICS ---
  {
    id: "price-diagnostics",
    category: "pricing",
    keywords: [
      "diagnostiikka", "vikakoodi", "vikakoodit", "obd", "vianmaaritys",
      "vikadiagnoosi", "vikavalot",
    ],
    question: "Paljonko diagnostiikka/vikakoodien luku maksaa?",
    answer: `Diagnostiikkapalvelut:\n\n• **Vikakoodien luku (OBD):** 39 €\n• **Vikadiagnoosi-paketti:** 99 €\n\nVaraa aika soittamalla ${CONTACT.phone} (valitse 2).`,
    quickReplies: ["price-maintenance", "maintenance-carcheck", "contact"],
  },

  // --- HOURS ---
  {
    id: "hours",
    category: "hours",
    keywords: [
      "aukiolo", "auki", "avoinna", "milloin", "kellonaika", "aika",
      "aukioloaika", "suljettu", "kiinni",
    ],
    question: "Milloin olette auki?",
    answer: `Aukioloajat:\n\n• **Ma-Pe:** 08:30 - 17:00\n• **Lauantai:** Suljettu\n• **Sunnuntai:** Suljettu\n\nMolemmat toimipisteet (Suomalaistentie 5 ja Martinsillantie 10) noudattavat samoja aukioloaikoja.`,
    quickReplies: ["location", "contact"],
  },

  // --- LOCATION ---
  {
    id: "location",
    category: "location",
    keywords: [
      "sijainti", "osoite", "missa", "paikka", "espoo", "kartta",
      "toimipiste", "liike", "tulla",
    ],
    question: "Missä olette?",
    answer: `Meillä on **kaksi toimipistettä** Espoossa:\n\n**Rengas- ja vannemyynti:**\n📍 Suomalaistentie 5, 02270 Espoo\n\n**Rengashotelli ja autohuolto:**\n📍 Martinsillantie 10, 02270 Espoo`,
    quickReplies: ["hours", "contact"],
  },

  // --- LOCATION DETAILS ---
  {
    id: "location-details",
    category: "location",
    keywords: [
      "suomalaistentie", "martinsillantie", "myymala", "huolto sijainti",
      "minne tuoda", "kumpi",
    ],
    question: "Mitä palveluja kummassakin toimipisteessä?",
    answer: `**Suomalaistentie 5** — Rengas- ja vannemyynti:\n• Rengasmyynti, vannemyynti, tarvikkeet\n• Nelipyöräsuuntaus\n• Renkaanvaihto ja tasapainotus\n\n**Martinsillantie 10** — Huolto ja säilytys:\n• Rengashotelli (kausirenkaiden säilytys)\n• Autohuoltopalvelut\n• Öljynvaihto, ilmastointihuolto, diagnostiikka`,
    quickReplies: ["hours", "price-tire-change", "contact"],
  },

  // --- TIRES: TYPES ---
  {
    id: "tires-types",
    category: "tires",
    keywords: [
      "rengas", "renkaat", "kesarengas", "talvirengas", "nastarengas",
      "kitkarengas", "moottoripyora", "monkija", "merkki",
      "continental", "gislaved", "matador",
    ],
    question: "Mitä renkaita myytte?",
    answer: `Myymme laajan valikoiman renkaita:\n\n• **Kesärenkaat**\n• **Nastarenkaat** (talvi)\n• **Kitkarenkaat** (talvi)\n• **Moottoripyörärenkaat**\n• **Mönkijärenkaat**\n\nPäämerkit: **Continental**, **Gislaved**, **Matador** ja muut.\n\nVoit selata valikoimaa verkkokaupastamme tai tulla myymälään!`,
    quickReplies: ["tires-depth", "tires-seasonal", "price-tire-change"],
    link: { url: `${WEBSITE_URL}/shop`, label: "Selaa renkaita verkkokaupassa" },
  },

  // --- TIRES: TREAD DEPTH ---
  {
    id: "tires-depth",
    category: "tires",
    keywords: [
      "urasyvyys", "kuluminen", "kulunut", "minimi", "laillinen",
      "millimetri", "mm", "katsastus rengas",
    ],
    question: "Mikä on renkaan minimiurasyvyys?",
    answer: `Renkaan urasyvyyden lakisääteiset minimit:\n\n• **Kesärenkaat:** 1,6 mm\n• **Talvirenkaat:** 3,0 mm\n\n**Suositus:** Vaihda kesärenkaat viimeistään 4 mm:n urasyvyydellä turvallisuuden vuoksi. Talvirenkaissa 4-5 mm on hyvä raja.\n\nTutustu aiheeseen tarkemmin blogissamme!`,
    quickReplies: ["tires-seasonal", "tires-types", "price-tire-change"],
  },

  // --- TIRES: SEASONAL ---
  {
    id: "tires-seasonal",
    category: "tires",
    keywords: [
      "milloin vaihtaa", "kausi", "kausirenkaat", "kevat", "syksy",
      "talvirenkaat paalle", "kesarenkaat paalle",
    ],
    question: "Milloin renkaat pitää vaihtaa?",
    answer: `Renkaiden kausivaihto:\n\n**Talvirenkaat päälle:**\n• Lokakuun loppu – marraskuun alku\n• Kun yölämpötilat laskevat alle +5°C\n\n**Kesärenkaat päälle:**\n• Huhtikuun loppu – toukokuun alku (pääsiäisen jälkeen)\n• Nastarenkaat saa pitää 31.3. asti (poikkeuksia keliolosuhteiden mukaan)\n\nVaraa renkaanvaihto ajoissa — sesonkiaikoina on ruuhkaa!`,
    quickReplies: ["price-tire-change", "tire-hotel", "contact"],
  },

  // --- RIMS ---
  {
    id: "rims",
    category: "rims",
    keywords: [
      "vanne", "vanteet", "alumiini", "teras", "peltivanne",
      "alumiinivanne", "tilausvanne", "oz", "japan racing", "jr",
    ],
    question: "Myytkö vanteita?",
    answer: `Kyllä! Valikoimassamme:\n\n• **Alumiinivanteet** — laaja mallisto\n• **Teräsvanteet** — kaikki koot\n• **Tilausvanteet** — OZ Racing, Sparco, MSW, JR Wheels (Japan Racing)\n\nTilausvanteiden toimitusaika noin 1 viikko – 1 kuukausi.\n\nMyymälä: Suomalaistentie 5, Espoo.`,
    quickReplies: ["rims-repair", "price-rim-install", "contact"],
    link: { url: `${WEBSITE_URL}/shop/category/vanteet-14`, label: "Selaa vanteita" },
  },

  // --- RIMS: REPAIR ---
  {
    id: "rims-repair",
    category: "rims",
    keywords: [
      "vanteen korjaus", "suoristus", "maalaus", "timanttileikkaus",
      "vannevelho", "kolhu", "vaurioitunut",
    ],
    question: "Korjaatteko vanteita?",
    answer: `Teemme yhteistyötä **Vannevelhon** kanssa vannekorjauksissa:\n\n• Vanteen suoristus (tärinä, ilmanpaineen lasku)\n• Kolhuvaurioiden korjaus\n• Jauhemaalaus\n• Timanttileikkaus\n• Hapettumisen poisto\n\nMe hoidamme rengastyöt, Vannevelho korjaa vanteen.\nPakkaus/käsittelymaksu 10 €.\n\nKysy lisää myymälästä!`,
    quickReplies: ["rims", "price-rim-install", "contact"],
  },

  // --- TIRE HOTEL ---
  {
    id: "tire-hotel",
    category: "tires",
    keywords: [
      "rengashotelli", "sailytys", "kausisailytys", "hotelli",
      "rengassailytys", "varasto",
    ],
    question: "Onko teillä rengashotellipalvelua?",
    answer: `Rengashotellimme sijaitsee Martinsillantie 10:ssä.\n\n**Palvelu sisältää:**\n• Renkaiden pesu\n• Kunnon tarkastus\n• Ilmanpaineiden tarkistus\n• Säilytys kuivassa ja valvotussa tilassa\n• Vakuutus\n\n⚠️ **Huom:** Rengashotellipalvelu on toistaiseksi **loppuunmyyty**. Kysy vapautuvista paikoista soittamalla ${CONTACT.phone}.`,
    quickReplies: ["price-tire-change", "tires-seasonal", "contact"],
  },

  // --- MAINTENANCE: PACKAGES ---
  {
    id: "maintenance-packages",
    category: "maintenance",
    keywords: [
      "huolto", "autohuolto", "vuosihuolto", "huoltopalvelu",
      "huoltotoimet", "jarruneste",
    ],
    question: "Mitä autohuoltopalveluja tarjoatte?",
    answer: `Autohuolto (Martinsillantie 10):\n\n**Huoltopaketit:**\n• BestDrive Vuosihuolto: **199 €**\n• BestDrive Premium: **249 €**\n• BestDrive Van: **229 €**\n• Sähköautohuolto: **49 €**\n\n**Yksittäiset palvelut:**\n• Öljynvaihto: alk. 99 €\n• Jarrunesteen vaihto: 75 €\n• Ilmastoinnin täyttö: 79-149 €\n• Vikakoodien luku: 39 €\n\nVaraa aika: ${CONTACT.phone} (valitse 2).`,
    quickReplies: ["maintenance-ev", "maintenance-carcheck", "price-diagnostics"],
  },

  // --- MAINTENANCE: EV ---
  {
    id: "maintenance-ev",
    category: "maintenance",
    keywords: [
      "sahkoauto", "sahko", "hybridi", "ev", "tesla", "sahkoautohuolto",
    ],
    question: "Huollatteko sähkö- ja hybridiautoja?",
    answer: `Kyllä! Tarjoamme erikoistuneita huoltopalveluja sähkö- ja hybridiautoille.\n\n• **BestDrive Sähköautohuolto:** 49 €\n• Sähkötyöturvallisuuden erityisosaaminen\n• Hybridiautot: molempien voimanlähteiden huolto\n\nSähköautojen huoltotarve on usein vähäisempi, mutta säännöllinen tarkastus on silti tärkeää.\n\nVaraa aika: ${CONTACT.phone} (valitse 2).`,
    quickReplies: ["maintenance-packages", "price-tire-change", "contact"],
  },

  // --- MAINTENANCE: CAR CHECK ---
  {
    id: "maintenance-carcheck",
    category: "maintenance",
    keywords: [
      "car check", "tarkastus", "ilmainen tarkastus", "ilmainen",
      "kuntotarkastus", "12 kohtaa",
    ],
    question: "Mikä on ilmainen Car Check?",
    answer: `**Ilmainen Car Check** — 12 kohdan ajoneuvon tarkistus huollon yhteydessä.\n\n• Tarkistaa turvallisuus- ja mukavuuskomponenttien kulumisen\n• Saat halutessasi kirjallisen raportin\n• Sesonkiaikana tarjolla kevennetty 5 kohdan Car Check Light\n\nCar Check on maksuton kaikkien huoltotoimenpiteiden yhteydessä!`,
    quickReplies: ["maintenance-packages", "price-diagnostics", "contact"],
  },

  // --- FINANCING ---
  {
    id: "financing",
    category: "pricing",
    keywords: [
      "rahoitus", "bestdrive tili", "maksuaika", "osamaksu",
      "leasing", "luotto", "maksaa myohemmin",
    ],
    question: "Onko teillä rahoitusvaihtoehtoja?",
    answer: `**BestDrive Tili** — osta nyt, maksa myöhemmin:\n\n• **30-60 päivää:** 0 % korko\n• **12 kuukautta:** 0 % korko (kuukausimaksu 5,60 €)\n• **24 kuukautta:** 12,9 % korko\n• Ei avausmaksua, ei korttia, ei piilokuluja\n\n**BestDrive Leasing** — leasing-autoille:\n• Yhteistyö: Secto, Ayvens, Wurth, JärviLeasing\n• Hoidamme kaiken yhteydenpidon leasing-yhtiöön\n\nHae BestDrive Tiliä verkossa, tekstiviestillä tai myymälässä!`,
    quickReplies: ["price-tire-change", "rims", "contact"],
    link: { url: `${WEBSITE_URL}/rahoitus`, label: "Lue lisää rahoituksesta" },
  },

  // --- CONTACT ---
  {
    id: "contact",
    category: "contact",
    keywords: [
      "puhelin", "numero", "soittaa", "yhteystieto", "sahkoposti",
      "email", "ota yhteytta",
    ],
    question: "Miten otan yhteyttä?",
    answer: `Yhteystietomme:\n\n📞 **Puhelin:** ${CONTACT.phone}\n✉️ **Sähköposti:** ${CONTACT.email}\n\n**Huoltovaraukset:** Soita ${CONTACT.phone} ja valitse 2.\n\n**Toimipisteet:**\n• Suomalaistentie 5 (myynti)\n• Martinsillantie 10 (huolto)`,
    quickReplies: ["hours", "location"],
  },

  // --- COMPANY ---
  {
    id: "company",
    category: "contact",
    keywords: [
      "yritys", "tekno-rengas", "bestdrive", "historia", "perustettu",
      "kuka", "mika", "continental",
    ],
    question: "Kerro Tekno-Renkaasta",
    answer: `**Tekno-Rengas Oy** — rengasalan asiantuntija vuodesta 1989.\n\n• Y-tunnus: 0772814-1\n• Osa kansainvälistä **BestDrive**-ketjua (Continental)\n• Noin 25-30 itsenäistä BestDrive-yritystä Suomessa\n• Palvelemme sekä yksityis- että yritysasiakkaita\n• Kaksi toimipistettä Espoossa\n\nAiemmin Rengasmarket — nyt BestDrive Tekno-Rengas.`,
    quickReplies: ["contact", "location", "hours"],
  },

  // --- PAYMENT ---
  {
    id: "payment",
    category: "pricing",
    keywords: [
      "maksu", "maksutapa", "kortti", "kateinen", "maksaminen",
    ],
    question: "Mitä maksutapoja hyväksytte?",
    answer: `Hyväksymme yleiset maksutavat:\n\n• Pankkikortit (debit/credit)\n• Visa, Mastercard\n• Käteinen\n• **BestDrive Tili** (rahoitus)\n• **BestDrive Leasing** (leasing-asiakkaat)`,
    quickReplies: ["financing", "price-tire-change", "contact"],
  },

  // --- DELIVERY ---
  {
    id: "delivery",
    category: "contact",
    keywords: [
      "toimitus", "nouto", "tilaus", "verkkokauppa", "tilata",
      "toimitusaika",
    ],
    question: "Miten tilaus ja toimitus toimii?",
    answer: `Tuotteet voi tilata verkkokaupassamme ja noutaa toimipisteestä:\n\n• **Toimitusaika:** noin 3 arkipäivää\n• **Noutopisteet:** Suomalaistentie 5 tai Martinsillantie 10\n• Tilausvanteiden toimitusaika 1 vko – 1 kk\n\nTuotteet voi myös ostaa suoraan myymälästä.`,
    quickReplies: ["rims", "tires-types", "contact"],
    link: { url: `${WEBSITE_URL}/shop`, label: "Verkkokauppaan" },
  },

  // --- MOTORCYCLE ---
  {
    id: "motorcycle",
    category: "tires",
    keywords: [
      "moottoripyora", "mp", "mopo", "motocross", "mp rengas",
    ],
    question: "Teettekö moottoripyörärengastöitä?",
    answer: `Kyllä! Moottoripyörärengaspalvelut:\n\n• **Tubeless-renkaan asennus:** 20 €\n• **Tube-renkaan asennus:** 30 €\n• **Tasapainotus:** +10 €\n\nMyymme myös moottoripyörä- ja mönkijärenkaita.`,
    quickReplies: ["tires-types", "price-tire-change", "contact"],
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

export function findBestMatch(input: string): ChatFAQ | null {
  const normalizedInput = normalize(input);
  const inputWords = normalizedInput.split(/\s+/).filter(Boolean);
  const stemmedInput = inputWords.map(stemFinnish);

  let bestScore = 0;
  let bestMatch: ChatFAQ | null = null;

  for (const faq of FAQ_DATA) {
    let score = 0;
    const keywords = faq.keywords;

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

  return bestScore >= 2 ? bestMatch : null;
}
