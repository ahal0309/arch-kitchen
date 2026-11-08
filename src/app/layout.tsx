import type { Metadata } from "next";
import "./globals.css";
import ScrollAnimationProvider from "./ScrollAnimationProvider";

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=nohemi@400,300,500,600,700,200,100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
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
