import { useEffect, useState } from 'react';

const Hero = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Smooth animations inline styles
  const styles = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInFromLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInFromRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes scaleIn {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }

        .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideLeft {
            animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slideRight {
            animation: slideInFromRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
            animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
            animation: float 3s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }

        /* Smooth transitions */
        .transition-all-300 {
            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .transition-all-500 {
            transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Custom gradient overlay */
        .gradient-overlay {
            background: linear-gradient(to bottom,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.7) 50%,
                rgba(255,255,255,1) 100%
            );
        }

        /* Image hover effect */
        .image-hover-effect {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .image-hover-effect:hover {
            transform: translateY(-8px);
        }
    `;

  return (
    <>
      <style>{styles}</style>

      {/* Hero Section - FULL WIDTH */}
      <div className="relative min-h-screen bg-white overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl ${
              animate ? 'animate-float' : ''
            }`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-96 h-96 bg-gray-100 rounded-full opacity-20 blur-3xl ${
              animate ? 'animate-float delay-300' : ''
            }`}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 sm:space-y-12">
              {/* Main Heading with Smooth Animation */}
              <div
                className={`space-y-4 ${
                  animate ? 'animate-fadeIn' : 'opacity-0'
                }`}
              >
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-600 uppercase tracking-wider mt-6">
                    Trusted Healthcare
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  <span className="block">Expert Medical Care</span>
                  <span className="block font-normal text-gray-700 mt-2">
                    When You Need It Most
                  </span>
                </h1>

                <div className="w-20 h-0.5 bg-gray-300 mx-auto transition-all-500"></div>
              </div>

              {/* Description with Staggered Animation */}
              <div
                className={`max-w-3xl mx-auto ${
                  animate ? 'animate-fadeIn delay-100' : 'opacity-0'
                }`}
              >
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our dedicated team of medical professionals combines expertise
                  with compassion to provide the highest quality care. Trusted
                  by thousands for personalized treatment and reliable medical
                  guidance.
                </p>
              </div>

              {/* Search Form with Scale Animation */}
              <div
                className={`max-w-2xl mx-auto ${
                  animate ? 'animate-scaleIn delay-200' : 'opacity-0'
                }`}
              >
                <form
                  onSubmit={(e) => {
                    handleSearch(e, searchText);
                    setSearchText('');
                  }}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 transition-all-300 hover:shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <svg
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                      <input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full pl-12 pr-4 py-3.5 bg-transparent border-none focus:outline-none focus:ring-0 text-gray-700 placeholder-gray-500"
                        type="text"
                        placeholder="Find a doctor by name, specialty, or location"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg transition-all-300 hover:bg-white hover:text-blue-600 hover:shadow-lg active:scale-95"
                    >
                      Search Now
                    </button>
                  </div>
                </form>
              </div>

              {/* Image Gallery - 2 Images with Smooth Animations */}
              <div
                className={`max-w-4xl mx-auto mt-12 ${
                  animate ? 'animate-fadeIn delay-300' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* First Image - Slides from Left */}
                  <div
                    className={`relative overflow-hidden rounded-xl shadow-lg transition-all-300 hover:shadow-xl ${
                      animate ? 'animate-slideLeft delay-400' : 'opacity-0'
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Modern Medical Facility"
                        className="w-full h-full object-cover transition-all-500 hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            'https://via.placeholder.com/800x600/F3F4F6/6B7280?text=Modern+Medical+Facility';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-all-300">
                      <p className="font-medium">Modern Medical Facility</p>
                    </div>
                  </div>

                  {/* Second Image - Slides from Right */}
                  <div
                    className={`relative overflow-hidden rounded-xl shadow-lg transition-all-300 hover:shadow-xl ${
                      animate ? 'animate-slideRight delay-500' : 'opacity-0'
                    }`}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Expert Medical Team"
                        className="w-full h-full object-cover transition-all-500 hover:scale-110"
                        onError={(e) => {
                          e.target.src =
                            'https://via.placeholder.com/800x600/F3F4F6/6B7280?text=Expert+Medical+Team';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 hover:opacity-100 transition-all-300">
                      <p className="font-medium">Expert Medical Team</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div
                className={`max-w-3xl mx-auto pt-8 ${
                  animate ? 'animate-fadeIn delay-600' : 'opacity-0'
                }`}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { number: '200+', label: 'Specialist Doctors' },
                    { number: '24/7', label: 'Emergency Care' },
                    { number: '15+', label: 'Years Experience' },
                    { number: '99%', label: 'Satisfaction' },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100 transition-all-300 hover:bg-white hover:border-gray-200"
                    >
                      <div className="text-2xl font-light text-gray-900 mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${
            animate ? 'animate-fadeIn delay-700' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-gray-400 tracking-wider animate-pulse">
              Explore More
            </span>
            <svg
              className="w-5 h-5 text-gray-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
