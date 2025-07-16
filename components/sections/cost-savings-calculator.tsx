"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function CostSavingsCalculator() {
  const [fuel, setFuel] = useState(300000) // GHS per month
  const [maint, setMaint] = useState(600000) // GHS per year
  const [vehicleCount, setVehicleCount] = useState(11) // Total vehicles from the table

  // Base EV costs for 11 vehicles (from PDF)
  const baseEvFuel = 90000
  const baseEvMaint = 200000

  // Scale EV costs based on vehicle count relative to the base 11 vehicles
  const currentEvFuel = (baseEvFuel / 11) * vehicleCount
  const currentEvMaint = (baseEvMaint / 11) * vehicleCount

  const fuelSavings = fuel - currentEvFuel
  const maintSavings = maint - currentEvMaint

  const totalCurrentCost = fuel * 12 + maint
  const totalEvCost = currentEvFuel * 12 + currentEvMaint
  const totalAnnualSavings = totalCurrentCost - totalEvCost

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 to-black text-foreground">
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
            Estimate your potential savings by switching to Eco-Fleet EVs. Adjust the sliders to see the impact!
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto  "
        >
          {/* Current costs */}
          <Card className="bg-gray-800/80 border border-gray-700/60 ">
            <CardHeader>
              <CardTitle className="text-primary">Your Current Fleet Costs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="fuel" className="block mb-2">
                  Monthly Fuel (GHS): {fuel.toLocaleString()}
                </Label>
                <input
                  id="fuel"
                  type="range"
                  min="100000"
                  max="500000"
                  step="10000"
                  value={fuel}
                  onChange={(e) => setFuel(Number(e.target.value))}
                  className="w-full h-2 bg-muted-foreground rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div>
                <Label htmlFor="maint" className="block mb-2">
                  Annual Maintenance (GHS): {maint.toLocaleString()}
                </Label>
                <input
                  id="maint"
                  type="range"
                  min="200000"
                  max="1000000"
                  step="50000"
                  value={maint}
                  onChange={(e) => setMaint(Number(e.target.value))}
                  className="w-full h-2 bg-muted-foreground rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div>
                <Label htmlFor="vehicleCount" className="block mb-2">
                  Number of Vehicles: {vehicleCount}
                </Label>
                <input
                  id="vehicleCount"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={vehicleCount}
                  onChange={(e) => setVehicleCount(Number(e.target.value))}
                  className="w-full h-2 bg-muted-foreground rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Savings */}
          <Card className="bg-gray-800/80 border border-gray-700/60 ">
            <CardHeader>
              <CardTitle className="text-primary">Projected Eco-Fleet Savings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Monthly Fuel Savings:</strong>{" "}
                <span className="text-green-500 font-bold">GHS {fuelSavings.toLocaleString()}</span>
              </p>
              <p>
                <strong className="text-foreground">Annual Maintenance Savings:</strong>{" "}
                <span className="text-green-500 font-bold">GHS {maintSavings.toLocaleString()}</span>
              </p>
              <p>
                <strong className="text-foreground">Carbon Tax:</strong> Exempt – 100 % savings
              </p>
              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Annual Cost Comparison</h3>
                <div className="flex items-end gap-4 h-32">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className="w-12 bg-destructive rounded-t-lg transition-all duration-500"
                      style={{ height: `${Math.min(100, (totalCurrentCost / 1000000) * 100)}%` }} // Scale for visual
                    ></div>
                    <span className="text-sm mt-2 text-destructive">Current</span>
                    <span className="text-xs text-muted-foreground">GHS {totalCurrentCost.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className="w-12 bg-primary rounded-t-lg transition-all duration-500"
                      style={{ height: `${Math.min(100, (totalEvCost / 1000000) * 100)}%` }} // Scale for visual
                    ></div>
                    <span className="text-sm mt-2 text-primary">Eco-Fleet EV</span>
                    <span className="text-xs text-muted-foreground">GHS {totalEvCost.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-lg font-bold text-center mt-6">
                  Total Annual Savings:{" "}
                  <span className="text-green-500">GHS {totalAnnualSavings.toLocaleString()}</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
