// src/app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Providers from "./StoreProvider";
import PopBob from "@/components/popbob/index";

// import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B.Laban",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
        >
          <Providers>
            <Header />
            <main className="flex-1">{children}</main>
            <PopBob />
            {/* <Toaster position="top-center" richColors /> */}
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
