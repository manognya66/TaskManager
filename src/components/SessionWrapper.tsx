'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { ReactNode } from 'react';
import { ToastProvider } from '@/components/CustomToast';

type Props = {
  children: ReactNode;
};

export default function SessionWrapper({ children }: Props) {
  return (
    <ClerkProvider>
      <ToastProvider/>
      {children}
    </ClerkProvider>
);
}
