"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Wrench, DollarSign, CheckCircle } from "lucide-react"
import Image from "next/image"

// Framer Motion variants for smooth animations
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }, // Slightly more delay and stagger for a grander entrance
  },
}
const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94], // ✅ fixed
    },
  },
};

export function LeaseAndServices() {
  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 bg-gray-950 text-gray-50 overflow-hidden"> {/* Darker background for premium feel, more vertical padding */}
      {/* Background Image with overlay for better contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lease.png"
          alt="Lease Terms Background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-15" // Slightly more visible background image
        />
        {/* Darker overlay for strong text contrast */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeContainer}
          className="flex flex-col items-center justify-center space-y-5 text-center mb-16 md:mb-20" // Increased spacing and margin below heading
        >
          <motion.h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl max-w-4xl leading-tight"> {/* Larger, bolder, tighter tracking, improved leading */}
            Flexible Lease Terms & <span className="text-primary-400">Comprehensive Services</span> {/* Adjusted primary color for better visibility on dark background */}
          </motion.h2>
          <motion.p className="max-w-[900px] text-gray-300 md:text-xl lg:text-lg xl:text-xl leading-relaxed"> {/* Slightly brighter gray for body text, consistent responsive scale, relaxed leading */}
            Our hassle-free leasing minimizes upfront costs, ensuring optimal fleet performance and peace of mind.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch"> {/* Increased gap between columns, items-stretch ensures cards have equal height */}
          {/* Key Lease Terms & Inclusive Services Column */}
          <motion.div className="space-y-8 flex flex-col"> {/* Added flex flex-col to allow cards to fill height */}
            <Card className="bg-gray-800/80 border border-gray-700/60 p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg"> {/* Darker card background, stronger border, more pronounced shadow/hover effect */}
              <CardHeader className="pb-6"> {/* More padding */}
                <CardTitle className="text-3xl font-bold text-primary-400 flex items-center gap-4"> {/* Larger title, bolder, more gap for icon */}
                  <Clock className="h-9 w-9" /> Key Lease Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-5 text-gray-300 text-lg"> {/* Larger text, more space between points */}
                <div className="flex items-start gap-4"> {/* More gap */}
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" /> {/* Larger icon, slightly brighter green */}
                  <p>
                    <span className="font-bold text-gray-50">Lease Duration:</span> Flexible 3–5 year terms,
                    customizable to your operational needs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Monthly Payments:</span> Fixed, predictable costs
                    with no hidden charges, simplifying your budget.
                  </p>
                </div>
                <h4 className="font-bold text-gray-50 mt-6 mb-3 text-2xl">End-of-Lease Options:</h4> {/* Bolder, larger heading */}
                <ul className="list-none space-y-4 pl-0"> {/* More space between list items */}
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    Purchase vehicles at a discounted residual value.
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    Upgrade to newer EV models for improved technology.
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                    Simply return vehicles with no further obligations.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border border-gray-700/60 p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-primary-400 flex items-center gap-4">
                  <Wrench className="h-9 w-9" /> Inclusive Services
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-5 text-gray-300 text-lg">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Full Maintenance & Servicing:</span> Covers routine
                    checks, battery health monitoring, and all necessary repairs.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Battery Warranty:</span> Comprehensive 5-year or
                    150,000 km coverage for peace of mind.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p>
                    <span className="font-bold text-gray-50">Driver Training Programs:</span> Maximise efficiency
                    and safety with our comprehensive EV driver training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Monthly Lease Overview Column */}
          <motion.div className="flex flex-col"> {/* Added flex flex-col to allow card to fill height */}
            <Card className="bg-gray-800/80 border border-gray-700/60 p-8 shadow-2xl rounded-xl h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-5px] hover:shadow-primary-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-primary-400 flex items-center gap-4">
                  <DollarSign className="h-9 w-9" /> Monthly Lease Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-gray-300">
                <div className="overflow-x-auto"> {/* Ensures table is scrollable on small screens */}
                  <table className="w-full text-left border-collapse min-w-[400px]"> {/* Added min-width for small screen usability */}
                    <thead>
                      <tr className="border-b border-gray-600/70"> {/* Stronger border for header */}
                        <th className="py-4 px-3 font-semibold text-gray-50 text-xl">Vehicle Type</th> {/* Larger text, bolder, more padding */}
                        <th className="py-4 px-3 font-semibold text-gray-50 text-xl text-right">Units</th>
                        <th className="py-4 px-3 font-semibold text-gray-50 text-xl text-right">
                          Monthly Cost (GHS)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700/50"> {/* Stronger border */}
                        <td className="py-3 px-3 text-lg">Electric Pickup</td> {/* Larger text for data */}
                        <td className="py-3 px-3 text-right text-lg">2</td>
                        <td className="py-3 px-3 text-right text-lg">60,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-lg">Electric Bus</td>
                        <td className="py-3 px-3 text-right text-lg">1</td>
                        <td className="py-3 px-3 text-right text-lg">30,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-lg">Four-wheel drive</td>
                        <td className="py-3 px-3 text-right text-lg">3</td>
                        <td className="py-3 px-3 text-right text-lg">135,000</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="py-3 px-3 text-lg">Electric Saloon Car</td>
                        <td className="py-3 px-3 text-right text-lg">5</td>
                        <td className="py-3 px-3 text-right text-lg">75,000</td>
                      </tr>
                      {/* Total Row - Highly emphasized */}
                      <tr className="font-bold text-gray-50 bg-primary-400/20"> {/* Highlight total row with primary color tint */}
                        <td className="py-4 px-3 text-xl">Total Monthly Lease</td> {/* Larger text for total */}
                        <td className="py-4 px-3 text-right text-xl"></td> {/* Empty cell for alignment */}
                        <td className="py-4 px-3 text-right text-xl">300,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-base mt-6 text-gray-400 leading-normal"> {/* Slightly larger text for note, muted */}
                  <span className="font-semibold text-gray-200">Note:</span> Final pricing is negotiable based on
                  lease duration and bulk discounts, ensuring a solution tailored to your budget.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}