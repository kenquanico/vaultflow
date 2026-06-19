"use client";

import { useRef } from "react";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";

const codeLines = [
  "// addNumbersToToken",
  "function addNumbersToToken(num1, num2) {",
  "  let sum = num1 + num2;",
  "  let token = {",
  "    value: sum,",
  "    value: sum,",
  "  };",
  "  return token;",
  "}",
];

export function WideFeatureCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="container py-8 md:py-12">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 34 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
      >
        <Card className="overflow-hidden hover:border-primary/70 hover:shadow-card-glow">
          <CardContent className="grid min-h-[360px] items-center gap-12 md:grid-cols-[0.92fr_1fr] lg:p-14">
            <div>
              <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-br from-accent-pink to-primary shadow-[0_0_30px_hsl(var(--accent-pink)/0.45)]">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-heading-md text-foreground">
                Code collaboration
              </h3>
              <p className="mt-4 max-w-xl text-body-sm text-muted-foreground">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where it&apos;s
                coming from. Whether you&apos;re integrating data from multiple
                sources or working with a team of developers, our synchronization
                technology makes it easy to collaborate and ensure that your data
                is consistent and reliable.
              </p>
              <a
                href="#"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-white/40 underline-offset-4 transition-colors hover:text-primary-glow"
              >
                View code collaboration
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-2xl border border-white/15 bg-vault-black/90 p-1 shadow-[0_0_50px_hsl(var(--primary)/0.18)]">
              <div className="rounded-t-xl border-b border-white/10 px-5 py-3 text-caption text-vault-lavender">
                DigitalToken.js
              </div>
              <pre className="overflow-x-auto px-5 py-5 text-caption leading-7 text-vault-lavender">
                <code>
                  {codeLines.map((line, index) => (
                    <span key={`${line}-${index}`} className="block">
                      <span className="mr-5 text-white/25">{index + 1}</span>
                      <span className={line.includes("let") || line.includes("return") ? "text-accent-pink" : ""}>
                        {line}
                      </span>
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
