import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cls from "classnames";

const antiqua = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-antiqua",
});

export const metadata: Metadata = {
  title: "FLORINGERIE",
  description: "Сайт нижнего белья Floringerie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Providers>
        <body className={cls(`${antiqua.variable} text-slate-800 font-serif flex flex-col relative w-full h-[100dvh] scroll-none`, {
          "text-sm": true,
          "sm:text-base": true,
          "md:text-lg": true,
          "lg:text-xl": true,
        })}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
