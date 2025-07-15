"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export function TrustSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter">
            What Our <span className="text-primary">Partners Say</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Hear from businesses that have transformed their operations with Eco-Fleet Ghana.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={fadeContainer.transition}
          variants={fadeContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <Card className="bg-card border-border p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="space-y-4">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic">
                  "Switching to Eco-Fleet EVs has drastically cut our operational costs and significantly improved our
                  environmental footprint. Their support has been exceptional."
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">John Mensah</p>
                  <p className="text-sm text-muted-foreground">Logistics Manager, ABC Corp</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card className="bg-card border-border p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="space-y-4">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic">
                  "The transition was seamless, and the driver training provided by Eco-Fleet was invaluable. Our team
                  is now fully equipped for the electric future."
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">Ama Serwaa</p>
                  <p className="text-sm text-muted-foreground">Fleet Coordinator, XYZ Solutions</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card className="bg-card border-border p-6 shadow-lg h-full flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <CardContent className="space-y-4">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-muted-foreground italic">
                  "Eco-Fleet Ghana's charging infrastructure support made our decision easy. We now have reliable and
                  cost-effective charging right at our depots."
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold text-foreground">Kwame Nkrumah</p>
                  <p className="text-sm text-muted-foreground">Operations Director, Global Logistics</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeUp}
          className="mt-20 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
            Trusted By <span className="text-primary">Leading Organizations</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image
              src="/placeholder.svg?height=80&width=150"
              alt="Client Logo 1"
              width={150}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <Image
              src="/placeholder.svg?height=80&width=150"
              alt="Client Logo 2"
              width={150}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <Image
              src="/placeholder.svg?height=80&width=150"
              alt="Client Logo 3"
              width={150}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <Image
              src="/placeholder.svg?height=80&width=150"
              alt="Client Logo 4"
              width={150}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            <Image
              src="/placeholder.svg?height=80&width=150"
              alt="Client Logo 5"
              width={150}
              height={80}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
