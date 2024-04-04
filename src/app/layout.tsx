import React from 'react';
import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import Providers from '@/components/Providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wagmi Sample',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <Providers>
      <body className={inter.className}>{children}</body>
    </Providers>
  </html>
);

export default RootLayout;
