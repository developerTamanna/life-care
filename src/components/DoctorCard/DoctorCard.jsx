import { motion } from 'framer-motion';
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {
  const {
    image,
    name,
    education,
    experience,
    registration_number,
    availabilityBadge,
    id,
    speciality,
  } = doctor || {};

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    hover: {
      y: -6,
      scale: 1.02,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="relative w-full p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
    >
      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-50 rounded-xl mb-4 overflow-hidden">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-3">
        {availabilityBadge && (
          <span className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full border">
            {availabilityBadge}
          </span>
        )}
        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1.5 rounded-full border">
          {experience} Experience
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      <p className="text-sm text-gray-600">{education}</p>
      <p className="text-sm font-medium text-blue-600 mb-3">{speciality}</p>

      <p className="text-sm text-gray-500 mb-5">
        Reg No: {registration_number}
      </p>

      {/* Button */}
      <Link to={`/doctor-details/${id}`}>
        <button className="w-full py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition">
          View Details
        </button>
      </Link>

      {/* 🔥 FIXED Overlay (click block করবে না) */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default DoctorCard;
