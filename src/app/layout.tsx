import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollAnimationProvider from "./ScrollAnimationProvider";

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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arch",
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
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=nohemi@400,300,500,600,700,200,100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="antialiased bg-[#fbf9f5] text-[#2c2b29] font-sans selection:bg-[#cbb17b] selection:text-white relative"
      >
        <div className="relative z-10">
          <ScrollAnimationProvider>{children}</ScrollAnimationProvider>
        </div>
      </body>
    </html>
  );
}
