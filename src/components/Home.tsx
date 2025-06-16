'use client';

import { motion } from 'framer-motion';
import { HiPlus } from 'react-icons/hi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureSection from './Features';
import { useStartTaskNavigation } from '@/hooks/handleStartNavigation';

export default function Home() {
  const { handleStartClick } = useStartTaskNavigation();

  return (
    <div className="min-h-screen py-2 w-full bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 py-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-5"
        >
          Effortless Task Management for Busy Minds
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-center max-w-2xl text-blue-800 dark:text-blue-200 mb-12"
        >
          Your all-in-one tool to plan, prioritize, and progress.
        </motion.p>

        {/* Features Section */}
        <FeatureSection />

        {/* CTA Button */}
        <motion.button
          type="button"
          onClick={handleStartClick}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white text-base sm:text-lg font-medium rounded-xl shadow cursor-pointer hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 hover:scale-105 transition-all duration-300"
        >
          <HiPlus className="w-6 h-6" />
          <span>Start Adding Your Tasks</span>
        </motion.button>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
