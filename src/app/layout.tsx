import type { Metadata } from "next";
import "./globals.css";
import "./embla.css";
import "aos/dist/aos.css";

import { Space_Grotesk } from "next/font/google";
import { AOSInit } from "./components/common/AOS";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Positivus",
  description: "Navigating the digital landscape for success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
