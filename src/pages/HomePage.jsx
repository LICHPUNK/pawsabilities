import React from 'react';
import { motion } from 'framer-motion';
import { goodDog } from '../assets';

const HomePage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 9.5,
        stiffness: 100,
        bounce: 0.5,
        duration: 1,
      },
    },
  };
  
  const underline = {
    hidden: {
      scaleX: 0,
      transformOrigin: "left",
    },
    visible: {
      scaleX: 1,
      transformOrigin: "left",
      transition: {
        duration: 0.5,
        delay: 1.7,
      },
    },
    stagger: {
      scaleX: 1,
      transformOrigin: "left",
      transition: {
        duration: 0.6,
        delay: 1.6,
      },
    },
  };

  
  return (
    <motion.section
      className="text-gray-600 body-font"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-5/6 xs:pr-52 md:pr-30 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={itemVariants}
        >
          <motion.h1
            className="font-poppins xl:text-7xl lg:text-6xl md:text-5xl text-4xl mb-6 font-bold text-gray-300 tracking-tight"
            variants={itemVariants}
          >
            Your pet,
            <br className="hidden lg:inline-block" /> our passion.
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed font-poppins md:text-lg sm:text-md text-sm text-gray-400"
            variants={itemVariants}
          >
            Our mission is to offer peace of mind to pet owners by delivering{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute lg:-bottom-[1px] bottom-0 left-0 w-full lg:border-b-[4px] border-b-[3px] border-opacity-96 border-[#F9C74F] rounded"
                initial="hidden"
                animate="visible"
                variants={underline}
              />
              <span className="relative z-10 lg:px-[2.4px] px-[1px] cursor-pointer rounded bg-[#F9C74F] bg-opacity-0 hover:bg-opacity-20 bg-transition duration-300 hover:bg-transition hover:text-gray-200">
                high-quality
              </span>
            </span>{" "}
            pet care services that promote the happiness, health, and well-being of pets. We're committed to providing{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute lg:-bottom-[1px] bottom-0 left-0 w-full lg:border-b-[4px] border-b-[3px] border-opacity-96 border-[#F9C74F] rounded"
                initial="hidden"
                animate="stagger"
                variants={underline}
              />
              <span className="relative z-10 lg:px-[2.4px] px-[1px] cursor-pointer rounded bg-[#F9C74F] bg-opacity-0 hover:bg-opacity-20 bg-transition duration-300 hover:bg-transition hover:text-gray-200 whitespace-break-spaces">
                compassionate care
              </span>
            </span>{" "}
            with a personal touch.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="inline-flex text-[#1F2D3D] bg-[#F9C74F] font-poppins border-4 border-transparent lg:py-2 lg:px-6 sm:px-2 px-1 py-1 focus:outline-none hover:text-gray-100 hover:border-[#F9C74F]  rounded sm:text-lg xs:text-md text-sm"
              variants={itemVariants}
            >
              Learn More
            </motion.button>
            <motion.button
              className="ml-4 flex items-center text-[#1F2D3D] font-poppins border-4 border-[#6FA3D6] lg:py-2 lg:px-6 sm:px-2 px-1 py-1 focus:outline-none bg-[#6FA3D6] hover:text-gray-200 rounded sm:text-lg xs:text-md text-sm"
              variants={itemVariants}
            >
              <span className="mr-2">Get Started</span>
              <i className="fa-regular fa-circle-right"></i>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="lg:max-w-2xl md:w-5/7 w-5/6"
          variants={itemVariants}
        >
          <motion.img
            className="object-cover object-center rounded"
            alt="hero"
            src={goodDog}
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomePage;
