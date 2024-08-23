import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const GameOfSquids = localFont({
  src: 'fonts/Game-Of-Squids.otf',
});
// const GameOfSquids = localFont({
//   src: '/fonts/Game-Of-Squids.otf',

//   display: 'swap',
// })
const workSans = Work_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Saadia's Games",
  description: "Your favourite games now in Squid Game style",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" >
      <Head>
        <meta property="og:title" content="Saadia's Games" />
        <meta property="og:description" content="Your favourite games now in Squid Game style" />
        <meta property="og:image" content="/images/splash-screen.png" />
        <meta property="og:url" content="https://saadias-games.vercel.com" />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <body className={`${inter.className} ${workSans.className} ${GameOfSquids.className}`}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html >
  );
}
