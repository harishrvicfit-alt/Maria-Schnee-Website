import { FAQJsonLd } from "next-seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";

export function FaqList({ limit }: { limit?: number }) {
  const items = faqs.slice(0, limit);
  return <><FAQJsonLd questions={items.map((item) => ({ question: item.question, answer: item.answer }))} /><Accordion type="single" collapsible className="divide-y rounded-3xl border bg-card px-6 shadow-sm sm:px-8">{items.map((item, index) => <AccordionItem key={item.question} value={`frage-${index}`} className="border-0"><AccordionTrigger className="py-6 text-left text-base font-bold hover:no-underline sm:text-lg">{item.question}</AccordionTrigger><AccordionContent className="max-w-3xl pb-6 text-[15px] leading-7 text-muted-foreground">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></>;
}
