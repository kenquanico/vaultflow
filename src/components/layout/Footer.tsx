import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Customers", href: "#customers" },
      { label: "Trust", href: "#trust" },
      { label: "Careers", href: "mailto:careers@vaultflow.com" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "sales@vaultflow.com", href: "mailto:sales@vaultflow.com" },
      { label: "support@vaultflow.com", href: "mailto:support@vaultflow.com" },
      { label: "press@vaultflow.com", href: "mailto:press@vaultflow.com" },
    ],
  },
  {
    title: "Address",
    links: [
      { label: "398 11th Street, Floor 2", href: "#contact" },
      { label: "San Francisco, CA 94103", href: "#contact" },
      { label: "Remote teams worldwide", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="container pb-10 pt-24 md:pt-32">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
                {column.title}
              </h2>
              <div className="space-y-2 text-body-sm text-muted-foreground">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vaultflow. All rights reserved.</p>
          <a href="#" className="flex items-center gap-2 text-foreground" aria-label="Vaultflow home">
            <Image src="/vaultflow-mark.svg" alt="" width={20} height={20} className="h-5 w-5" />
            <span className="font-display text-base font-bold">Vaultflow</span>
          </a>
        </div>
      </Reveal>
    </footer>
  );
}
