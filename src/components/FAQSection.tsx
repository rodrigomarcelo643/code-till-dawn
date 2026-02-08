import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can we use pre-existing code?",
    answer: "No. Projects must be built entirely within the hackathon timeframe. Plagiarism or modifying existing projects without disclosure is unethical.",
  },
  {
    question: "How many people can present our final pitch?",
    answer: "You must assign a minimum of 1 and a maximum of 2 presenters for the final demonstration.",
  },
  {
    question: "Are there language restrictions for coding?",
    answer: "None! You can use any programming language, framework, or external library.",
  },
  {
    question: "Is AI allowed?",
    answer: "Yes, but with limits. AI-generated code must not constitute the majority of your project.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.3em] text-primary mb-3">GOT QUESTIONS?</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            FAQ
          </h2>
          <div className="w-16 h-px bg-primary/50 mx-auto mt-6" />
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card hover:border-primary/20 transition-colors data-[state=open]:border-primary/30 data-[state=open]:box-glow"
            >
              <AccordionTrigger className="font-display text-sm font-medium text-foreground hover:text-primary hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
