//components/Footer.tsx
'use client';

'use client';

import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  return (
    <footer className="w-full max-w-screen-2xl mx-auto text-white dark:text-gray-200 px-4 sm:px-6 py-8 mt-16">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 sm:gap-6">
        {/* Logo and Info */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">Task Flow</h2>
          <p className="text-sm mt-1">Stay focused. Stay organized. ✨</p>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-2 text-sm">
          <HiOutlineMail className="w-5 h-5" />
          <a
            href="mailto:support@taskflow.app"
            className="hover:underline"
          >
            support@taskflow.app
          </a>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="footer w-full border-t border-white/20 mt-6 pt-4 text-center text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} Task Flow. All rights reserved.</p>
      </div>
    </footer>
  );
}

