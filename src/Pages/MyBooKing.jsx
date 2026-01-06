import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  FaCalendarCheck,
  FaCalendarTimes,
  FaClock,
  FaHome,
  FaUserMd,
} from 'react-icons/fa';
import { Link } from 'react-router';
import { getBookings, removeBooking } from '../utils';
import BookingCard from './BookingCard';
import ConeChart from './ConeChart';

const MyBooking = () => {
  const [displayDoctors, setDisplayDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBookings = () => {
      setIsLoading(true);
      const saveDoctors = getBookings();
      setDisplayDoctors(saveDoctors);
      setTimeout(() => setIsLoading(false), 300);
    };
    loadBookings();
  }, []);

  const handleDelete = (id) => {
    removeBooking(id);
    setDisplayDoctors(getBookings());
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your appointments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <FaCalendarCheck className="text-white text-sm" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  My Appointments
                </h1>
              </div>
              <p className="text-gray-600 text-sm">
                Manage and track all your scheduled medical appointments in one
                place.
              </p>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <FaClock className="mr-2" />
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {displayDoctors.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <ConeChart data={displayDoctors} />
          </motion.div>
        )}

        {/* Appointments Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayDoctors.length > 0 ? (
            <div className="space-y-6">
              {/* Section Header */}
              <motion.div variants={itemVariants}>
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                    <FaUserMd className="text-blue-600 text-xs" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Today's Appointments ({displayDoctors.length})
                  </h2>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  You have {displayDoctors.length} scheduled appointment
                  {displayDoctors.length > 1 ? 's' : ''} today. Please arrive 15
                  minutes before your scheduled time.
                </p>
              </motion.div>

              {/* Appointments List */}
              <div className="space-y-4">
                {displayDoctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BookingCard
                      doctor={doctor}
                      handleDelete={handleDelete}
                      index={index}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-8 text-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarTimes className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No Appointments Scheduled
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6 text-sm">
                You haven't booked any appointments yet. Browse our doctors and
                schedule your first consultation to get started with quality
                healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/">
                  <motion.button
                    className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaHome className="mr-2" />
                    Back to Home
                  </motion.button>
                </Link>
                <Link to="/doctors">
                  <motion.button
                    className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaUserMd className="mr-2" />
                    Browse Doctors
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        {displayDoctors.length > 0 && (
          <motion.div
            className="mt-8 pt-6 border-t border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Important Information
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      • Please bring your ID and insurance card to your
                      appointment
                    </li>
                    <li>
                      • Cancellations must be made at least 24 hours in advance
                    </li>
                    <li>• Late arrivals may result in rescheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
