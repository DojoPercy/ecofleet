"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Truck, Plug, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const fadeItem = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

export function Timeline() {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-24">
        {/* Timeline Item 1 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeItem}
          className="flex flex-col md:flex-row items-center md:justify-end md:pr-12 relative"
        >
          <div className="md:order-2 md:ml-8 w-full md:w-auto">
            <Card className="bg-background border-border p-6 shadow-lg w-full max-w-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <ClipboardCheck className="h-6 w-6" /> Contract Signing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Formalization of the lease agreement, tailored to BOST's specific needs and preferences.</p>
                <p className="text-sm mt-2">Expected: Q3 2025</p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute md:static md:order-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 mt-4 md:mt-0">
            1
          </div>
        </motion.div>

        {/* Timeline Item 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeItem}
          className="flex flex-col md:flex-row items-center md:justify-start md:pl-12 relative"
        >
          <div className="md:order-1 md:mr-8 w-full md:w-auto">
            <Card className="bg-background border-border p-6 shadow-lg w-full max-w-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <Truck className="h-6 w-6" /> Delivery & Commissioning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Delivery of the electric fleet to BOST's designated locations, followed by thorough commissioning.
                </p>
                <p className="text-sm mt-2">Expected: Within 4-6 weeks of contract signing</p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute md:static md:order-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 mt-4 md:mt-0">
            2
          </div>
        </motion.div>

        {/* Timeline Item 3 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={fadeItem}
          className="flex flex-col md:flex-row items-center md:justify-end md:pr-12 relative"
        >
          <div className="md:order-2 md:ml-8 w-full md:w-auto">
            <Card className="bg-background border-border p-6 shadow-lg w-full max-w-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <Plug className="h-6 w-6" /> Charging Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Installation and testing of charging infrastructure at BOST's key operational hubs.</p>
                <p className="text-sm mt-2">Expected: Concurrent with or immediately after delivery</p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute md:static md:order-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 mt-4 md:mt-0">
            3
          </div>
        </motion.div>

        {/* Timeline Item 4 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          variants={fadeItem}
          className="flex flex-col md:flex-row items-center md:justify-start md:pl-12 relative"
        >
          <div className="md:order-1 md:mr-8 w-full md:w-auto">
            <Card className="bg-background border-border p-6 shadow-lg w-full max-w-md">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                  <Users className="h-6 w-6" /> Driver Training
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>Comprehensive training programs for BOST drivers on EV operation, efficiency, and safety.</p>
                <p className="text-sm mt-2">Expected: Post-delivery and charging setup</p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute md:static md:order-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 mt-4 md:mt-0">
            4
          </div>
        </motion.div>
      </div>
    </div>
  )
}
