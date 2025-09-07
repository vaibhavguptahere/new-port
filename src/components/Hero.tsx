'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

declare global {
  interface Window {
    particlesJS: any;
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
      if ((window as any).Typed) {
        new (window as any).Typed(".typing-text", {
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
      document.head.removeChild(script);
      document.head.removeChild(typedScript);
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
    <section id="home" className="relative min-h-screen flex flex-wrap gap-6 items-center px-[9%] py-8">
      <div id="particles-js" ref={particlesRef}></div>
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 min-w-[40rem] pt-4 z-10"
      >
        <h2 className="text-5xl font-bold text-[#002057] mb-4">
          Hi There,<br />
          I&apos;m Vaibhav <span className="text-[#ff7b00]">Gupta</span>
        </h2>
        <p className="text-2xl text-black font-semibold py-4">
          i am into <span className="typing-text text-[#940808]"></span>
        </p>
        
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-4 px-12 py-6 bg-[#2506ad] text-white font-bold text-lg rounded-full shadow-lg hover:bg-[#1a047e] transition-all duration-300"
        >
          <span className="mr-2">About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </motion.a>

        <div className="mt-36">
          <ul className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.li
                key={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`inline-flex items-center justify-center w-11 h-11 text-2xl text-[#00d9ff] bg-[#09011b] rounded-full transition-all duration-200 hover:text-white ${social.hoverColor}`}
                >
                  <i className={social.icon}></i>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 min-w-[40rem] z-10"
      >
        <div className="ml-24">
          <Image
            src="/favicon.png"
            alt="Vaibhav Gupta"
            width={400}
            height={400}
            className="w-[70%] rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 tilt"
            draggable={false}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;