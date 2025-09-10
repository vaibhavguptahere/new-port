'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Experience {
  name: string;
  desc: string;
  image: string;
  category: string;
  links?: {
    view: string;
    code: string;
  };
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const experiences = useMemo<Experience[]>(() => [
    {
      name: "Innovate25 - BU",
      desc: "A prestigious innovation-centric hackathon where teams showcase cutting-edge solutions to real-world problems using technology and AI conducted by Microsoft in collaboration with Bennett University.",
      image: "techarena",
      category: "hacks"
    },
    {
      name: "Tech Arena - BU",
      desc: "A university-level technical showcase where students present innovative software or hardware solutions and compete for top honors.",
      image: "techarena",
      category: "hacks",
      links: {
        view: "https://github.com/vaibhavguptahere/FitAura-TheFitnessSolution",
        code: "https://github.com/vaibhavguptahere/FitAura-TheFitnessSolution"
      }
    },
    {
      name: "LNM Hacks 7.0",
      desc: "One of the largest student hackathons hosted by LNMIIT, Jaipur—focused on solving diverse problem statements across domains like fintech, healthtech, and sustainability.",
      image: "lnm",
      category: "hacks",
      links: {
        view: "https://bullseyetrak.netlify.app/",
        code: "https://github.com/vaibhavguptahere/BullsEye-StockScreener"
      }
    },
    {
      name: "Career Essentials in Gen AI",
      desc: "A foundational course series focused on career growth and AI readiness—helping learners adapt to the evolving GenAI landscape.",
      image: "genai",
      category: "skills",
      links: {
        view: "https://www.linkedin.com/posts/activity-7266748707226677248-J4Ur?utm_source=share&utm_medium=member_desktop",
        code: "https://github.com/vaibhavguptahere/FitTrack"
      }
    },
    {
      name: "Python Fundamentals - Infosys",
      desc: "A beginner-friendly programming course offered by Infosys Springboard covering the basics of Python through practical exercises.",
      image: "python",
      category: "coding"
    },
    {
      name: "Java Programming - Infosys",
      desc: "A skill-enhancement certification in Java development, providing insights into OOP, syntax, and logical building using Java.",
      image: "java",
      category: "coding",
      links: {
        view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
        code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-4"
      }
    }
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="bg-gradient-to-b from-[#57059e] to-[#4a00e0] py-20 px-4 lg:px-[9%]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-8 p-4"
        >
          <i className="fas fa-laptop-code mr-4"></i>
          Experience <span className="text-yellow-300">& Certifications</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-7xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.name}-${index}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-[30rem] relative group experience-card mx-auto"
              style={{ maxWidth: '380px', willChange: 'transform' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={`/${exp.image}.png`}
                  alt={exp.name}
                  width={380}
                  height={300}
                  className="w-full h-full object-cover"
                  draggable={false}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                <div className="absolute top-[85%] left-0 w-full h-full bg-white/90 flex flex-col transition-all duration-300 group-hover:top-[25%]">
                  <div className="flex justify-between items-center h-[4.5rem] w-full px-4 bg-[#ffd900]">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2">{exp.name}</h3>
                  </div>
                  
                  <div className="p-4 lg:p-8 flex flex-col justify-center flex-1">
                    <p className="text-sm md:text-base lg:text-lg line-clamp-4">{exp.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <Link
            href="/experience"
            className="inline-block px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 font-nunito btn-primary"
          >
            <span className="mr-2">View All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;