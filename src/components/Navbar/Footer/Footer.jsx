import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center rounded-full shadow-md">
                <span className="text-white text-xl font-bold">+</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Phudu Medical
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Trusted Healthcare Services
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Providing exceptional medical care with a focus on patient
              well-being, advanced technology, and experienced healthcare
              professionals.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              {[
                {
                  icon: FaFacebook,
                  color: 'hover:text-blue-600',
                  href: 'https://facebook.com',
                },
                {
                  icon: FaTwitter,
                  color: 'hover:text-blue-400',
                  href: 'https://twitter.com',
                },
                {
                  icon: FaInstagram,
                  color: 'hover:text-pink-600',
                  href: 'https://instagram.com',
                },
                {
                  icon: FaLinkedin,
                  color: 'hover:text-blue-700',
                  href: 'https://linkedin.com',
                },
                {
                  icon: FaYoutube,
                  color: 'hover:text-red-600',
                  href: 'https://youtube.com',
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { path: '/', label: 'Home' },
                { path: '/doctors', label: 'Find Doctors' },
                { path: '/services', label: 'Our Services' },
                { path: '/appointment', label: 'Book Appointment' },
                { path: '/my-booking', label: 'My Bookings' },
                { path: '/blogs', label: 'Health Blogs' },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                        isActive ? 'text-blue-600 font-medium' : ''
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'Emergency Care',
                'General Medicine',
                'Pediatrics',
                'Cardiology',
                'Orthopedics',
                'Dermatology',
                'Neurology',
                'Dental Care',
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  123 Medical Street, Healthcare District
                  <br />
                  Dhaka 1207, Bangladesh
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">+880 1234 567890</span>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  info@phudumedical.com
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <FaClock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">
                  Mon - Fri: 8:00 AM - 8:00 PM
                  <br />
                  Sat - Sun: 9:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Phudu Medical Services. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a
              href="/privacy-policy"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="/cookies-policy"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Cookies Policy
            </a>
            <a
              href="/sitemap"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Sitemap
            </a>
          </div>
        </div>

        {/* Accreditation Badge */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Licensed and Accredited Medical Service Provider</span>
            <span className="text-gray-300">•</span>
            <span>HIPAA Compliant</span>
            <span className="text-gray-300">•</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
