import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorsContainer = ({ doctors }) => {
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Slightly faster stagger
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smoother animation
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: { scale: 0.97 },
  };

  useEffect(() => {
    if (showAll) {
      setDisplayDoctors(doctors);
    } else {
      setDisplayDoctors(doctors.slice(0, 6));
    }

    // Remove initial animation after first render
    if (isInitial) {
      const timer = setTimeout(() => setIsInitial(false), 800);
      return () => clearTimeout(timer);
    }
  }, [doctors, showAll, isInitial]);

  const handleShowAllClick = () => {
    const newShowAll = !showAll;
    setShowAll(newShowAll);

    // Smooth scroll to top when showing less
    if (newShowAll === false) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Meet Our Experts
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Specialist Doctors
          </motion.h1>

          <motion.div
            className="w-16 h-0.5 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          ></motion.div>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Our platform connects you with verified, experienced doctors across
            various specialties. Whether it's a routine checkup or urgent
            consultation, book appointments in minutes and receive quality care
            you can trust.
          </motion.p>
        </motion.div>

        {/* Doctors Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            key={showAll ? 'all' : 'limited'}
            variants={containerVariants}
            initial={isInitial ? 'hidden' : false}
            animate="visible"
            exit="hidden"
          >
            {displayDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 30,
                }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show All/Less Button */}
        {doctors.length > 6 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <motion.button
              onClick={handleShowAllClick}
              className="relative px-8 py-3 bg-transparent text-gray-700 font-medium rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-300 overflow-hidden group"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10 flex items-center justify-center">
                <motion.svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
                {showAll ? 'Show Less' : 'Show All Doctors'}
              </span>

              {/* Animated Background */}
              <motion.span
                className="absolute inset-0 bg-gray-50 z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </motion.button>

            {/* Doctor Count with Animation */}
            <motion.p
              className="mt-4 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Showing {displayDoctors.length} of {doctors.length} doctors
            </motion.p>
          </motion.div>
        )}

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-100"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {[
            { number: '500+', label: 'Successful Cases' },
            { number: '15+', label: 'Years Experience' },
            { number: '99%', label: 'Patient Satisfaction' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-2xl font-light text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorsContainer;
