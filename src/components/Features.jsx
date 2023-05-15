import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { React, useEffect } from "react";


/* TODO
 - make the first card animation being triggered trigger the whole animation
 - maybe disable the animation when the screen is too small
*/

// Animation variant for scrolling
const scrollVariant = {
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: {
            duration: 1,
        } },
    hidden: { 
        opacity: 0, 
        y: 150 
    },
    exit: {
        opacity: 0,
        y: 150,
        transition: {
          duration: 1,
          reverse: true,
        },
    },
  };

const Features = () => {


    const headerControl = useAnimation(); // Control for the header
    const [headerRef, headerInView] = useInView({threshold: 0.5}); // Ref for the header

    useEffect(() => {
        if (headerInView) {
            // Animate the header when it comes into view
            setTimeout(() => {
                headerControl.start("visible");
            }, 100);
        } else {
            // Animate header when it exits view
            setTimeout(() => {
          headerControl.start("exit");
          }, 100);
        }
      }, [headerControl, headerInView]);
      
      const cardControls = []; // Controls for the cards
      const cardRefs = []; // Refs for the cards
    
      const cardAnimationDelays = [0.4, 0.5, 0.6]; // Delays between the cards to animate in and out

      for (let i = 0; i < 3; i++) {
        const cardControl = useAnimation(); // Control for the current loop's card
        const [cardRef, cardInView] = useInView({threshold: 0.5}); // Ref for the current loop's card (threshold: 0.5 = card will animate when it is 50% in view)
    
        useEffect(() => {
            if (cardInView) {
                // Animate card when it comes into view
                setTimeout(() => {
                cardControl.start("visible");
              }, cardAnimationDelays[i] * 1000); // Convert delay to milliseconds before initiating entry animation
            } else {
                // Animate card when it exits view
                setTimeout(() => {
              cardControl.start("exit");
              }, cardAnimationDelays[i] * 1000); // Convert delay to milliseconds before initiating exit animation
            }
          }, [cardControl, cardInView]);          
    
        cardControls.push(cardControl); // Update card controls with the current loop's card control
        cardRefs.push(cardRef); // Update card refs with the current loop's card ref
      }

  return (
    <section className="text-gray-600 body-font">
        <div className="container px-10 py-24 mx-auto">
            {/* Motion container (wrapping header content for entry/exit animations) */}
            <motion.div 
                className="lg:flex-grow flex flex-col md:items-center md:text-center mb-20 items-center text-center"
                ref={headerRef}
                variants={scrollVariant}
                initial="hidden"
                animate={headerControl}
                >
                {/* Section heading */}
                <h1 className="font-poppins text-6xl mb-8 font-bold text-gray-300 tracking-tight">Tailored Pet Services</h1>
                {/* Page subheading */}
                <p className="leading-relaxed xl:w-full lg:w-3/4 mx-auto mb-8 font-poppins md:text-xl sm:text-md text-base text-gray-400">
                    We understand that every pet is unique, and we take the time to get to know your pet's individual needs, preferences, and personalities.
                </p>
                <div className="flex mt-6 justify-center">
                    {/* Line under the heading */}
                    <div className="w-32 h-1 rounded-full bg-[#F9C74F] inline-flex"></div>
                </div>
            </motion.div>
            {/* Feature cards container */}
            <div className="flex flex-wrap justify-center gap-14 sm:-m-6 -mx-4 -mb-6 -mt-4 md:-space-y-0 space-y-6">
                {/* First feature card (motion container wrapping card content for entry/exit animations) */}
                <motion.div 
                    className="md:w-1/4 flex flex-col text-center text-gray-400 items-center"
                    ref={cardRefs[0]}
                    variants={scrollVariant}
                    initial="hidden"
                    animate={cardControls[0]}
                >
                    <div className="py-16 rounded-3xl w-5/6 lg:w-full cursor-pointer bg-[#F9C74F] bg-opacity-10 bg-gradient-to-br from-[#D0A54120] via-transparent to-transparent hover:bg-opacity-25 hover:bg-[#F9C74F] hover:shadow-2xl transition-all duration-700 ease-in-out transform hover:-translate-y-2">
                        {/* Icon */}
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-4 border-[#F9C74F] bg-[#1F2D3D] text-[#6FA3D6] mb-6 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                        </div>
                        {/* Text */}
                        <div className="flex-grow">
                            <h2 className="text-gray-200 text-lg font-poppins font-medium mb-3">Personalized Care</h2>
                            <p className="leading-relaxed text-base lg:w-4/5 lg:mx-auto mx-4 mb-2 font-poppins">
                                Our personalized care ensures that your furry friend receives attention, exercise, and care catered to their individual needs.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* Second feature card (motion container wrapping card content for entry/exit animations) */}
                <motion.div 
                    className="md:w-1/4 flex flex-col text-center text-gray-400 items-center"
                    ref={cardRefs[1]}
                    variants={scrollVariant}
                    initial="hidden"
                    animate={cardControls[1]}
                >
                    <div className="py-16 rounded-3xl w-5/6 lg:w-full cursor-pointer bg-[#F9C74F] bg-opacity-10 bg-gradient-to-br from-[#D0A54120] via-transparent to-transparent hover:bg-opacity-25 hover:bg-[#F9C74F] hover:shadow-2xl transition-all duration-700 ease-in-out transform hover:-translate-y-2">
                        {/* Icon */}
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-4 border-[#F9C74F] bg-[#1F2D3D] text-[#6FA3D6] mb-6 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        {/* Text */}
                        <div className="flex-grow">
                            <h2 className="text-gray-300 text-lg font-poppins font-medium mb-3">Grooming & Spa</h2>
                            <p className="leading-relaxed text-base lg:w-4/5 mx-auto mb-2 font-poppins text-gray-400">
                                Treat your pets to luxurious grooming and spa treatments. Our team will make sure your pets look and feel their best.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
                {/* Third feature card (motion container wrapping card content for entry/exit animations) */}
                <motion.div 
                    className="md:w-1/4 flex flex-col text-center text-gray-400 items-center"
                    ref={cardRefs[2]}
                    variants={scrollVariant}
                    initial="hidden"
                    animate={cardControls[2]}
                >    
                    <div className="py-16 rounded-3xl w-5/6 lg:w-full cursor-pointer bg-[#F9C74F] bg-opacity-10 bg-gradient-to-br from-[#D0A54120] via-transparent to-transparent hover:bg-opacity-25 hover:bg-[#F9C74F] hover:shadow-2xl transition-all duration-700 ease-in-out transform hover:-translate-y-2">                
                        {/* Icon */}
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full border-4 border-[#F9C74F] bg-[#1F2D3D] text-[#6FA3D6] mb-6 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        {/* Text */}
                        <div className="flex-grow">
                            <h2 className="text-gray-300 text-lg font-poppins font-medium mb-3">Pet Chauffeur</h2>
                            <p className="leading-relaxed text-base lg:w-4/5 mx-auto mb-2 font-poppins text-gray-400">
                                Leave the stress to us, our reliable pet transportation services ensure your pets reach their destination safely and comfortably.
                            </p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Features