import React, { useState, useMemo } from 'react';
import { useLoaderData } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Blog from './Blog';
import { FaBookMedical, FaSearch, FaFilter, FaClock, FaNewspaper, FaHeartbeat, FaBrain, FaShieldAlt, FaUserMd, FaStethoscope } from 'react-icons/fa';

const Blogs = () => {
   const data = useLoaderData();
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedCategory, setSelectedCategory] = useState('All');

   // Extract unique categories
   const categories = ['All', ...new Set(data.map(blog => blog.category))];

   // Filter blogs based on search and category
   const filteredBlogs = useMemo(() => {
     return data.filter(blog => {
       const matchesSearch = blog.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.answer.toLowerCase().includes(searchTerm.toLowerCase());
       const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
       return matchesSearch && matchesCategory;
     });
   }, [data, searchTerm, selectedCategory]);

   // Category icons mapping
   const categoryIcons = {
     'All': FaBookMedical,
     'Emergency': FaHeartbeat,
     'Preventive Care': FaShieldAlt,
     'Neurology': FaBrain,
     'Mental Health': FaBrain,
     'Immunization': FaShieldAlt,
     'Cardiology': FaHeartbeat,
     'Sleep Health': FaStethoscope,
     'General': FaUserMd
   };

   // Animation variants
   const containerVariants = {
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: {
         staggerChildren: 0.05,
         delayChildren: 0.1
       }
     }
   };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center justify-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <FaBookMedical className="text-white text-sm" />
                        </div>
                        <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                            Medical FAQ Hub
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                        Health Questions Answered by Experts
                    </h1>

                    <motion.div
                        className="w-20 h-1 bg-blue-500 mx-auto mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    ></motion.div>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        Get reliable answers to common medical questions from our team of healthcare professionals.
                        Your health queries, expertly addressed.
                    </p>

                    {/* Search and Category Filters */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="flex-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <FaSearch className="text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search medical questions..."
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                            <div className="sm:w-48">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                >
                                    {categories.map(category => {
                                        const Icon = categoryIcons[category] || FaBookMedical;
                                        return (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>

                        {/* Quick Category Filters */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.slice(0, 6).map(category => {
                                const Icon = categoryIcons[category] || FaBookMedical;
                                const isActive = selectedCategory === category;

                                return (
                                    <motion.button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center transition-colors duration-200 ${
                                            isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className={`mr-2 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                        {category}
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Results Count */}
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center justify-between">
                        <div className="text-gray-600">
                            <span className="font-medium">{filteredBlogs.length}</span>
                            {filteredBlogs.length === 1 ? ' article found' : ' articles found'}
                            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                        </div>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="text-sm text-blue-600 hover:text-blue-700"
                            >
                                Clear search
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* Blogs Grid */}
                <AnimatePresence mode="wait">
                  {filteredBlogs.length > 0 ? (
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        key="blogs-list"
                    >
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.4,
                                            delay: index * 0.05
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20,
                                        transition: { duration: 0.2 }
                                    }
                                }}
                                layout
                            >
                                <Blog blog={blog} index={index} />
                            </motion.div>
                        ))}
                    </motion.div>
                  ) : (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        key="no-results"
                    >
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaSearch className="text-gray-400 text-2xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6">
                            We couldn't find any medical questions matching your search.
                            Try different keywords or browse all categories.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                            }}
                            className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            View All Articles
                        </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact Section */}
                <motion.div
                    className="mt-12 pt-8 border-t border-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
                            These FAQs provide general information. For personalized medical advice,
                            please consult with a healthcare professional.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                                Book Online Consultation
                            </button>
                            <button className="px-5 py-2.5 bg-white text-blue-600 font-medium rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                                Emergency: 10666
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Blogs;
