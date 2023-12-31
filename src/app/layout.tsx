import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/pages/home/Header';
import Providers from '@/providers';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Footer from '@/pages/home/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coverland Car Covers',
  description: 'The ultimate marketplace for car protection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="max-w-[1440px] mx-auto">
          <Providers>
            <Header />
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
            <Toaster />
          </Providers>
          <Footer />
        </main>
      </body>
    </html>
  );
}
