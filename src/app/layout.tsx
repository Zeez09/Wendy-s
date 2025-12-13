import type { Metadata } from "next";
import { Geist, Geist_Mono, Red_Rose } from "next/font/google";
// @ts-ignore: CSS side-effect import without type declarations
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redRose = Red_Rose({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-red-rose",
});

export const metadata: Metadata = {
  title: "Ope.visualsuite",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redRose.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
