import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppleGaramond from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const appleGaramond = AppleGaramond({
  src: [
    { path: "./fonts/AppleGaramond/AppleGaramond.ttf", weight: "400", style: "normal" },
    { path: "./fonts/AppleGaramond/AppleGaramond-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-apple-garamond",
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dockyard",
  description: "A monthly space for the quietly obsessed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${appleGaramond.variable} antialiased`}
      >
          
        {children}
      </body>
    </html>
  );
}
