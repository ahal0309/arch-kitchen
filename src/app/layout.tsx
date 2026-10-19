import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toronto's Best Kitchen Contractor | Arch Kitchen Cabinets",
  description:
    "Transform your kitchen with Arch Kitchen Cabinets, Toronto's top kitchen remodeler. We offer full kitchen renovations, custom cabinet installations and repairs, countertop solutions, and flooring services.",
  keywords: [
    "Toronto's Best Kitchen Contractor",
    "Arch Kitchen Cabinets",
    "Toronto kitchen remodeler",
    "full kitchen renovations Toronto",
    "custom cabinet installations",
    "countertop solutions Toronto",
    "flooring services Toronto",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="antialiased bg-[#fbf9f5] text-[#2c2b29] font-sans selection:bg-[#cbb17b] selection:text-white">
        {children}
      </body>
    </html>
  );
}
