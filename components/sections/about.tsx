'use client';

import { motion } from 'framer-motion';
import { JSX, SVGProps } from 'react';

const Card = ({ className, children }: any) => (
  <div className={`rounded-xl bg-background text-foreground ${className}`}>
    {children}
  </div>
);

const IconWrapper = ({ children }: any) => (
  <div className="h-12 w-12 mx-auto mb-6 text-primary-400">{children}</div>
);

const LeafyGreen = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 18 2c1 2.9-.4 6.2-1.8 9A9 9 0 0 1 22 10c0 1.2-.5 2.3-1.3 3.3C19.8 14.7 18 15 18 15l-1.8-1.7c-.5-.4-1.2-.6-2-.6H10A6 6 0 0 0 11 20Z" />
    <path d="M13 8.1c.8.8 1.8 1.2 2.8 1.2H17l-2 3c-.5.3-1 .6-1.5.8L13 15c-1 0-2.2-.4-3-1.2l-.5-.5c-.8-.8-1.2-1.8-1.2-2.8V9.7c0-1 .4-2 1.2-2.8L12 6a5 5 0 0 1 1-1.2v3.3Z" />
  </svg>
);
const Car = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M19 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z" />
    <circle cx="7" cy="15" r="2" />
    <circle cx="17" cy="15" r="2" />
    <path d="M8 9h8" />
  </svg>
);
const Zap = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
  </svg>
);
const ShieldCheck = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Animation Variants
const fadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const fadeItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full py-24 md:py-32 bg-gradient-to-br from-gray-900 to-black text-white relative"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-blue-500/10 to-transparent animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeContainer}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text Side */}
          <motion.div variants={fadeItem}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8">
              About <span className="text-primary">Eco-Fleet Ghana</span>
              <br />
              <span className="text-blue-400">The Future, Today.</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-light bg-white/5 p-5 rounded-lg border border-gray-700 shadow-inner">
              Eco-Fleet Ghana pioneers electric mobility solutions for Ghana's
              corporate and government sectors. We empower clients like BOST
              with sustainable, cost-saving EV fleets, backed by cutting-edge
              infrastructure and expert support.
            </p>

            
          </motion.div>

          {/* Cards */}
          <motion.div variants={fadeItem} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="p-6 bg-gray-800/60 border border-gray-700/40 shadow-xl hover:scale-[1.02] transition-transform duration-300 text-center">
              <IconWrapper>
                <LeafyGreen className="h-full w-full text-yellow-600" />
              </IconWrapper>
              <h3 className="text-2xl font-bold  mb-2">Sustainable Mastery</h3>
              <p className="text-gray-400 text-sm">Driving Ghana’s green energy evolution with world-class EV ecosystems.</p>
            </Card>
            <Card className="p-6 bg-gray-800/60 border border-gray-700/40 shadow-xl hover:scale-[1.02] transition-transform duration-300 text-center">
              <IconWrapper>
                <Car className="h-full w-full text-blue-500" />
              </IconWrapper>
              <h3 className="text-2xl font-bold  mb-2">Intelligent Mobility</h3>
              <p className="text-gray-400 text-sm">Optimized electric fleets designed for enterprise logistics and smart routing.</p>
            </Card>
            <Card className="p-6 bg-gray-800/60 border border-gray-700/40 shadow-xl hover:scale-[1.02] transition-transform duration-300 text-center">
              <IconWrapper>
                <Zap className="h-full w-full text-green-500" />
              </IconWrapper>
              <h3 className="text-2xl font-bold  mb-2">Optimized ROI</h3>
              <p className="text-gray-400 text-sm">70% cost savings and minimal maintenance for long-term efficiency.</p>
            </Card>
            <Card className="p-6 bg-gray-800/60 border border-gray-700/40 shadow-xl hover:scale-[1.02] transition-transform duration-300 text-center">
              <IconWrapper>
                <ShieldCheck className="h-full w-full text-purple-500" />
              </IconWrapper>
              <h3 className="text-2xl font-bold text-white  mb-2">Strategic Partnership</h3>
              <p className="text-gray-400 text-sm">Collaborative deployment and unmatched after-sale support across Ghana.</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
