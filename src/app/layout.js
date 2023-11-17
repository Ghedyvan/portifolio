import { Inter } from 'next/font/google'
import Head from "next/head";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Oxanium } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: "G Vinícius",
  description: "Portifólio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
    
        {children}
        <Analytics />
      </body>
    </html>
  );
}
