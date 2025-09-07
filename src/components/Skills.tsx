'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const skillsData: Skill[] = [
      {
        name: "HTML5",
        icon: "https://img.icons8.com/color/48/000000/html-5--v1.png"
      },
      {
        name: "CSS3",
        icon: "https://img.icons8.com/color/48/000000/css3.png"
      },
      {
        name: "JavaScript",
        icon: "https://img.icons8.com/color/48/000000/javascript--v1.png"
      },
      {
        name: "TailwindCSS",
        icon: "https://img.icons8.com/color/48/000000/tailwindcss.png"
      },
      {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/48/000000/bootstrap.png"
      },
      {
        name: "ReactJS",
        icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
      },
      {
        name: "MongoDB",
        icon: "https://img.icons8.com/color/48/000000/mongodb.png"
      },
      {
        name: "ExpressJS",
        icon: "https://img.icons8.com/fluency/48/000000/node-js.png"
      },
      {
        name: "NodeJS",
        icon: "https://img.icons8.com/color/48/000000/nodejs.png"
      },
      {
        name: "NextJS",
        icon: "https://img.icons8.com/color/48/ffffff/nextjs.png"
      },
      {
        name: "Python",
        icon: "https://img.icons8.com/color/48/000000/python--v1.png"
      },
      {
        name: "Java",
        icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
      },
      {
        name: "Git",
        icon: "https://img.icons8.com/color/48/000000/git.png"
      },
      {
        name: "GitHub",
        icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
      }
    ];
    setSkills(skillsData);
  }, []);

  return (
    <section id="skills" className="min-h-[53vh] bg-gradient-to-b from-[#57059e] to-[#4a00e0] py-20 px-[9%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          <i className="fas fa-laptop-code mr-4"></i>
          Skills & <span className="text-yellow-300">Abilities</span>
        </h2>

        <div className="bg-black/40 rounded-2xl p-8 w-[90%] mx-auto mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 10px rgba(0, 2, 68, 0.8)",
                  backgroundColor: "rgba(0, 0, 0, 0.9)"
                }}
                className="bg-black/90 rounded-2xl p-4 shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-4 mt-4">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                  <span className="text-2xl font-medium text-white text-center">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;