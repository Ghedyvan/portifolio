import { IBM_Plex_Sans } from "next/font/google";
import Head from "next/head";
import "../globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "G Vinícius",
  description: "Meus links",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={ibmPlexSans.className}>
        {children}
      </body>
    </html>
  );
}
