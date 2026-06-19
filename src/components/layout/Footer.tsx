import Image from "next/image";

const footerColumns = [
  {
    title: "Contact",
    lines: [
      "Work inquiries: work@vaultflow.com",
      "PR and speaking: press@vaultflow.com",
      "New business: newbusiness@vaultflow.com",
    ],
  },
  {
    title: "Careers",
    lines: ["Careers@vaultflow.com"],
  },
  {
    title: "Address",
    lines: ["398 11th Street, Floor 2", "San Francisco, CA 94103"],
  },
  {
    title: "Social",
    lines: ["Twitter", "Instagram", "TikTok"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="container pb-10 pt-24 md:pt-32">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {footerColumns.map((column) => (
          <section key={column.title}>
            <h2 className="mb-4 font-display text-xl font-semibold text-foreground">
              {column.title}
            </h2>
            <div className="space-y-1 text-body-sm text-muted-foreground">
              {column.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-6 border-t border-white/5 pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2023 Vaultflow. All Rights Reserved.</p>
        <a href="#" className="flex items-center gap-2 text-foreground" aria-label="Vaultflow home">
          <Image src="/vaultflow-mark.svg" alt="" width={20} height={20} className="h-5 w-5" />
          <span className="font-display text-base font-bold">Vaultflow</span>
        </a>
      </div>
    </footer>
  );
}
