'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
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

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      }
    ];
    setProjects(projectsData.slice(0, 9).filter(project => project.category !== "android"));
  }, []);

  return (
    <section id="work" className="bg-gradient-to-b from-[#000031] to-[#00002c] py-20 px-[9%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8 p-4">
          <i className="fas fa-laptop-code mr-4"></i>
          Projects <span className="text-yellow-300">Made</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden h-[30rem] relative group tilt"
            >
              <Image
                src={`/${project.image}.png`}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                draggable={false}
              />
              
              <div className="absolute top-[85%] left-0 w-full h-full bg-white/90 flex flex-col transition-all duration-300 group-hover:top-[25%]">
                <div className="flex justify-between items-center h-[4.5rem] w-full px-4 bg-[#ffd900]">
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                </div>
                
                <div className="p-8 flex flex-col justify-center flex-1">
                  <p className="text-lg mb-8">{project.desc}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.links.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-6 bg-black text-white text-lg rounded-lg hover:bg-[#310ae0f5] transition-colors mr-8"
                    >
                      <i className="fas fa-eye mr-2"></i>View
                    </a>
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-10 py-6 bg-black text-white text-lg rounded-lg hover:bg-[#310ae0f5] transition-colors"
                    >
                      Code <i className="fas fa-code ml-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-block px-12 py-6 border-2 border-white text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-white hover:text-black transition-all duration-300 font-nunito"
          >
            <span className="mr-2">View All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;