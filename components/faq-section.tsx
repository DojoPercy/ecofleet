"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What lease durations do you offer?",
    a: "Eco-Fleet provides flexible 3–5-year leases, customisable for BOST.",
  },
  {
    q: "Is maintenance included?",
    a: "Yes – full maintenance, battery monitoring and repairs are bundled into the monthly payment.",
  },
  {
    q: "Which end-of-lease options are available?",
    a: "Purchase at residual value, upgrade to new EV models, or simply return the vehicles.",
  },
  {
    q: "Do you train our drivers?",
    a: "Comprehensive EV driver-training programmes are included to maximise efficiency and safety.",
  },
  {
    q: "Can you install chargers for us?",
    a: "We handle installation and servicing of both DC fast-chargers and overnight AC units, with optional solar add-ons.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FAQSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Everything you need to know about our EV leasing solution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible>
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
