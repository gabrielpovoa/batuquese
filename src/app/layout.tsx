import type { Metadata } from "next";
import { Joti_One } from 'next/font/google';
import "./globals.css";
import { Footer } from "./sections/Footer";

const JotiOne = Joti_One({
  subsets: ['latin'],
  weight: ['400']
});

export const metadata: Metadata = {
  title: "BatuqueSE",
  description: "Conheça mais sobre os Orixas cultuados no batuque do Rio Grande do Sul🐏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JotiOne.className} antialiased p-3 flex flex-col items-center justify-between `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
