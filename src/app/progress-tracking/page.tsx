// src/app/progress-tracking/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressTracking from './ProgressTracking';

export default function ProgressTrackingPage() {
  return (
    <div className="min-h-screen bg-white py-2 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        <ProgressTracking />
      </main>
      <Footer />
    </div>
  );
}