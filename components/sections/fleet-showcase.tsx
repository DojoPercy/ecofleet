'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Card, CardContent } from '@/components/ui/card';

const vehicles = [
  {
    id: 'pickup',
    name: 'Electric Pickup Truck',
    model: 'Dongfeng Z9 GE',
    image: '/images/dongfeng-pickup.png',
    range: '350 km per full charge',
    battery: '75 kWh Lithium-Iron-Phosphate (LiFePO4)',
    payloadCapacity: '1,000 kg',
    chargingDC: 'Fast DC (50 kW) 0–80 % in 45 min',
    chargingAC: 'AC (11 kW) 0–100 % in 7 h',
    useCase: 'Ideal for logistics and field operations.',
    features: ['Regenerative braking', 'GPS tracking & fleet management integration', 'Robust chassis'],
  },
  {
    id: 'bus',
    name: 'Electric Bus',
    model: 'K7M ER 30’ Transit',
    image: '/images/bus.png',
    range: '315 km per charge',
    battery: '120 kWh NMC',
    passengerCapacity: '30–35 seats',
    chargingDC: 'Fast DC (100 kW) 0–80 % in 1 h',
    chargingAC: 'Over-night AC 8 h',
    useCase: 'Employee shuttles & corporate events.',
    features: ['Eco-mode A/C', 'USB ports at every seat', 'Low-floor accessibility', 'Panoramic windows'],
  },
  {
    id: '4x4',
    name: 'Electric 4×4',
    model: 'Lynk & Co 900',
    image: '/images/lynk-co-900-front.jpg',
    range: '500 km per charge',
    battery: '60 kWh ultra-fast',
    chargingDC: 'DC 0–80 % in 30 min',
    chargingAC: 'Standard AC capability',
    useCase: 'Executive travel & rugged terrain.',
    features: ['Luxury leather interior', 'Advanced Driver-Assistance Systems (ADAS)', 'All-wheel drive', 'Panoramic sunroof'],
  },
  {
    id: 'sedan',
    name: 'Electric Sedan',
    model: 'BYD QIN L',
    image: '/images/byd-qin-l-driving.jpg',
    range: '400 km highway',
    battery: '60 kWh LiFePO4',
    chargingDC: 'DC 20–80 % in 30 min',
    chargingAC: 'Home AC 9 h',
    useCase: 'Daily executive commutes.',
    features: ['10-inch adaptive infotainment', 'Wireless CarPlay / Android Auto', 'Adaptive cruise control', 'Premium sound system'],
  },
];

