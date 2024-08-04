import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

// const GameOfSquids = localFont({
//   src: '/fonts/Game-Of-Squids.otf',

//   display: 'swap',
// })

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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
