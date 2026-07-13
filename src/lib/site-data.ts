import { Baby, BriefcaseMedical, HandHeart, HeartPulse, Home, MessageCircleHeart, ShieldCheck, Stethoscope } from "lucide-react";

export const site = {
  name: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH",
  shortName: "Maria Schnee",
  address: "Berliner Straße 33a, 84478 Waldkraiburg",
  street: "Berliner Straße 33a",
  postalCode: "84478",
  city: "Waldkraiburg",
  phoneDisplay: "08638 868 45 60",
  phone: "+4986388684560",
  standbyDisplay: "0174 271 40 73",
  standby: "+491742714073",
  email: "verwaltung@maria-schnee.de",
  url: "https://pflegedienst-mariaschnee.de",
  founded: "2017",
  director: "Amela Katava",
};

export const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Karriere", href: "/karriere" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const services = [
  { title: "Ambulante Pflege", description: "Individuelle Unterstützung im vertrauten Zuhause – medizinisch, pflegerisch und alltagsnah.", href: "/ambulante-pflege", icon: Home, tone: "blue" },
  { title: "Intensivpflege", description: "Außerklinische Intensivversorgung mit strukturierter Tagesplanung und enger medizinischer Abstimmung.", href: "/intensivpflege", icon: HeartPulse, tone: "pink" },
  { title: "Kinderintensivpflege", description: "Familienzentrierte Versorgung von Kindern und Jugendlichen – zuhause, in Kita, Schule oder Universität.", href: "/kinderintensivpflege", icon: Baby, tone: "blue" },
  { title: "Erwachsenenpflege", description: "Fachlich anspruchsvolle 1:1-Versorgung für ein möglichst selbstbestimmtes Leben in vertrauter Umgebung.", href: "/erwachsenenpflege", icon: Stethoscope, tone: "pink" },
  { title: "24-Stunden-Betreuung", description: "Bedarfsgerechte Versorgung bis zu 24 Stunden täglich und sieben Tage in der Woche.", href: "/24-stunden-betreuung", icon: ShieldCheck, tone: "blue" },
  { title: "Pflegeberatung", description: "Orientierung, Bedarfsermittlung und Unterstützung bei der Organisation passender Pflegeleistungen.", href: "/pflegeberatung", icon: MessageCircleHeart, tone: "pink" },
];

export const faqs = [
  { question: "Wie beginnt eine Versorgung durch Maria Schnee?", answer: "Am Anfang steht ein unverbindliches persönliches Gespräch. Gemeinsam erfassen wir die individuelle Situation, den Pflegebedarf und die Wünsche der betroffenen Person sowie ihrer Angehörigen. Darauf aufbauend entsteht ein passendes Versorgungskonzept." },
  { question: "Ist eine Versorgung rund um die Uhr möglich?", answer: "Ja. Bei entsprechender medizinischer Notwendigkeit bietet Maria Schnee eine flexible Eins-zu-eins-Versorgung in häuslicher Umgebung bis zu 24 Stunden täglich und sieben Tage in der Woche an." },
  { question: "Übernimmt der Pflegedienst die Abstimmung mit Ärzten und Kliniken?", answer: "Ja. Die Pflege wird eng mit behandelnden Fachärzten, Hausärzten, Kliniken, Therapeuten und weiteren Beteiligten abgestimmt. Auf Wunsch begleitet das Team auch die Überleitung aus dem Krankenhaus nach Hause." },
  { question: "Werden Angehörige in die Pflege einbezogen?", answer: "Maria Schnee arbeitet familienzentriert. Angehörige werden auf Wunsch informiert, angeleitet und aktiv einbezogen. Im Rahmen einer Rückzugspflege kann die Familie schrittweise auf die Übernahme einzelner Tätigkeiten vorbereitet werden." },
  { question: "In welchem Gebiet ist Maria Schnee tätig?", answer: "Der Pflegedienst ist in Waldkraiburg und nach eigener Angabe in einem Radius von bis zu 150 Kilometern tätig. Ob eine Versorgung an Ihrem Wohnort möglich ist, klärt das Team gerne direkt mit Ihnen." },
  { question: "Bietet Maria Schnee Pflegeberatung nach § 37 Abs. 3 SGB XI an?", answer: "Ja. Beratungsbesuche für Pflegenachweise nach § 37 Abs. 3 SGB XI werden laut Unternehmen angeboten und sind für die versicherte Person kostenfrei." },
];

export const trustPoints = [
  { title: "Fachliche Sicherheit", text: "Kontinuierliche Schulungen und ein sicherer Umgang mit anspruchsvoller Behandlungspflege.", icon: ShieldCheck },
  { title: "Familienzentriert", text: "Angehörige werden so einbezogen, wie es zur individuellen Lebenssituation passt.", icon: HandHeart },
  { title: "Persönlich geplant", text: "Pflegeziele, Tagesstruktur und Einsatzzeiten entstehen gemeinsam und transparent.", icon: BriefcaseMedical },
];
