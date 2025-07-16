"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LeafyGreen, MessageCircle } from "lucide-react"
import { FleetShowcase } from "@/components/sections/fleet-showcase"
import { CostSavingsCalculator } from "@/components/sections/cost-savings-calculator"
import { FAQSection } from "@/components/sections/faq-section"
import { LeaseAndServices } from "@/components/sections/lease-and-services" // New import
import { Car, Zap, Plug, Phone, Mail, MapPin, ShieldCheck, Lightbulb, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bolt } from "lucide-react"
import { Timeline } from "@/components/ui/timeline"
import { AnimatedStats } from "@/components/sections/animated-stats"
import { TrustSection } from "@/components/sections/trust-section"
import { useEffect, useState } from "react"
import AboutSection from "@/components/sections/about"
import ChallengeSolutionSection from "@/components/sections/changelle"

/// --- simple motion helpers --------------------------------
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}
const fadeItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

const heroImages = [
  "/images/byd-qin-l-banner.jpg",
  "/images/byd-qin-l-driving.jpg",
  "/images/lynk-co-900-front.jpg",
  "/images/hero3.jpg",
]

export default function EcoFleetLandingPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % heroImages.length)
    }, 7000) // Change image every 7 seconds
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      {/* Header */}
      <header className="w-full h-16 px-4 lg:px-6 flex items-center justify-between border-border/50 fixed top-0 backdrop-blur-sm z-50">
        <Link href="/" className="flex items-center gap-2">
         <Image
            src="/images/ecologo.png"
            alt="Eco-Fleet Ghana Logo"
            width={340}
            height={140}
            className="h-[9rem] w-[9rem] rounded-full"  
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="hover:text-primary text-sm">
            About
          </Link>
          <Link href="#fleet" className="hover:text-primary text-sm">
            Fleet
          </Link>
          <Link href="#savings" className="hover:text-primary text-sm">
            Savings
          </Link>
          <Button asChild size="sm" className="transition-all duration-300 hover:scale-105">
            <Link href="#cta">Request Demo</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
         <section
        id="hero"
        className="relative w-full h-[90vh] md:h-[95vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-zinc-950 to-zinc-800"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentImageIndex] || "/placeholder.svg"}
              alt="Eco-Fleet Electric Vehicles"
              layout="fill"
              objectFit="cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-10 px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white drop-shadow-lg leading-tight">
              Drive Ghana’s Energy Future with <span className="text-primary">Clean Mobility</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto"
          >
            Pioneering sustainable, high-performance, and cost-efficient electric vehicle solutions for corporate and
            industrial clients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Link href="/EcoFleet_Proposal.pdf" target="_blank" rel="noopener noreferrer">
                Download Proposal
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
        {/* About Eco-Fleet Ghana */}

        <AboutSection/>
      

        {/* Challenge → Solution */}
       <ChallengeSolutionSection/>

        {/* Animated Stats Section */}
        <AnimatedStats />

        {/* Fleet Details Section */}
        <section id="fleet" className="w-full bg-card text-card-foreground">
          <FleetShowcase />
        </section>

        {/* Lease Terms + Services */}
        <LeaseAndServices />

        {/* Charging Infrastructure */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground overflow-hidden  bg-gradient-to-br from-gray-950 to-black">
          <Image
            src="/images/charging.png"
            alt="Charging Infrastructure Background"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="absolute inset-0 z-0 opacity-10"
          />
          <div className="relative z-10 container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeContainer.visible.transition}
              variants={fadeContainer}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Seamless Charging <span className="text-primary">Infrastructure Support</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ensure uninterrupted operations with comprehensive charging solutions, designed for efficiency and
                long-term ROI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeItem}>
                <Card className="bg-gray-800/80 border border-gray-700/60  p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Bolt className="h-6 w-6" /> Fast DC Charging
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Cost:</span> GHS 250,000 per unit (100 kW)
                    </p>
                    <p>Ideal for rapid top-ups and high-utilization vehicles at strategic depots.</p>
                    <p className="text-sm">Recommended: 3 units for key operational hubs.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeItem}>
                <Card className="bg-gray-800/80 border border-gray-700/60 p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Plug className="h-6 w-6" /> AC Charging
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">Cost:</span> GHS 50,000 per unit (22 kW)
                    </p>
                    <p>Perfect for overnight charging, ensuring vehicles are ready for daily operations.</p>
                    <p className="text-sm">Recommended: 10 units for comprehensive overnight charging.</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeItem}>
                <Card className="bg-gray-800/80 border border-gray-700/60  p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Lightbulb className="h-6 w-6" /> Optional Solar-Powered Add-on
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-3 text-muted-foreground">
                    <p>
                      Integrate hybrid solar-grid chargers to further reduce electricity costs by up to{" "}
                      <span className="font-semibold text-foreground">30%</span>.
                    </p>
                    <p>
                      Achieve payback on your investment within an estimated{" "}
                      <span className="font-semibold text-foreground">3–4 years</span>, maximizing long-term ROI and
                      sustainability.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cost Savings Calculator */}
        <section id="savings" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground  bg-gradient-to-br from-gray-950 to-black">
          <CostSavingsCalculator />
        </section>

        {/* Implementation Timeline */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-card text-card-foreground bg-gradient-to-br from-gray-950 to-black">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeContainer.visible.transition}
              variants={fadeContainer}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Our Seamless <span className="text-primary">Implementation Timeline</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A clear roadmap from contract signing to full operational readiness, ensuring a smooth transition for
                BOST.
              </p>
            </motion.div>

            <Timeline />
          </div>
        </section>

    

        {/* Optional Sections: FAQ */}
        <FAQSection />

        {/* Call to Action (CTA) */}
        <section
          id="cta"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-background text-foreground"
        >
          <div className="container px-4 md:px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeContainer.visible.transition}
              variants={fadeContainer}
              className="space-y-6"
            >
              <motion.h2
                variants={fadeItem}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary"
              >
                Ready to Transform Your Fleet?
              </motion.h2>
              <motion.p variants={fadeItem} className="mx-auto max-w-[800px] text-lg md:text-xl text-muted-foreground">
                Q3 2025 Slots Available – Secure your partnership with Eco-Fleet Ghana and drive towards a sustainable,
                cost-efficient future.
              </motion.p>
              <motion.div variants={fadeItem} className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button
                  asChild
                  className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Link href="#contact">Schedule Presentation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-8 text-lg border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/EcoFleet_Proposal.pdf" target="_blank" rel="noopener noreferrer">
                    Download Full Proposal
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-8 text-lg border-2 border-green-500 text-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link
                    href="https://wa.me/233551562590"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" /> WhatsApp Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={fadeContainer.visible.transition}
              variants={fadeContainer}
              className="flex flex-col items-center justify-center space-y-6 text-center mb-12"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Get in Touch with <span className="text-primary">Eco-Fleet Ghana</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We look forward to discussing your fleet transformation in detail.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div variants={fadeItem} className="space-y-6">
                <Card className="bg-card border-border p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <MapPin className="h-6 w-6" /> Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>63, Olympic Street, Kokomlelmle, Accra, Ghana</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Phone className="h-6 w-6" /> Call Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>+233 55 156 2590</p>
                    <p>+233 200 429 111</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border-border p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                      <Mail className="h-6 w-6" /> Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>info@ecofleetghana.com (placeholder)</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeItem}>
                <Card className="bg-card border-border p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-primary">Schedule Your Presentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-muted-foreground">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          className="mt-1 bg-secondary border-border text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-muted-foreground">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="BOST"
                          className="mt-1 bg-secondary border-border text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-muted-foreground">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john.doe@bost.com"
                          className="mt-1 bg-secondary border-border text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-muted-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+233 24 123 4567"
                          className="mt-1 bg-secondary border-border text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-muted-foreground">
                          Your Message (Optional)
                        </Label>
                        <textarea
                          id="message"
                          rows={4}
                          className="flex w-full rounded-md border border-input bg-secondary px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 text-foreground"
                          placeholder="Tell us about your fleet needs..."
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Submit Request
                      </Button>
                    </form>
                    <p className="text-xs text-muted-foreground mt-4">
                      Your information will be used to schedule a presentation and will not be shared with third
                      parties.
                      <br />
                      <span className="font-semibold text-foreground">Note:</span> In a real application, this form
                      would integrate with a CRM (e.g., HubSpot, Webhook).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-border/50 bg-card text-card-foreground">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Eco-Fleet Ghana. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-muted-foreground">
            Sitemap
          </Link>
        </nav>
      </footer>
    </div>
  )
}
