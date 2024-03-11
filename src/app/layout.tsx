import type { Metadata } from "next";
import "./globals.css";
// import localFont from "@next/font/local";

// const brandFont = localFont({
//   src: "../assets/fonts/bwmodelica-regular-webfont.woff2",
//   weight: "400",
//   variable: "--font-bwmod",
// });

import { brandFont } from "../assets/fonts";

export const metadata: Metadata = {
  title: "The Lovidia Collective",
  description: "Your Long Covid Resource",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={brandFont.className}>{children}</body>
    </html>
  );
}
