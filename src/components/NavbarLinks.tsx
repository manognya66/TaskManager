'use client';

import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { useNavbarNavigation } from '@/hooks/useNavbarNavigation';

interface Props {
  onMobileClick?: () => void;
}

export default function NavbarLinks({ onMobileClick }: Props) {
  const { isSignedIn, navigateTo, handleLogout } = useNavbarNavigation();

  const linkClass =
    'relative text-lg font-semibold text-white hover:text-blue-400 transition-all group block py-1 cursor-pointer';

  const renderLink = (href: string, label: string) => (
    <button
      onClick={() => navigateTo(href, onMobileClick)}
      className={linkClass}
    >
      {label}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
      {isSignedIn ? (
        <>
          {renderLink('/add-tasks', 'Add Tasks')}
          {renderLink('/view-tasks', 'View Tasks')}
          {renderLink('/progress-tracking', 'Progress')}
          {renderLink('/user-profile', 'Profile')}
          <button
            onClick={() => handleLogout(onMobileClick)}
            className="text-white hover:text-red-400 hover:scale-110 transition duration-300 md:ml-2"
            title="Logout"
          >
            <FaArrowRightFromBracket className="h-5 w-5 cursor-pointer" />
          </button>
        </>
      ) : (
        <>
          {renderLink('/signin', 'Sign in')}
          {renderLink('/signup', 'Sign up')}
        </>
      )}
    </div>
  );
}
