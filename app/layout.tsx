import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "361 Software House",
  description: "Software house based in Warsaw",
  icons: {
    icon: "/favicons.png",
    shortcut: "/favicons.png",
    apple: "/favicons.png",
  },
};

import ClientLayout from "./client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
