"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About us", href: "#about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled
          ? "border-white/15 bg-vault-black/95"
          : "border-transparent bg-vault-black/70",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="Vaultflow home">
          <Image
            src="/vaultflow-mark.svg"
            alt=""
            width={22}
            height={22}
            priority
            className="h-5 w-5"
          />
          <span className="font-display text-base font-bold tracking-[-0.02em] text-foreground">
            Vaultflow
          </span>
        </a>

        <div className="hidden items-center gap-14 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button href="#download" size="sm">
            Download the app
          </Button>
          <Button href="#contact" variant="outline" size="sm">
            Talk to an expert
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-pill border border-white/10 text-foreground md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="container flex flex-col gap-4 pb-6 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-white/5 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="grid gap-3 pt-2">
              <Button href="#download">Download the app</Button>
              <Button href="#contact" variant="outline">
                Talk to an expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
