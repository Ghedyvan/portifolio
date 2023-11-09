import { IBM_Plex_Sans } from "next/font/google";
import { Inter } from 'next/font/google'
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "G Vinícius",
  description: "Minha página pessoal",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
