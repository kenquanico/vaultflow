"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Dell", src: "/logos/dell.svg", width: 120 },
  { name: "Zendesk", src: "/logos/zendesk.svg", width: 140 },
  { name: "Rakuten", src: "/logos/rakuten.svg", width: 140 },
  { name: "Pacific Funds", src: "/logos/pacific-funds.svg", width: 180 },
  { name: "NCR", src: "/logos/ncr.svg", width: 120 },
  { name: "Lattice", src: "/logos/lattice.svg", width: 140 },
  { name: "TED", src: "/logos/ted.svg", width: 100 },
];

export function LogoBar() {
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="container overflow-hidden py-14 text-center md:py-20">
      <p className="text-body-md text-muted-foreground">
        Trusted by teams at over{" "}
        <span className="font-semibold text-foreground">1,000+</span> of the
        world&apos;s leading organizations
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex w-max items-center gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        >
          {marqueeLogos.map((logo, index) => (
            <Image
              key={`${logo.name}-${index}`}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={32}
              className="h-8 w-auto opacity-55 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
