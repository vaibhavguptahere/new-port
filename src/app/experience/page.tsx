'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    const experiencesData: Experience[] = [
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
        name: "Hackaccino - BU",
        desc: "Hackaccino is Bennett University's annual 24-hour hackathon, known for its intense energy, innovation, and student-driven problem solving. Organized by CSI, it brings together coders, coffee, and creativity to build tech solutions with real-world impact.",
        image: "lnm",
        category: "hacks",
        links: {
          view: "https://vaibhavguptahere.github.io/Amazon-Clone/",
          code: "https://github.com/vaibhavguptahere/Amazon-Clone"
        }
      },
      {
        name: "Google Soln Challenge 2025",
        desc: "A global competition powered by Google Developers, encouraging students to develop impactful tech projects aligned with the UN's Sustainable Development Goals.",
        image: "googlesoln",
        category: "hacks",
        links: {
          view: "https://dojomaster.netlify.app/",
          code: "https://github.com/vaibhavguptahere/DoJo-MasterTasks"
        }
      },
      {
        name: "Stellar Vision",
        desc: "Stellar Vision, part of Uphoria 2025, was a cosmic exploration event where we dived deep into the mysteries of the universe. From the Big Bang to quantum gravity, it sparked engaging discussions and ignited curiosity about the Theory of Everything.",
        image: "stellarvision",
        category: "others",
        links: {
          view: "https://secure-z.vercel.app/",
          code: "https://github.com/vaibhavguptahere/SecureZ"
        }
      },
      {
        name: "Startup Mahakumbh",
        desc: "A large-scale startup expo and entrepreneurial fair that brings together student startups, early-stage founders, and ecosystem enablers under one roof.",
        image: "mahakumbh",
        category: "others",
        links: {
          view: "#",
          code: "#"
        }
      },
      {
        name: "DeCrypt 2025- Foss BU",
        desc: "An open-source focused fest organized by the Free and Open Source Software community at Bennett University, promoting collaborative dev practices.",
        image: "decrypt",
        category: "others",
        links: {
          view: "https://vaibhavguptahere.github.io/NexusBlog-Website/",
          code: "https://github.com/vaibhavguptahere/NexusBlog-Website"
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
      },
      {
        name: "HYPE 2.0 - CSI BU",
        desc: "A flagship technical symposium hosted by the Computer Society of India, BU Chapter, combining competitions, workshops, and tech talks.",
        image: "hype",
        category: "others",
        links: {
          view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-4"
        }
      },
      {
        name: "Sawit AI Learnathon",
        desc: "The SAWiT Learnathon by GUVI was an exciting dive into Generative AI, where I built INDIVEDA, an AI tool that answers questions based on the Constitution of India. It was an enriching experience blending tech with civic knowledge!",
        image: "guvi",
        category: "hacks",
        links: {
          view: "https://www.linkedin.com/posts/activity-7260577283806015488-bmUp?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-5"
        }
      },
      {
        name: "Front End Development - HTML",
        desc: "Certification modules that cover the foundations of front-end development, focusing on HTML structure and CSS styling techniques.",
        image: "html",
        category: "coding",
        links: {
          view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-4"
        }
      },
      {
        name: "Front End Development - CSS",
        desc: "Certification modules that cover the foundations of front-end development, focusing on HTML structure and CSS styling techniques.",
        image: "css",
        category: "coding",
        links: {
          view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-4"
        }
      },
      {
        name: "Web Designing",
        desc: "A combined certification highlighting web design principles—UI layouts, responsive design, and visual aesthetics using HTML/CSS.",
        image: "webd",
        category: "coding",
        links: {
          view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/exp-4"
        }
      }
    ];
    
    setExperiences(experiencesData);
    setFilteredExperiences(experiencesData);
  }, []);

  const filterExperiences = (category: string) => {
    setActiveFilter(category);
    if (category === '*') {
      setFilteredExperiences(experiences);
    } else {
      setFilteredExperiences(experiences.filter(exp => exp.category === category));
    }
  };

  const filters = [
    { key: '*', label: 'All' },
    { key: 'hacks', label: 'Hacks' },
    { key: 'coding', label: 'Coding' },
    { key: 'skills', label: 'Skills' },
    { key: 'others', label: 'Others' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#57059e] to-[#4a00e0] pt-28">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[10%] h-[6.5rem] bg-white shadow-md">
        <Link href="/" className="text-[1.9rem] font-bold text-[#0E2431] hover:text-[#fc8c05] transition-colors">
          <i className="fab fa-vuejs text-[2.2rem]"></i>aibhav
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-10">
            <li><Link href="/#home" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Home</Link></li>
            <li><Link href="/#about" className="text-[#0E2431] hover:text-[#011aff] font-semibold">About</Link></li>
            <li><Link href="/#skills" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Skills</Link></li>
            <li><Link href="/#education" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Education</Link></li>
            <li><Link href="/#work" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Work</Link></li>
            <li><Link href="/#experience" className="text-[#011aff] border-b-2 border-[#011aff] pb-2 font-semibold">Experience</Link></li>
            <li><Link href="/#contact" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section className="px-[9%] py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8 p-4">
            <i className="fas fa-laptop-code mr-4"></i>
            Experience <span className="text-yellow-300">& Certifications</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => filterExperiences(filter.key)}
                className={`px-8 py-4 border border-white rounded-md font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white hover:text-black'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-[30rem] relative group tilt"
                style={{ width: '380px', margin: '1rem auto' }}
              >
                <Image
                  src={`/${exp.image}.png`}
                  alt={exp.name}
                  width={380}
                  height={300}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                <div className="absolute top-[85%] left-0 w-full h-full bg-white/90 flex flex-col transition-all duration-300 group-hover:top-[25%]">
                  <div className="flex justify-between items-center h-[4.5rem] w-full px-4 bg-[#ffd900]">
                    <h3 className="text-2xl font-bold">{exp.name}</h3>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center flex-1">
                    <p className="text-lg">{exp.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/#experience"
              className="inline-block px-12 py-6 border-2 border-white text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 font-nunito"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ExperiencePage;