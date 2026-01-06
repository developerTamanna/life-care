import { motion } from 'framer-motion';
import {
  FaClock,
  FaDollarSign,
  FaGraduationCap,
  FaTrash,
  FaUserMd,
} from 'react-icons/fa';

const BookingCard = ({ doctor, handleDelete, index }) => {
  const {
    name,
    education,
    fee,
    id,
    speciality,
    appointmentTime = '10:30 AM',
  } = doctor;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.995,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-lg border border-gray-200 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      <div className="p-5">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
              <FaUserMd className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">
                {name}
              </h3>
              <div className="flex items-center flex-wrap gap-2">
                <span className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  <FaGraduationCap className="mr-1 text-xs" />
                  {speciality}
                </span>
                <span className="inline-flex items-center bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                  <FaClock className="mr-1 text-xs" />
                  {appointmentTime}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Appointment Fee</div>
            <div className="flex items-center text-lg font-semibold text-gray-900">
              <FaDollarSign className="text-gray-500 text-sm mr-1" />
              {fee}
              <span className="text-xs text-gray-500 ml-1">+ VAT</span>
            </div>
          </div>
        </div>

        {/* Education Info */}
        <div className="mb-5">
          <div className="flex items-start text-sm">
            <FaGraduationCap className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
            <div>
              <span className="text-gray-500">Education: </span>
              <span className="text-gray-700 font-medium">{education}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
          <motion.button
            onClick={() => handleDelete(id)}
            className="flex-1 bg-white text-red-600 px-4 py-2.5 rounded-lg border border-red-200 hover:bg-red-50 transition-colors duration-200 flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaTrash className="mr-2" />
            Cancel Appointment
          </motion.button>

          <button className="flex-1 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View Details
          </button>
        </div>

        {/* Status Indicator */}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Confirmed
          </div>
          <div>
            Appointment ID: <span className="font-mono">{id}</span>
          </div>
        </div>
      </div>

      {/* Time Remaining Indicator */}
      <div className="bg-gray-50 border-t border-gray-100 px-5 py-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Next appointment in 2 hours</span>
          <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;
