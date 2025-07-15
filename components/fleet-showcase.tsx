"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Vehicle {
  id: string
  name: string
  model: string
  image: string
  range: string
  battery: string
  payloadCapacity?: string
  passengerCapacity?: string
  chargingDC: string
  chargingAC: string
  useCase: string
  features: string[]
}

const vehicles: Vehicle[] = [
  {
    id: "pickup",
    name: "Electric Pickup Truck",
    model: "Dongfeng Z9 GE",
    image: "/placeholder.svg?height=400&width=600",
    range: "350 km per full charge",
    battery: "75 kWh Lithium-Iron-Phosphate (LiFePO4)",
    payloadCapacity: "1,000 kg",
    chargingDC: "Fast DC (50 kW) 0–80 % in 45 min",
    chargingAC: "AC (11 kW) 0–100 % in 7 h",
    useCase: "Ideal for logistics and field operations.",
    features: ["Regenerative braking", "GPS tracking & fleet management integration"],
  },
  {
    id: "bus",
    name: "Electric Bus",
    model: "K7M ER 30’ Transit",
    image: "/placeholder.svg?height=400&width=600",
    range: "315 km per charge",
    battery: "120 kWh NMC",
    passengerCapacity: "30–35 seats",
    chargingDC: "Fast DC (100 kW) 0–80 % in 1 h",
    chargingAC: "Over-night AC 8 h",
    useCase: "Employee shuttles & corporate events.",
    features: ["Eco-mode A/C", "USB ports", "Low-floor design"],
  },
  {
    id: "4x4",
    name: "Electric 4×4",
    model: "Lynk & Co 900",
    image: "/placeholder.svg?height=400&width=600",
    range: "500 km per charge",
    battery: "60 kWh ultra-fast",
    chargingDC: "DC 0–80 % in 30 min",
    chargingAC: "Standard AC capability",
    useCase: "Executive travel & rugged terrain.",
    features: ["Luxury interior", "ADAS suite"],
  },
  {
    id: "sedan",
    name: "Electric Sedan",
    model: "BYD QIN L",
    image: "/placeholder.svg?height=400&width=600",
    range: "400 km highway",
    battery: "60 kWh LiFePO4",
    chargingDC: "DC 20–80 % in 30 min",
    chargingAC: "Home AC 9 h",
    useCase: "Daily executive commutes.",
    features: ["10-inch infotainment", "CarPlay / Android Auto", "Adaptive cruise"],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FleetShowcase() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card text-card-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="mb-12 text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">Our Premium Electric Fleet</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Performance, luxury & sustainability for every mission-critical use case.
          </p>
        </motion.div>

        <Tabs defaultValue="pickup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 overflow-x-auto">
            {vehicles.map((v) => (
              <TabsTrigger key={v.id} value={v.id} className="py-3">
                {v.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {vehicles.map((v) => (
            <TabsContent key={v.id} value={v.id}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={v.image || "/placeholder.svg"}
                    alt={`${v.name} – ${v.model}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                      {v.name} <span className="text-primary">– {v.model}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Range:</strong> {v.range}
                    </p>
                    <p>
                      <strong className="text-foreground">Battery:</strong> {v.battery}
                    </p>
                    {v.payloadCapacity && (
                      <p>
                        <strong className="text-foreground">Payload Capacity:</strong> {v.payloadCapacity}
                      </p>
                    )}
                    {v.passengerCapacity && (
                      <p>
                        <strong className="text-foreground">Passenger Capacity:</strong> {v.passengerCapacity}
                      </p>
                    )}
                    <p>
                      <strong className="text-foreground">DC Charge:</strong> {v.chargingDC}
                    </p>
                    <p>
                      <strong className="text-foreground">AC Charge:</strong> {v.chargingAC}
                    </p>
                    <p>
                      <strong className="text-foreground">Use-case:</strong> {v.useCase}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {v.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
