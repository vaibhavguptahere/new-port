'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-white py-20 px-[9%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <i className="fas fa-user-alt mr-4"></i>
          About <span className="text-purple-600">Me</span>
        </h2>

        <div className="flex flex-wrap gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 min-w-[35rem] text-center"
          >
            <Image
              src="/profile2.jpg"
              alt="Vaibhav Gupta"
              width={300}
              height={400}
              className="w-[30rem] h-auto rounded-lg shadow-lg mx-auto hover:shadow-xl transition-shadow duration-300"
              draggable={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 min-w-[45rem] p-12"
          >
            <h3 className="text-3xl text-gray-800 mb-4">I&apos;m Vaibhav</h3>
            <span className="text-lg text-[#020133] font-semibold block mb-6">
              Front End Developer
            </span>
            
            <p className="text-lg mb-8 font-nunito font-semibold text-gray-700 leading-relaxed">
              I am passionate web developer and curious learner. I enjoy building interactive, 
              user-friendly websites using HTML, CSS, JavaScript, and React. Alongside web development, 
              I&apos;ve explored Python and built multiple projects to strengthen my skills. I&apos;ve also 
              participated in several hackathons, where I collaborated with teams to solve real-world 
              problems through code and creativity. Always eager to learn and grow, I&apos;m constantly 
              exploring new tools and technologies to become a better developer every day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 font-nunito font-semibold">
              <div>
                <p className="text-lg">
                  <span className="text-[#011aff] font-bold">email:</span> guptavaibhavg2005@gmail.com
                </p>
              </div>
              <div>
                <p className="text-lg">
                  <span className="text-[#011aff] font-bold">place:</span> Greater Noida, India
                </p>
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1m8aTvxHm_EXA5_AwzPdnd63rqyjJ0UtI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-6 bg-[#2506ad] text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-[#1a047e] transition-all duration-300 font-nunito"
            >
              <span className="mr-2">Resume</span>
              <i className="fas fa-chevron-right"></i>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;