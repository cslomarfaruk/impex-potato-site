"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { ContactForm } from "@/components/ContactForm";
import { ProductsAccordion } from "@/components/ProductsAccordion";

const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } }
  };

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} className={`flex flex-wrap ${className}`}>
      {words.map((word, idx) => (
        <motion.span variants={child} key={idx} className="mr-[0.3em] inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const clients = [
    "akij.png", "akij.svg", "beximco.svg", "bmtf.svg", "friendship.png",
    "kazi-farms.png", "meghna.svg", "olympic.png", "rahimafrooz.png",
    "sq-group.png", "square.png", "syngenta.svg"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col relative bg-transparent">
      
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#FAFAFA]">
        <div className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-brand-green) 2px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <section className="relative w-full min-h-[85vh] flex items-center bg-transparent border-b border-brand-green overflow-hidden py-16 md:py-24">

        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full relative z-10">

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={slideInLeft}
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-brand-green mb-6 leading-tight whitespace-nowrap font-heading"
            >
              Impex Eco Tech Limited
            </motion.h1>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={slideInLeft}
              className="h-2 bg-brand-red mb-8 w-16"
            ></motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={slideInLeft}
              className="text-base md:text-lg lg:text-xl text-black leading-relaxed font-bold mb-6 text-center lg:text-left"
            >
              A pioneering, forward-thinking enterprise dedicated to delivering next-generation{" "}
              <span className="font-brush text-brand-green leading-snug relative inline" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 100 20'%3E%3Cpath d='M0,10 Q15,6 30,12 T60,8 T100,12 L100,16 Q60,12 30,16 T0,14 Z' fill='%23E31837' opacity='0.85'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat-x',
                backgroundPosition: 'bottom 2px center',
                backgroundSize: '150px 14px',
                paddingBottom: '4px'
              }}>
                environmental engineering, water purification, sustainable agriculture, and renewable energy solutions.
              </span>
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={slideInLeft}
              className="text-sm md:text-base lg:text-lg text-black/80 leading-relaxed mb-10 font-medium max-w-2xl"
            >
              <AnimatedText text="We empower industrial, commercial, and agricultural sectors to minimize their environmental footprint while optimizing resource efficiency. By bridging the gap between advanced material science and ecological engineering, we provide our clients with the tools needed to build a cleaner, more sustainable tomorrow." className="justify-center lg:justify-start" />
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              variants={slideInLeft}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#products" className="bg-brand-green text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-green/90 transition-colors inline-block text-center rounded-none shadow-[4px_4px_0px_0px_var(--color-brand-red)] active:translate-y-1 active:translate-x-1 active:shadow-none">
                Our Solutions
              </Link>
              <Link href="#contact" className="border-2 border-brand-green bg-white text-brand-green px-8 py-4 font-bold uppercase tracking-widest hover:bg-brand-green hover:text-white transition-colors inline-block text-center rounded-none">
                Get in Touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={slideInRight}
            className="flex-1 w-full max-w-[500px] lg:max-w-none aspect-[4/3] lg:aspect-auto lg:h-[600px] relative mt-12 lg:mt-0 mx-auto"
          >
            
            <div className="absolute w-[38%] lg:w-56 aspect-square lg:h-56 top-0 md:top-[10%] left-[5%] shadow-[4px_4px_0px_0px_var(--color-brand-green)] border-2 border-brand-green bg-white z-30 group hover:z-50 transition-all duration-300">
              <Image src="/images/products/bandix-1.png" alt="Bondix" fill sizes="(max-width: 768px) 50vw, 30vw" quality={100} unoptimized className="object-contain p-2 md:p-4 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="absolute w-[32%] lg:w-48 aspect-square lg:h-48 top-[15%] md:top-[5%] right-[5%] md:right-[10%] shadow-[4px_4px_0px_0px_var(--color-brand-red)] border-2 border-brand-red bg-white z-20 group hover:z-50 transition-all duration-300">
              <Image src="/images/products/Activated carbon Powder.png" alt="Activated Carbon Powder" fill sizes="(max-width: 768px) 50vw, 30vw" quality={100} unoptimized className="object-cover p-2 md:p-3 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="absolute w-[35%] lg:w-52 aspect-square lg:h-52 top-[38%] md:top-[35%] left-[25%] md:left-[30%] shadow-[4px_4px_0px_0px_var(--color-brand-green)] border-2 border-brand-green bg-white z-40 group hover:z-50 transition-all duration-300">
              <Image src="/images/products/Activated carbon Chips.png" alt="Activated Carbon Chips" fill sizes="(max-width: 768px) 50vw, 30vw" quality={100} unoptimized className="object-cover p-2 md:p-3 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="absolute w-[30%] lg:w-44 aspect-square lg:h-44 bottom-[10%] md:bottom-[15%] left-[5%] md:left-[5%] shadow-[4px_4px_0px_0px_var(--color-brand-red)] border-2 border-brand-red bg-white z-20 group hover:z-50 transition-all duration-300">
              <Image src="/images/products/Granular hydrated ferric Oxide-1.png" alt="Granular hydrated ferric Oxide" fill sizes="(max-width: 768px) 50vw, 30vw" quality={100} unoptimized className="object-cover p-2 md:p-3 group-hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="absolute w-[32%] lg:w-48 aspect-square lg:h-48 bottom-[5%] md:bottom-[5%] right-[10%] md:right-[15%] shadow-[4px_4px_0px_0px_var(--color-brand-green)] border-2 border-brand-green bg-white z-30 group hover:z-50 transition-all duration-300">
              <Image src="/images/products/Nanoporous 6 mm.png" alt="Nanoporous 6 mm" fill sizes="(max-width: 768px) 50vw, 30vw" quality={100} unoptimized className="object-cover p-2 md:p-3 group-hover:scale-110 transition-transform duration-700" />
            </div>

          </motion.div>
        </div>
      </section>

      <section id="products" className="py-32 scroll-mt-20 border-b border-brand-green bg-zinc-50/90 relative backdrop-blur-sm z-10 overflow-hidden">

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-green mb-4 font-heading">Core Solutions</h2>
            <div className="w-24 h-1 bg-brand-red"></div>
          </div>

          <ProductsAccordion categories={categories} />
        </motion.div>
      </section>

      <section className="py-32 border-b border-brand-green bg-transparent relative z-10 overflow-hidden">

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-xl font-bold uppercase tracking-widest text-brand-green mb-16 text-center font-heading">Trusted By Industry Leaders</motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 transition-all duration-500">
            {clients.map((client, i) => (
              <motion.div
                variants={fadeInUp}
                key={client}
                className="relative w-24 h-12 md:w-32 md:h-16"
              >
                <Image
                  src={`/images/clients/${client}`}
                  alt={client.split('.')[0]}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-32 scroll-mt-20 bg-brand-green-light/90 relative overflow-hidden backdrop-blur-md z-10">
        
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none transform translate-x-1/3 -translate-y-1/4">
          <Image
            src="/images/brand/logo_emblem.png"
            alt="Watermark"
            width={800}
            height={800}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-brand-green mb-4 font-heading">Get In Touch</h2>
              <div className="w-16 h-1 bg-brand-red mb-8"></div>

              <p className="text-lg text-black mb-12 max-w-md font-medium">
                Reach our team directly for product pricing, technical queries, or to schedule an in-person consultation at our office.              </p>

              <div className="flex flex-col gap-8 mb-12">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">Email</span>
                  <a href="mailto:info@impexecotech.com" className="text-xl font-bold text-black hover:text-brand-red transition-colors">info@impexecotech.com</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">Phone & WhatsApp</span>
                  <a href="tel:+8801927976323" className="text-xl font-bold text-black hover:text-brand-red transition-colors">01927-976323</a>
                  <a href="tel:+8801822419089" className="text-xl font-bold text-black hover:text-brand-red transition-colors">01822-419089</a>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green mb-1">Head Office</span>
                  <p className="text-lg font-bold max-w-sm mb-3 text-black">
                    Navana Rahim Ardent, 6th Floor, Suite C-6, 185 Shahid Sayed Nazrul Islam Shoroni, Dhaka-1000, Bangladesh.
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Navana+Rahim+Ardient/@23.7379416,90.4089215,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b8f5052d5d4d:0xa723291dc420079e!8m2!3d23.7379416!4d90.4089215!16s%2Fg%2F11b67v7mqj"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm font-bold uppercase tracking-wider text-brand-red hover:text-white hover:bg-brand-red px-3 py-2 -ml-3 transition-colors w-fit border border-transparent hover:border-brand-red"
                  >
                    Get Directions in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 border-2 border-brand-green shadow-[8px_8px_0px_0px_var(--color-brand-green)]">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-brand-green font-heading">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
