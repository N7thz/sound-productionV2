import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/theme-context";
import { AudioProvider } from "@/context/audio-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sound Production",
  description: "Radio indor and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
        >
          <AudioProvider>
            {children}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
