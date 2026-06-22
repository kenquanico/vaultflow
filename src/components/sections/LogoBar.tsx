"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const logos = [
  { name: "Partner logo", src: "/logos/logo-wrapper.svg", width: 62, height: 20 },
  { name: "Partner logo", src: "/logos/logo-wrapper-1.svg", width: 87, height: 17 },
  { name: "Partner logo", src: "/logos/logo-wrapper-2.svg", width: 67, height: 21 },
  { name: "Partner logo", src: "/logos/logo-wrapper-3.svg", width: 143, height: 13 },
  { name: "Partner logo", src: "/logos/logo-wrapper-4.svg", width: 80, height: 25 },
  { name: "Partner logo", src: "/logos/logo-wrapper-5.svg", width: 120, height: 23 },
  { name: "Partner logo", src: "/logos/logo-wrapper-6.svg", width: 55, height: 20 },
];

export function LogoBar() {
  const marqueeLogos = [...logos, ...logos];
  const shouldReduceMotion = useReducedMotion();

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
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: 28, ease: "linear", repeat: Infinity }
          }
        >
          {marqueeLogos.map((logo, index) => (
            <Image
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="h-auto w-auto opacity-75 transition-opacity duration-150 ease-out hover:opacity-100"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
