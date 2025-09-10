'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

declare global {
  interface Window {
    particlesJS: any;
    Typed: any;
  }
}

const Hero = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#000000"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#000000",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };
    document.head.appendChild(script);

    // Load typed.js script
    const typedScript = document.createElement('script');
    typedScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js';
    typedScript.onload = () => {
      if (window.Typed) {
        new window.Typed(".typing-text", {
          strings: ["frontend development", "web designing", "web development"],
          loop: true,
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 500,
        });
      }
    };
    document.head.appendChild(typedScript);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(typedScript)) {
        document.head.removeChild(typedScript);
      }
    };
  }, []);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/vaibhavguptahere-/",
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      hoverColor: "hover:bg-[#007bb6]"
    },
    {
      href: "https://github.com/vaibhavguptahere",
      icon: "fab fa-github",
      label: "GitHub",
      hoverColor: "hover:bg-[#0e0e0e]"
    },
    {
      href: "https://www.instagram.com/vaibhavgupta1_8/",
      icon: "fab fa-instagram",
      label: "Instagram",
      hoverColor: "hover:bg-[#ee00da]"
    }
  ];

  return (
    <section id="home" className="hero-gradient relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-[9%] py-20 gap-12 overflow-hidden">
      <div id="particles-js" ref={particlesRef}></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 min-w-0 max-w-3xl z-10 text-center lg:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi There,<br />
            I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Vaibhav</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Gupta</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium py-6 mb-8"
        >
          I am into <span className="typing-text text-yellow-300 font-bold"></span>
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 pulse-animation"
          >
            <span className="mr-2">About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </motion.a>
          
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white text-white font-bold text-base md:text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            <span className="mr-2">My Work</span>
            <i className="fas fa-briefcase"></i>
          </motion.a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 lg:mt-20"
        >
          <ul className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <motion.li
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`inline-flex items-center justify-center w-14 h-14 text-2xl text-white bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white hover:text-gray-800 hover:scale-110 hover:shadow-xl`}
                >
                  <i className={social.icon}></i>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 min-w-0 max-w-xl z-10 flex justify-center lg:justify-end"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <Image
            src="/favicon.png"
            alt="Vaibhav Gupta"
            width={500}
            height={500}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full shadow-2xl cursor-pointer hover:shadow-3xl transition-all duration-500 floating-animation optimized-image"
            draggable={false}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;