//@ts-nocheck
"use client"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createContext } from "react";
import { useState } from "react";
import {Theme,box} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const ThemeContext = createContext();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(true);
  return (
    <html lang="en">
      <body>
        <Theme appearance={isDark?"dark":"light"}>
          <ThemeContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
            {children}
          </ThemeContext.Provider>
        </Theme>
      </body>
    </html>
  );
}
