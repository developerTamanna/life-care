import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaAmbulance,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaUserMd,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdOutlineSupportAgent, MdVideoCall } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const emergencyContacts = [
    {
      icon: FaAmbulance,
      label: 'Emergency Ambulance',
      number: '10666',
      description: '24/7 Emergency Service',
    },
    {
      icon: FaPhone,
      label: 'Emergency Helpline',
      number: '999',
      description: 'National Emergency',
    },
    {
      icon: FaUserMd,
      label: 'Doctor on Call',
      number: '10616',
      description: 'Medical Advice',
    },
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Number',
      details: ['+880 1234 567890', '+880 9876 543210'],
      description: 'Call us for appointments or inquiries',
    },
    {
      icon: FaEnvelope,
      title: 'Email Address',
      details: ['info@phudumedical.com', 'support@phudumedical.com'],
      description: 'Email us for non-urgent matters',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Fri: 8:00 AM - 8:00 PM', 'Sat - Sun: 9:00 AM - 6:00 PM'],
      description: 'Emergency services available 24/7',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MdOutlineSupportAgent className="text-white text-sm" />
            </div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Get in Touch
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Contact Our Medical Team
          </h1>

          <motion.div
            className="w-20 h-1 bg-blue-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to us for appointments, inquiries, or medical assistance.
            Our team is here to support your healthcare needs.
          </p>
        </motion.div>

        {/* Emergency Contacts Banner */}
        <motion.div
          className="mb-10"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-blue-600 rounded-xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <FaAmbulance className="text-2xl mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Emergency Contacts</h3>
                  <p className="text-blue-100">
                    Available 24/7 for urgent medical needs
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold mb-1">
                      {contact.number}
                    </div>
                    <div className="text-sm text-blue-100">{contact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-5"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Appointment */}
            <motion.div
              className="bg-white border border-gray-200 rounded-xl p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                  <FaCalendarAlt className="text-gray-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Appointment
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Book an appointment online in just a few clicks.
              </p>
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <FaCalendarAlt className="mr-2" />
                Book Online Now
              </button>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-xl border border-gray-200 p-6"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                  <FaPaperPlane className="text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              {submitSuccess && (
                <motion.div
                  className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center">
                    <FaCheckCircle className="text-green-600 mr-2" />
                    <div>
                      <p className="font-medium text-green-800">
                        Message Sent Successfully!
                      </p>
                      <p className="text-green-700 text-sm">
                        Our team will contact you shortly.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="general">General Inquiry</option>
                    <option value="emergency">Emergency Contact</option>
                    <option value="feedback">Feedback/Suggestions</option>
                    <option value="billing">Billing Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    placeholder="Describe your medical concern or inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="consent"
                    className="ml-2 text-sm text-gray-600"
                  >
                    I consent to sharing my medical information for consultation
                    purposes
                  </label>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Additional Contact Options */}
            <motion.div
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={itemVariants}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                    <FaWhatsapp className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      WhatsApp Support
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Quick chat with our team
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Chat on WhatsApp
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mr-3">
                    <MdVideoCall className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Video Consultation
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Consult from anywhere
                    </p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Schedule Video Call
                </button>
              </div>
            </motion.div>

            {/* Professional Medical Assurance */}
            <motion.div
              className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-5"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-semibold text-gray-900 mb-3">
                Our Commitment to You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FaUserMd className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Expert Doctors
                    </p>
                    <p className="text-gray-600 text-xs">
                      Board-certified specialists
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FaClock className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Quick Response
                    </p>
                    <p className="text-gray-600 text-xs">
                      Within 24 hours guaranteed
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FaCheckCircle className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Confidential
                    </p>
                    <p className="text-gray-600 text-xs">HIPAA compliant</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <FaAmbulance className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      Emergency Ready
                    </p>
                    <p className="text-gray-600 text-xs">
                      24/7 emergency support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
