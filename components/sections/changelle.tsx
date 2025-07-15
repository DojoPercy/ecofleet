'use client';

import { motion } from 'framer-motion';

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-xl bg-card text-foreground ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`flex flex-col space-y-1.5 p-5 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={`text-xl font-semibold leading-snug tracking-tight ${className}`}>{children}</h3>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`p-5 pt-0 ${className}`}>{children}</div>
);

const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const fadeItem = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

const ChallengeSolutionSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-gray-950 text-white relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('/path-to-subtle-grid-pattern.svg')] bg-repeat bg-center"></div>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 75% 15%, rgba(66, 133, 244, 0.05) 0%, transparent 40%), radial-gradient(circle at 25% 85%, rgba(15, 157, 88, 0.05) 0%, transparent 40%), linear-gradient(to top, rgba(0,0,0,0.4), transparent 70%)' }}></div>

      <div className="container px-6 md:px-12 lg:px-20 relative z-20 mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeContainer} className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            The <span className="text-gradient-destructive">Challenge.</span> The <span className="text-gradient-primary">Eco-Fleet Solution.</span>
          </h2>
          <p className="max-w-[900px] text-gray-300 text-lg lg:text-xl leading-relaxed font-light">
            In an era of rising costs and environmental mandates, traditional fleets face unprecedented hurdles. Eco-Fleet Ghana provides the strategic counter, empowering your operations with sustainable, cost-efficient, and future-proof electric mobility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 relative before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:bg-gradient-to-b before:from-transparent before:via-gray-700/50 before:to-transparent max-md:before:hidden">
          <motion.div  className="space-y-10 pr-4 md:pr-10 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-destructive-400 flex items-center gap-4">
              <XCircle className="h-8 w-8 text-red-500 -rotate-12 " />
              The Traditional Fleet Challenge
            </h3>
            <div className="space-y-6">
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>High Operating Costs</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Volatile fossil fuel prices and high consumption strain operational budgets and forecasting.
                </CardContent>
              </Card>
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>Frequent Maintenance</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Complex combustion engines demand costly upkeep, reducing availability and efficiency.
                </CardContent>
              </Card>
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>Environmental Pressure</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Emissions invite regulatory risk and fines, affecting ESG standing and public image.
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div  className="space-y-10 pl-4 md:pl-10 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-400 flex items-center gap-4">
              <CheckCircle className="h-8 w-8 text-green-500 rotate-12" />
              The Eco-Fleet Solution
            </h3>
            <div className="space-y-6">
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>Fuel Cost Reduction</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Switch to electric and reduce fuel expenses by up to 70% — stable, clean, and efficient.
                </CardContent>
              </Card>
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>Low Maintenance</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Simplified EV systems reduce maintenance demands by 60%+ and increase uptime.
                </CardContent>
              </Card>
              <Card className="bg-gray-800/60 border border-gray-700/40 p-6 rounded-xl hover:scale-[1.02] transition-transform">
                <CardHeader><CardTitle>Zero Emissions</CardTitle></CardHeader>
                <CardContent className="text-gray-300 text-base">
                  Adopt EVs to eliminate emissions and elevate your ESG compliance and sustainability goals.
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionSection;
