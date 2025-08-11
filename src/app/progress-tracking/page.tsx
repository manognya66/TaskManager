import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressTracking from './ProgressTracking';

export default function ProgressTrackingPage() {
  return (
    <div className="min-h-screen py-2 flex flex-col bg-white md:bg-gray-900 text-gray-900 md:text-white">
      <Navbar />
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        <ProgressTracking />
      </main>
      <Footer />
    </div>
  );
}
