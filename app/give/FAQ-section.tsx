import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQsection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Giving FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            <AccordionItem value="tax-deductible">
              <AccordionTrigger>Is my giving tax-deductible?</AccordionTrigger>
              <AccordionContent>
                Yes, all donations are tax-deductible. You&apos;ll receive an
                annual giving statement for your records.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gift-usage">
              <AccordionTrigger>How is my gift used?</AccordionTrigger>
              <AccordionContent>
                Your gifts support our ministries, community outreach, missions,
                and the operational needs of the church.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="online-security">
              <AccordionTrigger>Is online giving secure?</AccordionTrigger>
              <AccordionContent>
                Yes, we use industry-standard encryption and security measures
                to protect your information.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
