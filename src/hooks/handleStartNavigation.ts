'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export const useStartTaskNavigation = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();

  const handleStartClick = () => {
    if (isSignedIn) {
      router.push('/add-tasks');
    } else {
      router.push('/login');
    }
  };

  return { handleStartClick };
};
