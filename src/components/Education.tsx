'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      title: "Bachelor of Engineering in Computer Science",
      institution: "Bennett University",
      period: "2024-2028 | Pursuing",
      image: "/college.jpeg"
    },
    {
      title: "D.A.V. Centenary Public School",
      institution: "Karnal, Haryana",
      period: "2008-2023 | Completed",
      image: "/school.jpg"
    }
  ];

  return (
    <section id="education" className="bg-[#e5ecfb] min-h-screen py-20 px-4 lg:px-[9%] flex items-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          <i className="fas fa-graduation-cap mr-4"></i>
          My <span className="text-purple-600">Education</span>
        </h1>

        <p className="text-base md:text-lg text-center font-nunito font-semibold mb-12 text-gray-700">
          Education is not the learning of facts, but the training of the mind to think.
        </p>

        <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "1rem 0.5rem 1.2rem rgba(0, 0, 0, 0.3)"
              }}
              className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1 lg:min-w-[20rem] w-full h-64 lg:h-auto">
                <Image
                  src={edu.image}
                  alt={edu.institution}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center text-center lg:text-left">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-[#012970] font-semibold mb-2">
                  {edu.title}
                </h3>
                <p className="text-base md:text-lg mb-4">
                  {edu.institution}
                </p>
                <h4 className="text-lg md:text-xl lg:text-2xl text-green-700 font-bold font-nunito">
                  {edu.period}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;