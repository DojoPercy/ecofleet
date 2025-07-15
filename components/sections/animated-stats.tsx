// src/components/sections/AnimatedStats.tsx

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedStatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

// Reusable Number animation component
function AnimatedNumber({ n, suffix }: { n: number; suffix: string }) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: n },
    delay: 1000, // Small delay for number animation after card appears
    config: { mass: 1, tension: 100, friction: 20, clamp: true }, // More snappy and controlled spring
  });

  return (
    <animated.span className="inline-block text-gradient-primary">
      {number.to((val) => `${Math.floor(val).toLocaleString()}${suffix}`)}
    </animated.span>
  );
}

const StatCard = ({ value, suffix, label, delay = 0 }: AnimatedStatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Ensure half of the element is in view

  const cardVariants = {
    hidden: { opacity: 0, y: 70, scale: 0.85 }, // More pronounced initial state
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay, // Individual card delay
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="group relative bg-gray-800/60 border border-gray-700/40 p-8 rounded-xl shadow-2xl text-center backdrop-blur-lg
                 transition-all duration-500 ease-out-back hover:scale-[1.03] hover:shadow-primary-glow-md overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

      <h3 className="text-6xl md:text-7xl font-extrabold text-primary-400 mb-4 relative z-10 drop-shadow-lg">
        {isInView ? <AnimatedNumber n={value} suffix={suffix} /> : `0${suffix}`}
      </h3>
      <p className="text-gray-300 text-xl md:text-2xl font-light relative z-10 leading-snug">
        {label}
      </p>
    </motion.div>
  );
};

export function AnimatedStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.2 });

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }, // Custom ease
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
    },
  };

  return (
    <section className="w-full py-24 md:py-36 lg:py-48 bg-gray-950 text-white relative overflow-hidden font-sans">
      {/* Background Subtle Grid/Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('/path-to-subtle-grid-pattern.svg')] bg-repeat bg-center"></div>
      </div>
      {/* Ambient Light/Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 90%, rgba(15, 157, 88, 0.05) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(66, 133, 244, 0.05) 0%, transparent 40%), linear-gradient(to bottom, rgba(0,0,0,0.4), transparent 70%)',
        }}
      ></div>

      <div ref={containerRef} className="container px-6 md:px-12 lg:px-24 relative z-20 mx-auto">
        <div className="text-center mb-16 lg:mb-24 space-y-6">
          <motion.h2
            initial="hidden"
            animate={isContainerInView ? 'visible' : 'hidden'}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] drop-shadow-lg"
          >
            Driving Impact: Our <span className="text-gradient-primary">Key Achievements</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            animate={isContainerInView ? 'visible' : 'hidden'}
            className="max-w-[1000px] mx-auto text-gray-300 text-xl lg:text-2xl leading-relaxed font-light"
          >
            At Eco-Fleet Ghana, our commitment to sustainable transportation translates into quantifiable results.
            Explore the tangible benefits and environmental leadership achieved through our innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 max-w-7xl mx-auto">
          {/* Using a consistent delay increment for a staggered animation */}
          <StatCard value={70} suffix="%" label="Fuel Savings" delay={0.3} />
          <StatCard value={100} suffix="%" label="Emission-Free Operations" delay={0.5} />
          <StatCard value={67} suffix="%" label="Maintenance Cost Reduction" delay={0.7} />
        </div>
      </div>

     
    </section>
  );
}