"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Wrench, Leaf, BarChart2, DollarSign } from "lucide-react"

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
  const dieselPetrolMonthlyFuel = 300000
  const dieselPetrolAnnualMaintenance = 600000
  const dieselPetrolAnnualFuel = dieselPetrolMonthlyFuel * 12

  const evMonthlyFuel = 90000
  const evAnnualMaintenance = 200000
  const evAnnualFuel = evMonthlyFuel * 12

  const totalAnnualDieselPetrolCost = dieselPetrolAnnualFuel + dieselPetrolAnnualMaintenance
  const totalAnnualEvCost = evAnnualFuel + evAnnualMaintenance
  const totalAnnualSavings = totalAnnualDieselPetrolCost - totalAnnualEvCost

  const fuelSavingsPercent = Math.round(((dieselPetrolMonthlyFuel - evMonthlyFuel) / dieselPetrolMonthlyFuel) * 100)
  const maintenanceSavingsPercent = Math.round(((dieselPetrolAnnualMaintenance - evAnnualMaintenance) / dieselPetrolAnnualMaintenance) * 100)

  return (
    <section
      className="relative py-12 md:py-24 lg:py-32 bg-cover bg-center text-foreground overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1596495578065-68b2848c4021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjkwMzV8MHwxfHNlYXJjaHwyMHx8ZWxlY3RyaWMlMjB2ZWhpY2xlJTIwZmxlZXR8ZW58MHx8fHwxNzA4NjQ1ODcxfDA&ixlib=rb-4.0.3&q=80&w=1080')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 to-black/90 z-0" />
      <div className="relative z-10 container px-4 sm:px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Unlock <span className="text-primary-400">Significant Cost Savings</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            Transitioning to Eco-Fleet EVs offers substantial reductions in operational expenses, aligning with your financial and sustainability goals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={fadeUp}
          className="mb-12 rounded-xl overflow-hidden shadow-2xl border border-gray-700/60"
        >
          <img
            src="/images/vc.png"
            alt="Electric Vehicle Charging Station"
            className="w-full object-cover max-h-[400px] sm:max-h-[450px]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:max-w-6xl mx-auto"
        >
          {/* Cost Savings Breakdown Card */}
          <motion.div variants={itemFadeIn}>
            <Card className="bg-gray-900/80 border border-gray-700/60 shadow-2xl rounded-xl p-5 sm:p-8 h-full flex flex-col hover:translate-y-[-7px] hover:shadow-primary-lg transition-all duration-500 ease-out-expo">
              <CardHeader className="pb-4 sm:pb-6 border-b border-gray-700/50 mb-6">
                <CardTitle className="text-primary-400 text-xl sm:text-2xl font-bold flex items-center gap-3">
                  <DollarSign className="h-7 w-7 text-green-400" />
                  Comparative Cost Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 text-gray-200">
                <p className="text-sm sm:text-base">
                  Switching to an Eco-Fleet offers significant financial advantages as detailed below:
                </p>

               <div className="space-y-6">
  {/* Fuel */}
  <div className="grid md:grid-cols-4 gap-2 md:gap-4 items-center">
    <div className="flex items-center font-medium text-sm md:text-base">
      <Fuel className="mr-2 text-blue-400" size={16} />
      Fuel (Monthly)
    </div>
    <div className="text-right md:text-left text-sm md:text-base text-gray-200">
      Diesel/Petrol: <span className="font-semibold">GHS {dieselPetrolMonthlyFuel.toLocaleString()}</span>
    </div>
    <div className="text-right md:text-left text-sm md:text-base text-green-400">
      EV: <span className="font-semibold">GHS {evMonthlyFuel.toLocaleString()}</span>
    </div>
    <div className="text-right text-green-500 font-bold text-sm md:text-base">{fuelSavingsPercent}%</div>
  </div>

  {/* Maintenance */}
  <div className="grid md:grid-cols-4 gap-2 md:gap-4 items-center">
    <div className="flex items-center font-medium text-sm md:text-base">
      <Wrench className="mr-2 text-yellow-400" size={16} />
      Maintenance (Annual)
    </div>
    <div className="text-right md:text-left text-sm md:text-base text-gray-200">
      Diesel/Petrol: <span className="font-semibold">GHS {dieselPetrolAnnualMaintenance.toLocaleString()}</span>
    </div>
    <div className="text-right md:text-left text-sm md:text-base text-green-400">
      EV: <span className="font-semibold">GHS {evAnnualMaintenance.toLocaleString()}</span>
    </div>
    <div className="text-right text-green-500 font-bold text-sm md:text-base">{maintenanceSavingsPercent}%</div>
  </div>

  {/* Carbon Tax */}
  <div className="grid md:grid-cols-4 gap-2 md:gap-4 items-center">
    <div className="flex items-center font-medium text-sm md:text-base">
      <Leaf className="mr-2 text-lime-400" size={16} />
      Carbon Tax
    </div>
    <div className="text-right md:text-left text-sm md:text-base text-gray-200">Applicable</div>
    <div className="text-right md:text-left text-sm md:text-base text-green-400">Exempt</div>
    <div className="text-right text-green-500 font-bold text-sm md:text-base">100%</div>
  </div>
</div>


                <div className="mt-8 pt-4 border-t border-gray-700/60">
                  <p className="text-lg sm:text-xl font-bold text-white text-center">
                    Total Estimated Annual Savings: <span className="text-green-500">GHS {totalAnnualSavings.toLocaleString()}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Annual Cost Comparison Bar Chart */}
          <motion.div variants={itemFadeIn}>
            <Card className="bg-gray-900/80 border border-gray-700/60 shadow-2xl rounded-xl p-5 sm:p-8 h-full flex flex-col hover:translate-y-[-7px] hover:shadow-primary-lg transition-all duration-500 ease-out-expo">
              <CardHeader className="pb-4 sm:pb-6 border-b border-gray-700/50 mb-6">
                <CardTitle className="text-primary-400 text-xl sm:text-2xl font-bold flex items-center gap-3">
                  <BarChart2 className="h-7 w-7 text-purple-400" />
                  Annual Cost Projection
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between text-sm sm:text-base text-gray-300 space-y-6">
                <p>
                  Visualize the dramatic reduction in annual operating costs when you switch to Eco-Fleet EVs.
                </p>
                <div className="flex items-end justify-around gap-4 h-full flex-grow">
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(totalAnnualDieselPetrolCost / (totalAnnualDieselPetrolCost * 1.2)) * 100}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="w-full rounded-t-lg bg-red-600/80 border-t-4 border-x-4 border-red-700 shadow-xl"
                      style={{ minHeight: '20px' }}
                    />
                    <span className="mt-4 font-semibold text-red-400">Current Fleet</span>
                    <span className="text-xs text-gray-400">GHS {totalAnnualDieselPetrolCost.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col items-center flex-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(totalAnnualEvCost / (totalAnnualDieselPetrolCost * 1.2)) * 100}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                      className="w-full rounded-t-lg bg-green-600/80 border-t-4 border-x-4 border-green-700 shadow-xl"
                      style={{ minHeight: '20px' }}
                    />
                    <span className="mt-4 font-semibold text-green-400">Eco-Fleet EV</span>
                    <span className="text-xs text-gray-400">GHS {totalAnnualEvCost.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-center text-sm sm:text-base text-gray-300">
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
