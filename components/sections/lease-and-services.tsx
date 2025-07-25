"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Wrench, DollarSign, CheckCircle, BadgeCent } from "lucide-react"
import Image from "next/image"

// Framer Motion variants for smooth entrance animations
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom bezier curve for a fluid animation
    },
  },
}

export function LeaseAndServices() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 text-gray-50 overflow-x-hidden">
      {/* Background Image with overlay for better contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920" // Using placeholder image
          alt="Lease Terms Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-15"
        />
        {/* Darker overlay for strong text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 to-black"></div>
      </div>
      <div className="relative z-10 container px-4 md:px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeContainer}
          className="flex flex-col items-center justify-center space-y-5 text-center mb-12 md:mb-20"
        >
          <motion.h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl leading-tight">
            {"Flexible Lease Terms & "}
            <span className="text-primary-400">Comprehensive Services</span>
          </motion.h2>
          <motion.p className="max-w-[900px] text-gray-300 md:text-xl lg:text-lg xl:text-xl leading-relaxed">
            Our hassle-free leasing minimizes upfront costs, ensuring optimal fleet performance and peace of mind.
          </motion.p>
        </motion.div>

        {/* Content Grid - Apply fadeContainer to the grid itself */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeContainer}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch overflow-hidden" // items-stretch ensures cards have equal height
        >
          {/* Key Lease Terms & Inclusive Services Column */}
          <motion.div variants={fadeItem} className="flex flex-col">
            <Card className="bg-gray-800/80 border border-gray-700/60 p-6 sm:p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-primary-400 flex items-center gap-4">
                  <Clock className="h-9 w-9" /> Key Lease Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-5 text-gray-300 text-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Lease Duration:</span> Flexible 3–5 year terms,
                    customizable to your operational needs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Monthly Payments:</span> Fixed, predictable costs with no
                    hidden charges, simplifying your budget.
                  </p>
                </div>
                <h4 className="font-bold text-gray-50 mt-6 mb-3 text-2xl">End-of-Lease Options:</h4>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p>Purchase vehicles at a discounted residual value.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p>Upgrade to newer EV models for improved technology.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    <p>Simply return vehicles with no further obligations.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inclusive Services Column */}
          <motion.div variants={fadeItem} className="flex flex-col">
            <Card className="bg-gray-800/80 border border-gray-700/60 p-6 sm:p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-primary-400 flex items-center gap-4">
                  <Wrench className="h-9 w-9" /> Inclusive Services
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-5 text-gray-300 text-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Full Maintenance & Servicing:</span> Covers routine checks,
                    battery health monitoring, and all necessary repairs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Battery Warranty:</span> Comprehensive 5-year or 150,000 km
                    coverage for peace of mind.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Driver Training Programs:</span> Maximise efficiency and
                    safety with our comprehensive EV driver training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Monthly Lease Overview Column */}
          <motion.div variants={fadeItem} className="md:col-span-2 flex flex-col">
            <Card className="bg-gray-800/80 border border-gray-700/60 p-6 sm:p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl sm:text-3xl font-bold text-primary-400 flex items-center gap-4">
                  <BadgeCent className="h-9 w-9" /> Monthly Lease Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-gray-300">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse table-auto">
                    <thead>
                      <tr className="border-b border-gray-600/70">
                        <th className="py-4 px-3 font-semibold text-gray-50 text-lg sm:text-xl">Vehicle Type</th>
                        <th className="py-4 px-3 font-semibold text-gray-50 text-lg sm:text-xl text-right">Units</th>
                        <th className="py-4 px-3 font-semibold text-gray-50 text-lg sm:text-xl text-right">
                          Monthly Cost (GHS)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-base lg:text-lg">Electric Pickup</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">2</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">60,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-base lg:text-lg">Electric Bus</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">1</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">30,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-base lg:text-lg">Four-wheel drive</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">3</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">135,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-base lg:text-lg">Electric Saloon Car</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">5</td>
                        <td className="py-3 px-3 text-right text-base lg:text-lg">75,000</td>
                      </tr>
                      {/* Total Row - Highly emphasized */}
                      <tr className="font-bold text-gray-50 bg-primary-400/20">
                        <td className="py-4 px-3 text-lg sm:text-xl">Total Monthly Lease</td>
                        <td className="py-4 px-3 text-right text-lg sm:text-xl"></td>
                        <td className="py-4 px-3 text-right text-lg sm:text-xl">300,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
               
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}