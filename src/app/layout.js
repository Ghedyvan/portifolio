import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

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
        <SpeedInsights/>
      </body>
    </html>
  );
}
