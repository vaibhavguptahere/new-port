'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'work', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[10%] h-[6.5rem] bg-white shadow-md"
    >
      <a href="#home" className="text-[1.9rem] font-bold text-[#0E2431] hover:text-[#fc8c05] transition-colors">
        <i className="fab fa-vuejs text-[2.2rem]"></i>aibhav
      </a>

      <div
        className={`fas fa-bars text-3xl cursor-pointer text-[#18023f] md:hidden ${
          isMenuOpen ? 'fa-times rotate-180' : ''
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>

      <nav
        className={`navbar ${
          isMenuOpen ? 'nav-toggle' : ''
        } md:block fixed md:static top-[6.5rem] md:top-0 right-[-120%] md:right-0 w-3/4 md:w-auto h-full md:h-auto bg-[#0e0f31] md:bg-transparent transition-all duration-300 ${
          isMenuOpen ? 'right-0' : ''
        }`}
      >
        <ul className="flex flex-col md:flex-row items-start md:items-center p-4 md:p-0">
          {navItems.map((item) => (
            <li key={item.href} className="w-full md:w-auto mb-4 md:mb-0 md:ml-10">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block md:inline text-white md:text-[#0E2431] text-2xl md:text-[1.57rem] font-semibold p-4 md:p-2 transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-white md:text-[#011aff] border-b-2 border-[#011aff]'
                    : 'hover:text-white md:hover:text-[#011aff] md:hover:border-b-2 md:hover:border-[#011aff]'
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