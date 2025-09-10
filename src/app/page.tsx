'use client';

import { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import './globals.css';

// Lazy load heavy components
const Projects = dynamic(() => import('../components/Projects'), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-[#000031] to-[#00002c] flex items-center justify-center">
    <div className="text-white text-xl">Loading Projects...</div>
  </div>
});

const Experience = dynamic(() => import('../components/Experience'), {
  loading: () => <div className="min-h-screen bg-gradient-to-b from-[#57059e] to-[#4a00e0] flex items-center justify-center">
    <div className="text-white text-xl">Loading Experience...</div>
  </div>
});

export default function Home() {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable developer tools shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 123 || // F12
          (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
          (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
          (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
          (e.ctrlKey && e.keyCode === 85)) { // Ctrl+U
        return false;
      }
    };

    // Page visibility change handler
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.title = "Portfolio | Vaibhav Gupta";
      } else {
        document.title = "Come Back To Portfolio";
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
}