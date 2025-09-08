'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  name: string;
  desc: string;
  image: string;
  category: string;
  links: {
    view: string;
    code: string;
  };
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    const projectsData: Project[] = [
      {
        name: "Faktify – Fake News Detection",
        desc: "Faktify is an AI-powered fake news detection platform that verifies the authenticity of news articles. It features user authentication & community contributions",
        image: "faktify",
        category: "websites",
        links: {
          view: "https://faktify-fakenews.vercel.app/",
          code: "https://github.com/vaibhavguptahere/Faktify-FakeNewsDetection"
        }
      },
      {
        name: "Fitaura – Fitness Tracker",
        desc: "Fitaura is a modern fitness tracking application that helps users monitor workouts, track progress, and stay motivated.",
        image: "fitaura",
        category: "websites",
        links: {
          view: "https://github.com/vaibhavguptahere/FitAura-TheFitnessSolution",
          code: "https://github.com/vaibhavguptahere/FitAura-TheFitnessSolution"
        }
      },
      {
        name: "BullsEye – Stock Screener",
        desc: "Bullseye is a powerful stock market tracker and screening tool that enables users to monitor market trends, and get real-time updates.",
        image: "bullseye",
        category: "websites",
        links: {
          view: "https://bullseyetrak.netlify.app/",
          code: "https://github.com/vaibhavguptahere/BullsEye-StockScreener"
        }
      },
      {
        name: "Amazon Clone",
        desc: "This is a front-end implementation of Amazon. It showcases the essential design elements of Amazon's platform.",
        image: "amazon",
        category: "staticweb",
        links: {
          view: "https://vaibhavguptahere.github.io/Amazon-Clone/",
          code: "https://github.com/vaibhavguptahere/Amazon-Clone"
        }
      },
      {
        name: "DoJo - Master Tasks",
        desc: "Just like a dojo is a space for focused training and discipline, this app encourages you to cultivate daily productivity habits and build a routine that sticks.",
        image: "dojo",
        category: "websites",
        links: {
          view: "https://dojomaster.netlify.app/",
          code: "https://github.com/vaibhavguptahere/DoJo-MasterTasks"
        }
      },
      {
        name: "SecureZ",
        desc: "SecureZ is a smart and reliable password manager designed to keep your digital life safe and organized. It securely stores and manages your passwords.",
        image: "securez",
        category: "websites",
        links: {
          view: "https://secure-z.vercel.app/",
          code: "https://github.com/vaibhavguptahere/SecureZ"
        }
      },
      {
        name: "The Nexus Blog",
        desc: "The Nexus Blog is a versatile and modern blogging platform designed to cater to writers, content creators, and readers.",
        image: "blog",
        category: "staticweb",
        links: {
          view: "https://vaibhavguptahere.github.io/NexusBlog-Website/",
          code: "https://github.com/vaibhavguptahere/NexusBlog-Website"
        }
      },
      {
        name: "Dot New Skills",
        desc: "Dot New Skill is an interactive learning platform that offers users the opportunity to acquire and develop new skills in various fields.",
        image: "skills",
        category: "staticweb",
        links: {
          view: "https://vaibhavguptahere.github.io/DotNewSkills-Tailwind/",
          code: "https://github.com/vaibhavguptahere/DotNewSkills-Tailwind"
        }
      },
      {
        name: "FitTrak",
        desc: "Built with Python, it features unique functionalities to enhance fitness routines and support personalized wellness goals.",
        image: "fittrak",
        category: "python",
        links: {
          view: "https://www.linkedin.com/posts/activity-7266748707226677248-J4Ur?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/FitTrack"
        }
      },
      {
        name: "Weather App",
        desc: "The Weather App built using Python allows users to easily check current weather conditions, forecasts, and other meteorological data for any location.",
        image: "weather",
        category: "python",
        links: {
          view: "https://www.linkedin.com/posts/activity-7263428155334406144-rs7n?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/Project-7"
        }
      },
      {
        name: "Calculator GUI",
        desc: "The Python Calculator project is a user-friendly application that performs basic and advanced mathematical operations.",
        image: "calc",
        category: "python",
        links: {
          view: "https://www.linkedin.com/posts/activity-7259155956062707713-MPr3?utm_source=share&utm_medium=member_desktop",
          code: "https://github.com/vaibhavguptahere/Python-7-Streak/tree/main/Project-4"
        }
      },
      {
        name: "Glass Hover Card",
        desc: "Simple hover card design built using html and css.",
        image: "hovercard",
        category: "basicdesign",
        links: {
          view: "https://vaibhavguptahere.github.io/Glass-Hover_Card/",
          code: "https://github.com/vaibhavguptahere/Glass-Hover_Card"
        }
      },
      {
        name: "Login Page",
        desc: "It's a simple designed login page for the website built using Html and Css.",
        image: "login",
        category: "basicdesign",
        links: {
          view: "https://vaibhavguptahere.github.io/Login_Page/",
          code: "https://github.com/vaibhavguptahere/Login_Page"
        }
      },
      {
        name: "Contact Form",
        desc: "It features basic fields like name, email, and message, providing a clean and user-friendly design for easy communication.",
        image: "contact",
        category: "basicdesign",
        links: {
          view: "https://codepen.io/vaibhavguptahere/pen/rNEvrLg",
          code: "https://github.com/vaibhavguptahere/Contact_Form"
        }
      },
      {
        name: "Payment Form",
        desc: "The Payment Form project, built using HTML and CSS, allows users to securely input payment details such as credit card information and contact details.",
        image: "payment",
        category: "basicdesign",
        links: {
          view: "https://codepen.io/vaibhavguptahere/pen/bGPjvvo",
          code: "https://github.com/vaibhavguptahere/Payment_Form"
        }
      }
    ];
    
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  const filterProjects = (category: string) => {
    setActiveFilter(category);
    if (category === '*') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const filters = [
    { key: '*', label: 'All Projects' },
    { key: 'websites', label: 'Websites' },
    { key: 'staticweb', label: 'Static' },
    { key: 'python', label: 'Python' },
    { key: 'basicdesign', label: 'Basic Design' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010136] to-[#00003a] pt-28">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 lg:px-[10%] h-16 lg:h-[6.5rem] bg-white shadow-md">
        <Link href="/" className="text-[1.9rem] font-bold text-[#0E2431] hover:text-[#fc8c05] transition-colors">
          <i className="fab fa-vuejs text-[2.2rem]"></i>aibhav
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6 lg:space-x-10">
            <li><Link href="/#home" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Home</Link></li>
            <li><Link href="/#about" className="text-[#0E2431] hover:text-[#011aff] font-semibold">About</Link></li>
            <li><Link href="/#skills" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Skills</Link></li>
            <li><Link href="/#education" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Education</Link></li>
            <li><Link href="/#work" className="text-[#011aff] border-b-2 border-[#011aff] pb-2 font-semibold">Work</Link></li>
            <li><Link href="/#experience" className="text-[#0E2431] hover:text-[#011aff] font-semibold">Experience</Link></li>
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
            Projects <span className="text-yellow-300">Made</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => filterProjects(filter.key)}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-[30rem] relative group tilt project-card mx-auto"
                style={{ maxWidth: '380px' }}
              >
                <Image
                  src={`/${project.image}.png`}
                  alt={project.name}
                  width={380}
                  height={300}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                <div className="absolute top-[85%] left-0 w-full h-full bg-white/90 flex flex-col transition-all duration-300 group-hover:top-[25%]">
                  <div className="flex justify-between items-center h-[4.5rem] w-full px-4 bg-[#ffd900]">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center flex-1">
                    <p className="text-sm md:text-base lg:text-lg mb-4 lg:mb-8">{project.desc}</p>
                    <div className="flex justify-between">
                      <a
                        href={project.links.view}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 lg:px-6 py-3 bg-black text-white text-sm lg:text-lg rounded-lg hover:bg-[#310ae0f5] transition-colors mr-4"
                      >
                        <i className="fas fa-eye mr-2"></i>View
                      </a>
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 lg:px-6 py-3 bg-black text-white text-sm lg:text-lg rounded-lg hover:bg-[#310ae0f5] transition-colors"
                      >
                        Code <i className="fas fa-code ml-2"></i>
                      </a>
                    </div>
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
              href="/#work"
              className="inline-block px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white font-semibold text-base md:text-lg rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 font-nunito btn-primary"
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

export default ProjectsPage;