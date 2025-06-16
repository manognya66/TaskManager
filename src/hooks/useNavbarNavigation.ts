'use client';

import { useRouter } from 'next/navigation';
import { useUser, useClerk } from '@clerk/nextjs';

export const useNavbarNavigation = () => {
  const router = useRouter();
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  const navigateTo = (path: string, onMobileClick?: () => void) => {
    router.push(path);
    if (onMobileClick) onMobileClick();
  };

  const handleLogout = async (onMobileClick?: () => void) => {
    await signOut();
    router.push('/');
    if (onMobileClick) onMobileClick();
  };

  return {
    isSignedIn,
    navigateTo,
    handleLogout,
  };
};
