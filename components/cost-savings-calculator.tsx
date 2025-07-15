"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function CostSavingsCalculator() {
  const [fuel, setFuel] = useState(300000) // GHS per month
  const [maint, setMaint] = useState(600000) // GHS per year

  const evFuel = 90000
  const evMaint = 200000

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-center mb-12 space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Unlock Significant Cost Savings</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Estimate your potential savings by switching to Eco-Fleet EVs.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Current costs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Your Current Fleet Costs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="fuel">Monthly Fuel (GHS)</Label>
                <Input id="fuel" type="number" value={fuel} onChange={(e) => setFuel(Number(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="maint">Annual Maintenance (GHS)</Label>
                <Input id="maint" type="number" value={maint} onChange={(e) => setMaint(Number(e.target.value))} />
              </div>
            </CardContent>
          </Card>

          {/* Savings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Projected Eco-Fleet Savings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Fuel Savings:</strong>{" "}
                <span className="text-green-500 font-bold">GHS {(fuel - evFuel).toLocaleString()}</span> per month
              </p>
              <p>
                <strong className="text-foreground">Maintenance Savings:</strong>{" "}
                <span className="text-green-500 font-bold">GHS {(maint - evMaint).toLocaleString()}</span> per year
              </p>
              <p>
                <strong className="text-foreground">Carbon Tax:</strong> Exempt – 100 % savings
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