const VehicleSlide = ({ vehicle, index, activeIndex }: { vehicle: any; index: number; activeIndex: number }) => {
  const isActive = index === activeIndex;

  const imageVariants = {
    inactive: { opacity: 0.5, scale: 0.9, y: 50 },
    active: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center p-8 lg:p-16">
      <motion.div
        className="relative w-full max-w-5xl h-[70vh] rounded-3xl overflow-hidden shadow-xl"
        variants={imageVariants}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} - ${vehicle.model}`}
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/50 backdrop-blur-md text-white">
          <h3 className="text-2xl font-bold">{vehicle.name}</h3>
          <p className="text-sm text-gray-300">{vehicle.model}</p>
        </div>
      </motion.div>
    </div>
  );
};

const MobileVehicleCard = ({ vehicle, showImage = true }: { vehicle: any; showImage?: boolean }) => {
  const cardContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Card className="bg-gray-800/60 border border-gray-700/40 rounded-2xl shadow-3xl backdrop-blur-xl overflow-hidden text-white">
      {showImage && (
        <div className="relative h-64 w-full">
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} - ${vehicle.model}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 ease-out-quart"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 p-2 rounded-md bg-black/60 backdrop-blur-sm">
            <h3 className="text-lg font-bold">{vehicle.name}</h3>
            <p className="text-sm text-gray-300">{vehicle.model}</p>
          </div>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={vehicle.id}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardContentVariants}
          transition={{ duration: 0.3 }}
        >
          <CardContent className="p-6 text-gray-300"> {/* Increased padding for more breathing room */}
            {/* Key Specifications Section */}
            <div className="mb-8"> {/* More vertical space */}
              <h4 className="text-xl font-bold text-white mb-4">Specifications</h4> {/* Larger and bolder heading */}
              <div className="space-y-3"> {/* Increased space between each spec line */}
                <p className="flex justify-between text-base"> {/* Base text size for readability */}
                  <span className="text-gray-400">Range:</span>
                  <span className="text-white font-semibold">{vehicle.range}</span> {/* Stronger emphasis on value */}
                </p>
                <p className="flex justify-between text-base">
                  <span className="text-gray-400">Battery:</span>
                  <span className="text-white font-semibold">{vehicle.battery}</span>
                </p>
                {vehicle.payloadCapacity && (
                  <p className="flex justify-between text-base">
                    <span className="text-gray-400">Payload:</span>
                    <span className="text-white font-semibold">{vehicle.payloadCapacity}</span>
                  </p>
                )}
                {vehicle.passengerCapacity && (
                  <p className="flex justify-between text-base">
                    <span className="text-gray-400">Passengers:</span>
                    <span className="text-white font-semibold">{vehicle.passengerCapacity}</span>
                  </p>
                )}
                <p className="flex justify-between text-base">
                  <span className="text-gray-400">DC Charge:</span>
                  <span className="text-white font-semibold">{vehicle.chargingDC}</span>
                </p>
                <p className="flex justify-between text-base">
                  <span className="text-gray-400">AC Charge:</span>
                  <span className="text-white font-semibold">{vehicle.chargingAC}</span>
                </p>
              </div>
            </div>

            {/* Primary Use-case Section */}
            <div className="mb-8 border-t border-gray-700/50 pt-6"> {/* Ample padding top and bottom */}
              <h4 className="text-xl font-bold text-white mb-4">Use-case</h4>
              <p className="text-base text-gray-200 leading-relaxed">{vehicle.useCase}</p> {/* Slightly brighter text, relaxed line height */}
            </div>

            {/* Key Features Section */}
            <div className="border-t border-gray-700/50 pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
              <ul className="list-disc list-inside text-base text-gray-200 space-y-2"> {/* Standard bullet list, good spacing */}
                {vehicle.features.map((f: string) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </motion.div>
      </AnimatePresence>
    </Card>
  );
};

export function FleetShowcase() {
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  const AUTOPLAY_INTERVAL = 10000;

  const handleResize = useCallback(() => {
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const goToSlide = useCallback((index: number) => {
    if (slidesWrapperRef.current) {
      const slideWidth = slidesWrapperRef.current.parentElement?.offsetWidth || 0;
      controls.start({
        x: -index * slideWidth,
        transition: {
          type: "spring",
          stiffness: 150,
          damping: 20,
        },
      });
      setActiveIndex(index);
    }
  }, [controls]);

  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % vehicles.length;
        return nextIndex;
      });
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [isDesktop]);

  useEffect(() => {
    if (isDesktop) {
      goToSlide(activeIndex);
    }
  }, [activeIndex, isDesktop, goToSlide]);


  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full relative bg-gradient-to-br from-gray-950 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Explore Our <span className="text-gradient-secondary">Electric Fleet</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Engineered for performance, designed for sustainability.
          </p>
        </div>
      </div>

      {isDesktop ? (
        <div className="flex flex-col lg:flex-row w-full h-full relative">
          <div className="w-[400px] lg:w-[500px] flex-shrink-0 p-8 lg:p-12 flex items-center justify-center">
            <MobileVehicleCard vehicle={vehicles[activeIndex]} showImage={false} />
          </div>

          <div className="flex-1 overflow-hidden relative">
            <motion.div
              ref={slidesWrapperRef}
              className="flex flex-row w-full h-full"
              animate={controls}
              initial={{ x: 0 }}
            >
              {vehicles.map((v, i) => (
                <VehicleSlide key={v.id} vehicle={v} index={i} activeIndex={activeIndex} />
              ))}
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 hidden lg:block"
              aria-label="Previous Vehicle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 hidden lg:block"
              aria-label="Next Vehicle"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {vehicles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'bg-white w-6' : 'bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-6 md:px-12 lg:px-24 pb-24 relative max-w-2xl mx-auto">
       
              <div className="">
  <div className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full shadow-lg transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </div>

  <div className="swiper-button-next-custom absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 p-3 rounded-full shadow-lg transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </div>
</div>
                 <Swiper
            modules={[Pagination, Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}  navigation={{
    prevEl: '.swiper-button-prev-custom',
    nextEl: '.swiper-button-next-custom',
  }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full max-w-2xl mx-auto"
          >
            {vehicles.map((vehicle) => (
              <SwiperSlide key={vehicle.id}>
                <MobileVehicleCard vehicle={vehicle} showImage={true} />
              </SwiperSlide>
            ))}
          

          </Swiper>
            
          </div>
     
       
      )}
    </section>
  );
}