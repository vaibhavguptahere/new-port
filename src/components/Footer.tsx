'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { href: '#home', label: 'home' },
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#education', label: 'education' },
    { href: '#work', label: 'work' },
    { href: '#experience', label: 'experience' },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/vaibhavguptahere-/",
      icon: "fab fa-linkedin",
      label: "LinkedIn"
    },
    {
      href: "https://github.com/vaibhavguptahere",
      icon: "fab fa-github",
      label: "GitHub"
    },
    {
      href: "mailto:guptavaibhavg2005@gmail.com",
      icon: "fas fa-envelope",
      label: "Mail"
    }
  ];

  return (
    <footer className="min-h-auto pt-0 bg-[#00012b]">
      <div className="flex justify-center flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 min-w-[25rem] m-10"
        >
          <h3 className="text-3xl text-white pb-4 font-normal">
            Vaibhav&apos;s Portfolio
          </h3>
          <p className="text-lg text-gray-300 py-3 normal-case">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
            <br /><br />
            Let&apos;s connect and embark together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 min-w-[25rem] m-10"
        >
          <h3 className="text-3xl text-white pb-4 font-normal">quick links</h3>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-lg text-gray-300 py-1 hover:text-[#ffae00] transition-colors"
            >
              <i className="fas fa-chevron-circle-right mr-2"></i>
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 min-w-[25rem] m-10"
        >
          <h3 className="text-3xl text-white pb-4 font-normal">contact info</h3>
          <p className="text-lg text-gray-300 py-3">
            <i className="fas fa-phone text-[#ffae00] pr-4"></i>
            +91 XXX-XXX-XXXX
          </p>
          <p className="text-lg text-gray-300 py-3">
            <i className="fas fa-envelope text-[#ffae00] pr-4"></i>
            guptavaibhavg2005@gmail.com
          </p>
          <p className="text-lg text-gray-300 py-3">
            <i className="fas fa-map-marked-alt text-[#ffae00] pr-4"></i>
            Greater Noida, India
          </p>
          
          <div className="flex flex-wrap py-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="h-16 w-16 p-4 text-center rounded-full text-lg mr-4 mb-2 transition-all duration-200 bg-gray-200 text-[#02094b] hover:bg-transparent hover:scale-95 hover:border hover:border-gray-400 hover:text-[#ffae00]"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pt-4 text-center text-lg font-nunito font-semibold text-white border-t border-white/20"
      >
        Designed with{' '}
        <i className="fa fa-heart text-[#e90606] mx-1 text-lg animate-pulse"></i>
        by{' '}
        <a
          href="https://www.linkedin.com/in/vaibhavguptahere-/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffae00] hover:underline"
        >
          vaibhav gupta
        </a>
      </motion.h1>
    </footer>
  );
};

export default Footer;