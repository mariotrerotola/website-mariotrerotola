import type { Metadata } from "next";
import React from "react"; // Add this import

// ... existing code ...

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
// Remove the import for Geist fonts
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

  // Remove the Geist font configuration
  // const geistSans = Geist({
  //   variable: "--font-geist-sans",
  //   subsets: ["latin"],
  // });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"],
  // });

  export const metadata: Metadata = {
    title: "My Website Title", // Update with your website title
    description: "A brief description of my website", // Update with your website description
    // Add any additional metadata you need
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="antialiased"> {/* Use default font */}
          {children}
        </body>
      </html>
    );
  }