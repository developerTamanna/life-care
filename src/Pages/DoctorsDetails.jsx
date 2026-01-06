import { motion } from 'framer-motion';
import {
  FaArrowLeft,
  FaAward,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaIdCard,
  FaMapMarkerAlt,
  FaRegHospital,
  FaStethoscope,
  FaUserMd,
  FaUsers,
} from 'react-icons/fa';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { addBooking } from '../utils';

const DoctorsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  // Check if the id is a valid number
  if (!/^\d+$/.test(id)) {
    return (
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-gradient-to-b from-gray-50 to-white"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
            <svg
              className="w-8 h-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Doctor Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The doctor ID{' '}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
              {id}
            </span>{' '}
            is not valid.
          </p>
          <Link to="/">
            <motion.button
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaArrowLeft className="mr-2" />
              Back to Doctors
            </motion.button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const numericId = parseInt(id);
  const singleDoctor = data.find((doctor) => doctor.id === numericId);

  if (!singleDoctor) {
    return (
      <motion.div
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 bg-gradient-to-b from-gray-50 to-white"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-100">
            <svg
              className="w-8 h-8 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Doctor Not Available
          </h2>
          <p className="text-gray-600 mb-6">
            The requested doctor is currently not available.
          </p>
          <Link to="/">
            <motion.button
              className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaArrowLeft className="mr-2" />
              Browse Available Doctors
            </motion.button>
          </Link>
        </div>
      </motion.div>
    );
  }

  const {
    image,
    name,
    education,
    workplace,
    registration_number,
    availability,
    fee,
    speciality,
    experience,
    bio,
    rating,
    totalPatients,
  } = singleDoctor;

  const handleBooking = () => {
    addBooking(singleDoctor, navigate);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div className="mb-6" variants={cardVariants}>
          <Link to="/">
            <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
              <FaArrowLeft className="mr-2" />
              Back to Doctors List
            </button>
          </Link>
        </motion.div>

        {/* Doctor Profile Header */}
        <motion.div
          className="bg-white rounded-xl border border-gray-200 p-6 mb-6"
          variants={cardVariants}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Doctor Image */}
            <div className="relative">
              <div className="w-36 h-36 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/400x400/E5E7EB/374151?text=DR';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                Verified
              </div>
            </div>

            {/* Doctor Basic Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                    {name}
                  </h1>
                  <div className="flex items-center flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded text-sm border border-blue-100">
                      <FaStethoscope className="mr-1 text-xs" />
                      {speciality}
                    </span>
                    <span className="inline-flex items-center bg-gray-50 text-gray-700 px-3 py-1 rounded text-sm border border-gray-200">
                      <FaClock className="mr-1 text-xs" />
                      {experience || '10+'} Years Experience
                    </span>
                  </div>
                </div>

                {/* Consultation Fee */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mt-4 lg:mt-0">
                  <div className="text-sm text-blue-700">Consultation Fee</div>
                  <div className="text-xl font-bold text-gray-900">{fee}</div>
                  <div className="text-xs text-gray-500">Per session</div>
                </div>
              </div>

              {/* Education and Workplace */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start">
                  <FaGraduationCap className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Education</div>
                    <div className="font-medium text-gray-900 text-sm">
                      {education}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaRegHospital className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Hospital/Clinic</div>
                    <div className="font-medium text-gray-900 text-sm">
                      {workplace}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaIdCard className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Registration No</div>
                    <div className="font-medium text-gray-900 text-sm">
                      {registration_number}
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="font-medium text-gray-900 text-sm">
                      Dhaka, Bangladesh
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating and Patients */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 font-medium text-gray-900 text-sm">
                    {rating || '4.8'} ({totalPatients || '1200+'} reviews)
                  </span>
                </div>
                <div className="text-gray-600 text-sm">
                  <FaCheckCircle className="inline text-green-500 mr-1" />
                  {availability?.length || 5} days available per week
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Doctor Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Doctor */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-5"
              variants={cardVariants}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100">
                About Dr. {name?.split(' ')[0]}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {bio ||
                  `${name} is a highly experienced ${speciality} specialist with over ${
                    experience || '10'
                  } years of practice. With a patient-centered approach, Dr. ${
                    name?.split(' ')[0]
                  } combines advanced medical knowledge with compassionate care to provide the best treatment outcomes.`}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Committed to ongoing professional development and staying
                updated with the latest medical advancements to ensure patients
                receive the most effective and up-to-date care available.
              </p>
            </motion.div>

            {/* Availability Schedule */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-5"
              variants={cardVariants}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                Availability Schedule
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {availability?.map((day, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <div className="font-medium text-gray-900 text-sm">
                      {day}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      9:00 AM - 5:00 PM
                    </div>
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-green-50 text-green-700 border border-green-200">
                        <FaCheckCircle className="mr-1 text-xs" />
                        Available
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Doctor's Credentials */}
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-5"
              variants={cardVariants}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-100 flex items-center">
                <FaAward className="mr-2 text-blue-600" />
                Professional Credentials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                    <FaUserMd className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Medical License
                    </div>
                    <div className="text-xs text-gray-600">
                      Bangladesh Medical Council
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3">
                    <FaUsers className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Patients Treated
                    </div>
                    <div className="text-xs text-gray-600">
                      {totalPatients || '1200+'} Successfully
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Appointment Booking */}
          <div>
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-5 sticky top-6"
              variants={cardVariants}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-5 flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-600" />
                Book Appointment
              </h2>

              {/* Availability Status */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-700 font-medium text-sm">
                    Current Status
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-green-50 text-green-700 border border-green-200">
                    <FaCheckCircle className="mr-1" />
                    Available Today
                  </span>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-3">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs text-yellow-700">
                      Due to high patient volume, appointments are available for
                      today only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-5">
                <h3 className="font-medium text-gray-900 mb-3 text-sm">
                  Price Summary
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Consultation Fee</span>
                    <span>{fee}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Service Charge</span>
                    <span>৳ 200</span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>VAT (15%)</span>
                    <span>৳ 150</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-gray-900">
                      <span>Total Amount</span>
                      <span>৳ 1,350</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Button */}
              <motion.button
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaCalendarAlt className="mr-2" />
                Book Appointment Now
              </motion.button>

              {/* Additional Info */}
              <div className="mt-5 text-center text-xs text-gray-500 space-y-1">
                <p className="flex items-center justify-center">
                  <FaCheckCircle className="mr-1 text-green-500" />
                  Instant confirmation
                </p>
                <p className="flex items-center justify-center">
                  <FaCheckCircle className="mr-1 text-green-500" />
                  24/7 customer support
                </p>
                <p className="flex items-center justify-center">
                  <FaCheckCircle className="mr-1 text-green-500" />
                  Free cancellation up to 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorsDetails;
