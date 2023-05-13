import React from 'react';
import { motion } from 'framer-motion';
import { goodDog } from '../assets';

const HomePage = () => {

  // Define the motion variants for the main container animation
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

  // Define the motion variants for the text content animation
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  // Define the motion variant for the underline animation
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
    // Create a section with a background gradient and motion animation properties
    <motion.section
      className="text-gray-600 body-font bg-gradient-to-r from-[#2d425c] to-[#1F2D3D]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Container for the page content */}
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        {/* Container for the text content */}
        <motion.div
          className="lg:flex-grow md:w-5/6 xs:pr-52 md:pr-30 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          variants={itemVariants}
        >
          {/* Page heading */}
          <motion.h1
            className="font-poppins xl:text-7xl lg:text-6xl md:text-5xl text-4xl mb-6 font-bold text-gray-300 tracking-tight"
            variants={itemVariants}
          >
            Your pet,
            <br className="hidden lg:inline-block" /> our passion.
          </motion.h1>
          {/* Page subheading */}
          <motion.p
            className="mb-8 leading-relaxed font-poppins md:text-lg sm:text-md text-sm text-gray-400"
            variants={itemVariants}
          >
            Our mission is to offer peace of mind to pet owners by delivering{" "}
            {/* Create span with motion animation properties for the subheading underline animation */}
            <span className="relative inline-block">
              {/* Create span that with classes that create & style the underline/border */}
              <motion.span
                className="absolute lg:-bottom-[1px] bottom-0 left-0 w-full lg:border-b-[4px] border-b-[3px] border-opacity-96 border-[#F9C74F] rounded"
                initial="hidden"
                animate="visible"
                variants={underline}
              />
              {/* Create span with classes for dynamic background highlight on hover effect*/}
              <span className="relative z-10 lg:px-[2.4px] px-[1px] cursor-pointer rounded bg-[#F9C74F] bg-opacity-0 hover:bg-opacity-20 bg-transition duration-300 hover:bg-transition hover:text-gray-200">
                {/* Add link to the about section */}
                <a href='#about'>high-quality</a>
              </span>
            </span>{" "}
            pet care services that promote the happiness, health, and well-being of pets. We're committed to providing{" "}
            {/* Create span with motion animation properties for the subheading underline animation */}
            <span className="relative inline-block">
              {/* Create span that with classes that create & style the underline/border */}
              <motion.span
                className="absolute lg:-bottom-[1px] bottom-0 left-0 w-full lg:border-b-[4px] border-b-[3px] border-opacity-96 border-[#F9C74F] rounded"
                initial="hidden"
                animate="stagger"
                variants={underline}
              />
              {/* Create span with classes for dynamic background highlight on hover effect*/}
              <span href='#about' className="relative z-10 lg:px-[2.4px] px-[1px] cursor-pointer rounded bg-[#F9C74F] bg-opacity-0 hover:bg-opacity-20 bg-transition duration-300 hover:bg-transition hover:text-gray-200 whitespace-break-spaces">
                {/* Add link to the about section */}
                <a href='#about'>compassionate care</a>
              </span>
            </span>{" "}
            with a personal touch.
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            {/* First CTA button */}
            <motion.button
              className="inline-flex text-[#1F2D3D] bg-[#F9C74F] font-poppins border-4 border-transparent lg:py-2 lg:px-6 sm:px-2 px-1 py-1 focus:outline-none hover:text-gray-100 hover:border-[#F9C74F]  rounded sm:text-lg xs:text-md text-sm"
              variants={itemVariants}
            >
              Learn More
            </motion.button>
            {/* Second CTA button */}
            <motion.button
              className="ml-4 flex items-center text-[#1F2D3D] font-poppins border-4 border-[#6FA3D6] lg:py-2 lg:px-6 sm:px-2 px-1 py-1 focus:outline-none bg-[#6FA3D6] hover:text-gray-200 rounded sm:text-lg xs:text-md text-sm"
              variants={itemVariants}
            >
              <span className="mr-2">Get Started</span>
              {/* Add right arrow icon */}
              <i className="fa-regular fa-circle-right"></i>
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Container for the landing image */}
        <motion.div
          className="lg:max-w-2xl md:w-5/7 w-5/6"
          variants={itemVariants}
        >
          {/* Landing image */}
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
