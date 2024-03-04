import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "강범수 포트폴리오",
    template: "%s - 강범수 포트폴리오",
  },
  description: "프론트엔드 강범수의 포트폴리오입니다.",
  metadataBase: new URL("https://portfolio-webkbs.vercel.app/"),
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-[100%] flex-col">
            <Header />
            <SideMenu />
            {children}
            {modal}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
