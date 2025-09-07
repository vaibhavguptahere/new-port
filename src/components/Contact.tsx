'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: ''
  });

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'error' ? 'error' : ''}`;
    toast.innerText = message;

    const progress = document.createElement('div');
    progress.className = 'toast-progress';
    toast.appendChild(progress);

    const container = document.getElementById('toast-container');
    if (container) {
      container.appendChild(toast);

      let timeout = setTimeout(() => {
        toast.style.animation = 'fadeOut 0.4s forwards';
        toast.addEventListener('animationend', () => toast.remove());
      }, 5000);

      toast.addEventListener('mouseover', () => {
        clearTimeout(timeout);
        progress.style.animationPlayState = 'paused';
      });

      toast.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          toast.style.animation = 'fadeOut 0.4s forwards';
          toast.addEventListener('animationend', () => toast.remove());
        }, 2000);
        progress.style.animationPlayState = 'running';
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_h5qatuw',
        'template_elbqjus',
        formData,
        'BnqCm0EFJ9dEsfwel'
      );
      showToast('Message sent successfully!', 'success');
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        message: ''
      });
    } catch (error) {
      showToast('Failed to send message. Please try again.', 'error');
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-[#e5ecfb] min-h-[60vh] py-20 px-[9%]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <i className="fas fa-headset mr-4"></i>
          Get in <span className="text-purple-600">Touch</span>
        </h2>

        <div
          id="toast-container"
          className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-2"
        ></div>

        <div className="max-w-[1050px] w-full bg-white rounded-3xl mx-auto my-8 shadow-lg">
          <div className="flex items-center justify-between p-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[60%] ml-16 hidden md:block"
            >
              <Image
                src="/contact1.png"
                alt="Contact"
                width={500}
                height={400}
                className="w-full h-[40rem] relative"
              />
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="w-full md:w-[45%] mr-14"
            >
              <div className="flex flex-col justify-center">
                <div className="h-[50px] flex relative m-4 w-full">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    className="w-full h-full outline-none px-4 pl-12 text-base font-poppins rounded-md border border-gray-600 bg-[#e5ecfb] focus:pl-12 focus:border-2 focus:border-purple-600"
                  />
                  <i className="fas fa-user absolute top-1/2 left-4 text-gray-600 text-lg pointer-events-none transform -translate-y-1/2"></i>
                </div>

                <div className="h-[50px] flex relative m-4 w-full">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    className="w-full h-full outline-none px-4 pl-12 text-base font-poppins rounded-md border border-gray-600 bg-[#e5ecfb] focus:pl-12 focus:border-2 focus:border-purple-600"
                  />
                  <i className="fas fa-envelope absolute top-1/2 left-4 text-gray-600 text-lg pointer-events-none transform -translate-y-1/2"></i>
                </div>

                <div className="h-[50px] flex relative m-4 w-full">
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full h-full outline-none px-4 pl-12 text-base font-poppins rounded-md border border-gray-600 bg-[#e5ecfb] focus:pl-12 focus:border-2 focus:border-purple-600"
                  />
                  <i className="fas fa-phone-alt absolute top-1/2 left-4 text-gray-600 text-lg pointer-events-none transform -translate-y-1/2"></i>
                </div>

                <div className="relative m-4 w-full">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[130px] max-h-[230px] max-w-full min-w-full outline-none p-3 pl-12 text-base font-poppins rounded-md border border-gray-600 bg-[#e5ecfb] focus:border-2 focus:border-purple-600 resize-none"
                  ></textarea>
                  <i className="fas fa-comment-dots absolute top-6 left-4 text-gray-600 text-xl pointer-events-none"></i>
                </div>
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white border-none outline-none text-lg cursor-pointer rounded-md py-4 px-6 bg-[#2506ad] shadow-lg hover:bg-[#421cecf5] transition-all duration-300 font-nunito"
                >
                  Submit <i className="fa fa-paper-plane ml-2"></i>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;