// src/app/user-profile/[[...rest]]/page.tsx
import { UserProfile } from '@clerk/nextjs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UserProfilePage() {
  return (
    <div className="min-h-screen py-2 w-full flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex flex-col flex-grow justify-center items-center px-4 sm:px-6 py-10 w-full max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
          User Profile & Configuration
        </h1>
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
}