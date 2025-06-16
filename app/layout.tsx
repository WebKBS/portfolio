import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import { ThemeProvider } from "@/provider/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "강범수 포트폴리오",
    template: "%s - 강범수 포트폴리오",
  },
  description: "프론트엔드 강범수의 포트폴리오입니다.",
  metadataBase: new URL("https://portfolio-webkbs-projects.vercel.app/"),
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={inter.className}>
      <body>
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
            <SpeedInsights />
            <Analytics />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
