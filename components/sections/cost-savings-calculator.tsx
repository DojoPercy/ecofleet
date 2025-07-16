"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// Ensure lucide-react is installed: npm install lucide-react or yarn add lucide-react
import { Fuel, Wrench, Leaf, BarChart2, DollarSign } from "lucide-react"; // Uncommented and imported icons

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function CostSavingsCalculator() {
  // Static values from the proposal document (Page 5, "4.2 Comparative Cost Savings vs. Diesel/Petrol Vehicles")
  const dieselPetrolMonthlyFuel = 300000; // GHS
  const dieselPetrolAnnualMaintenance = 600000; // GHS
  const dieselPetrolAnnualFuel = dieselPetrolMonthlyFuel * 12;

  const evMonthlyFuel = 90000; // GHS
  const evAnnualMaintenance = 200000; // GHS
  const evAnnualFuel = evMonthlyFuel * 12;

  // Calculate annual costs based on static data
  const totalAnnualDieselPetrolCost = dieselPetrolAnnualFuel + dieselPetrolAnnualMaintenance;
  const totalAnnualEvCost = evAnnualFuel + evAnnualMaintenance;
  const totalAnnualSavings = totalAnnualDieselPetrolCost - totalAnnualEvCost;

  // Percentage Savings for display
  const fuelSavingsPercent = Math.round(((dieselPetrolMonthlyFuel - evMonthlyFuel) / dieselPetrolMonthlyFuel) * 100);
  const maintenanceSavingsPercent = Math.round(((dieselPetrolAnnualMaintenance - evAnnualMaintenance) / dieselPetrolAnnualMaintenance) * 100);

  return (
    <section
      className="relative py-12 md:py-24 lg:py-32 bg-cover bg-center text-foreground overflow-hidden"
      style={{
        // Subtle background image for a "high-class" feel
        backgroundImage: `url('https://images.unsplash.com/photo-1596495578065-68b2848c4021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjkwMzV8MHwxfHNlYXJjaHwyMHx8ZWxlY3RyaWMlMjB2ZWhpY2xlJTIwZmxlZXR8ZW58MHx8fHwxNzA4NjQ1ODcxfDA&ixlib=rb-4.0.3&q=80&w=1080')`,
        backgroundAttachment: 'fixed', // Creates a parallax-like effect
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 to-black/90 z-0"></div>

      <div className="relative z-10 container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Unlock <span className="text-primary-400">Significant Cost Savings</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 md:text-xl lg:text-lg xl:text-xl leading-relaxed">
            Transitioning to Eco-Fleet EVs offers substantial reductions in operational expenses, aligning with your financial and sustainability goals.
          </p>
        </motion.div>

        {/* NEW: Prominent Hero Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeUp}
          className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-gray-700/60"
        >
          {/* Using a different online image URL for a modern EV fleet or charging scene */}
          <img
            src="/images/vc.png"
            alt="Electric Vehicle Charging Station"
            className="w-full h-auto object-cover max-h-[450px]" // Limit height to keep it a "hero" but not take too much space
          />
          <p className="sr-only">Image of electric vehicle charging station.</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        >
          {/* Detailed Comparative Cost Savings Card */}
          <motion.div variants={itemFadeIn}>
            <Card className="bg-gray-900/80 border border-gray-700/60 shadow-2xl rounded-xl p-8 h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-7px] hover:shadow-primary-lg">
              <CardHeader className="pb-6 border-b border-gray-700/50 mb-6">
                <CardTitle className="text-primary-400 text-2xl sm:text-3xl font-bold flex items-center gap-3">
                  <DollarSign className="h-9 w-9 text-green-400" />
                  Comparative Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 text-gray-200">
                <p className="mb-4 text-lg">
                  Switching to an Eco-Fleet offers significant financial advantages as detailed below:
                </p>

                {/* Enhanced Table-like structure for cost savings with icons */}
                <div className="grid grid-cols-[1fr,auto,auto,auto] items-center gap-y-5 text-sm md:text-base">
                  {/* Table Header */}
                  <div className="text-gray-400 uppercase tracking-wider font-semibold">Expense Category</div>
                  <div className="text-gray-400 uppercase tracking-wider text-right font-semibold">Diesel/Petrol</div>
                  <div className="text-gray-400 uppercase tracking-wider text-right font-semibold">Eco-Fleet EV</div>
                  <div className="text-gray-400 uppercase tracking-wider text-right font-semibold">Savings</div>

                  {/* Fuel Costs */}
                  <div className="font-medium flex items-center text-lg">
                    <Fuel className="inline-block mr-3 text-blue-400" size={20} />
                    Fuel Costs (Monthly)
                  </div>
                  <div className="text-right text-base">GHS {dieselPetrolMonthlyFuel.toLocaleString()}</div>
                  <div className="text-right text-base text-green-400">GHS {evMonthlyFuel.toLocaleString()}</div>
                  <div className="text-right text-lg text-green-500 font-bold">{fuelSavingsPercent}%</div>

                  {/* Maintenance */}
                  <div className="font-medium flex items-center text-lg">
                    <Wrench className="inline-block mr-3 text-yellow-400" size={20} />
                    Maintenance (Annual)
                  </div>
                  <div className="text-right text-base">GHS {dieselPetrolAnnualMaintenance.toLocaleString()}</div>
                  <div className="text-right text-base text-green-400">GHS {evAnnualMaintenance.toLocaleString()}</div>
                  <div className="text-right text-lg text-green-500 font-bold">{maintenanceSavingsPercent}%</div>

                  {/* Carbon Tax */}
                  <div className="font-medium flex items-center text-lg">
                    <Leaf className="inline-block mr-3 text-lime-400" size={20} />
                    Carbon Tax Compliance
                  </div>
                  <div className="text-right text-base">Applicable</div>
                  <div className="text-right text-base text-green-400">Exempt</div>
                  <div className="text-right text-lg text-green-500 font-bold">100%</div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-700/60">
                  <p className="text-xl font-bold text-white text-center">
                    Total Estimated Annual Savings:{" "}
                    <span className="text-green-500">GHS {totalAnnualSavings.toLocaleString()}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Annual Cost Comparison Visual Card */}
          <motion.div variants={itemFadeIn}>
            <Card className="bg-gray-900/80 border border-gray-700/60 shadow-2xl rounded-xl p-8 h-full flex flex-col transition-all duration-500 ease-out-expo hover:translate-y-[-7px] hover:shadow-primary-lg">
              <CardHeader className="pb-6 border-b border-gray-700/50 mb-6">
                <CardTitle className="text-primary-400 text-2xl sm:text-3xl font-bold flex items-center gap-3">
                  <BarChart2 className="h-9 w-9 text-purple-400" />
                  Annual Cost Projection
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 text-gray-300 flex flex-col h-full justify-between">
                <p className="mb-6 text-lg">
                  Visualize the dramatic reduction in annual operating costs when you switch to Eco-Fleet EVs.
                </p>
                <div className="flex items-end justify-around gap-6 h-full flex-grow py-4">
                  {/* Bar for Current Fleet Cost */}
                  <div className="flex flex-col items-center flex-1 max-w-[180px] text-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.min(100, (totalAnnualDieselPetrolCost / (totalAnnualDieselPetrolCost * 1.2)) * 100)}%` }} // Scale relative to highest possible cost for visual
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-full rounded-t-lg bg-red-600/80 border-t-4 border-x-4 border-red-700 shadow-xl"
                      style={{ minHeight: '20px' }} // Ensure minimum height for visibility
                    ></motion.div>
                    <span className="text-lg mt-4 text-red-400 font-semibold">Current Fleet</span>
                    <span className="text-sm text-gray-400">GHS {totalAnnualDieselPetrolCost.toLocaleString()}</span>
                  </div>

                  {/* Bar for Eco-Fleet EV Cost */}
                  <div className="flex flex-col items-center flex-1 max-w-[180px] text-center">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.min(100, (totalAnnualEvCost / (totalAnnualDieselPetrolCost * 1.2)) * 100)}%` }} // Scale relative to highest possible cost for visual
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="w-full rounded-t-lg bg-green-600/80 border-t-4 border-x-4 border-green-700 shadow-xl"
                      style={{ minHeight: '20px' }} // Ensure minimum height for visibility
                    ></motion.div>
                    <span className="text-lg mt-4 text-green-400 font-semibold">Eco-Fleet EV</span>
                    <span className="text-sm text-gray-400">GHS {totalAnnualEvCost.toLocaleString()}</span>
                  </div>
                </div>
                <p className="mt-8 text-center text-lg text-gray-300">
                  These projections highlight the substantial long-term savings and environmental benefits of an EV transition.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}