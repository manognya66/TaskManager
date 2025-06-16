//layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import SessionWrapper from '@/components/SessionWrapper';
import { Mulish, Space_Grotesk } from 'next/font/google';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mulish',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-spaceGrotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Task Flow',
  description: 'Manage your tasks easily!',
  icons: {
    icon: '/icons8-checklist-16.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mulish.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/icons8-checklist-16.svg" type="image/svg"/>
      </head>
      <body className="min-h-screen flex flex-col">
        <SessionWrapper>{children}</SessionWrapper>
      </body>
    </html>
  );
}
