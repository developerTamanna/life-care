import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const BestServices = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      id: 1,
      icon: 'https://i.ibb.co.com/2Y0Nh7R8/fi-3160069.png',
      endValue: 199,
      title: 'Expert Doctors',
      description: 'Board-certified specialists',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      icon: 'https://i.ibb.co.com/hRVjcPRr/fi-2854545.png',
      endValue: 467,
      title: 'Positive Reviews',
      description: 'Patient satisfaction',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
    },
    {
      id: 3,
      icon: 'https://i.ibb.co.com/yFy7dbFZ/fi-7804340.png',
      endValue: 1900,
      title: 'Happy Patients',
      description: 'Successfully treated',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
    },
    {
      id: 4,
      icon: 'https://i.ibb.co.com/DPB5K80f/fi-15536380.png',
      endValue: 300,
      title: 'Medical Staff',
      description: 'Support professionals',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
    },
  ];

  return (
    <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          ref={ref}
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              Our Achievements
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Excellence in Healthcare Services
          </motion.h2>

          <motion.div
            className="w-20 h-0.5 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          />

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Committed to delivering exceptional medical care with a focus on
            patient satisfaction, advanced technology, and experienced
            professionals.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* ✅ ONLY SHADOW CHANGE HERE */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8 h-full transition-all duration-300 group-hover:shadow-xl">
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 relative`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-8 h-8"
                  />
                </motion.div>

                {/* Counter */}
                <div className="text-center mb-2">
                  <div className="text-4xl sm:text-5xl font-bold mb-1">
                    <CountUp
                      start={0}
                      end={service.endValue}
                      duration={2.5}
                      suffix="+"
                      className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                    />
                  </div>

                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-gray-500 text-sm">{service.description}</p>
                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${service.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className={`absolute -top-2 -right-2 ${service.bgColor} px-3 py-1 rounded-full text-xs font-medium text-gray-700 border border-gray-200`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                Trusted
              </motion.div>

              {/* Border glow */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BestServices;
