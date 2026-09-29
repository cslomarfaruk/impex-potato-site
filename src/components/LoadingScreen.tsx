"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-50"
        >
          <div className="relative w-40 h-40 md:w-56 md:h-56 overflow-hidden rounded-full border-[6px] border-brand-green/20 bg-white flex items-center justify-center shadow-2xl">

            <Image
              src="/images/brand/logo_emblem.png"
              alt="Impex Eco Tech"
              width={120}
              height={120}
              className="absolute z-10 opacity-20 grayscale"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "-10%" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute bottom-0 left-0 right-0 top-0 z-20 overflow-hidden"
            >
              
              <div className="absolute top-[10px] bottom-0 left-0 right-0 bg-brand-green/20 backdrop-blur-[2px]"></div>

              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-[200%] h-8"
              >
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full text-brand-green/20 fill-current drop-shadow-md">
                   <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
              </motion.div>

              <Image
                src="/images/brand/logo_emblem.png"
                alt="Impex Eco Tech"
                width={120}
                height={120}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 drop-shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 font-heading font-black text-brand-green text-xl uppercase tracking-[0.4em]"
          >
            Impex Eco Tech
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-2 text-sm font-bold text-brand-red uppercase tracking-[0.2em]"
          >
            Initializing...
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
