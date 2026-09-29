"use client";

import { motion } from "framer-motion";

const symbols = ["H₂O", "CO₂", "O₃", "CH₄", "N₂", "NH₃", "SO₂"];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-20 pointer-events-none">
      {/* Hexagon Pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413264L0 86.60254037844386L0 51.96152422706632L30 34.64101615137754L60 51.96152422706632L60 86.60254037844386Z' fill='none' stroke='%230F7A3E' stroke-width='1' stroke-opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.92px'
        }}
      ></div>
      
      {/* Floating Symbols */}
      {symbols.map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-brand-green font-bold text-2xl md:text-4xl select-none"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {symbol}
        </motion.div>
      ))}
    </div>
  );
}
