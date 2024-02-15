import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import SideMenu from '@/components/SideMenu/SideMenu';
import { ThemeProvider } from '@/provider/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '프론트엔드 포트폴리오',
  description: '프론트엔드 개발자 강범수의 포트폴리오입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
          <div className="flex flex-col min-h-[100%]">
            <Header />
            <SideMenu />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
