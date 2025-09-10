'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 50);
    
    // Active section detection with throttling
    const sections = ['home', 'about', 'skills', 'education', 'work', 'experience', 'contact'];
    const scrollPosition = scrollY + 200;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          if (activeSection !== section) {
            setActiveSection(section);
          }
          break;
        }
      }
    }
  }, [activeSection]);

  useEffect(() => {
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = useCallback((href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-[10%] h-16 lg:h-20 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
      }`}
    >
      <a href="#home" className="text-xl lg:text-[1.9rem] font-bold text-[#0E2431] hover:text-[#fc8c05] transition-colors">
        <i className="fab fa-vuejs text-xl lg:text-[2.2rem]"></i>aibhav
      </a>

      <div
        className={`hamburger md:hidden ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav
        className={`navbar ${
          isMenuOpen ? 'nav-toggle' : ''
        } md:block`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-0 space-y-4 md:space-y-0">
          {navItems.map((item) => (
            <li key={item.href} className="w-full md:w-auto md:ml-6 lg:ml-8">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block md:inline text-white md:text-[#0E2431] text-lg lg:text-base font-semibold py-2 px-4 md:p-2 rounded-lg md:rounded-none transition-all duration-300 hover:bg-white/10 md:hover:bg-transparent ${
                  activeSection === item.href.slice(1)
                    ? 'text-yellow-300 md:text-[#011aff] bg-white/20 md:bg-transparent md:border-b-2 md:border-[#011aff]'
                    : 'hover:text-yellow-200 md:hover:text-[#011aff]'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;