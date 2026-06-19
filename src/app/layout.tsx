import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaultflow | Modern Analytics",
  description: "A futuristic SaaS landing page for modern analytics teams.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
