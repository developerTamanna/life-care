import React from 'react';
import CountUp from 'react-countup';

const BestServices = () => {
    return (
        <div>
            <div className='bg-gray-100 py-5 px-4 sm:px-6 lg:px-10 mt-10'>
                <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold text-center'>
                    We Provide Best Medical Services
                </h2>
                <p className='text-center mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                </p>

                {/* parent div  */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10'>
                    {/* card-1  */}
                    <div className='bg-white p-5 rounded-md space-y-3 text-center'>
                        <img className='w-10 mx-auto' src='https://i.ibb.co.com/2Y0Nh7R8/fi-3160069.png' alt="" />
                        <CountUp
                            className='text-3xl md:text-4xl font-bold'
                            end={199}
                            duration={5}
                            suffix='+'
                            enableScrollSpy
                        />
                        <p>Total Doctors</p>
                    </div>
                    {/* card-2  */}
                    <div className='bg-white p-5 rounded-md space-y-3 text-center'>
                        <img className='w-10 mx-auto' src='https://i.ibb.co.com/hRVjcPRr/fi-2854545.png' alt="" />
                        <CountUp
                            className='text-3xl md:text-4xl font-bold'
                            end={467}
                            duration={5}
                            suffix='+'
                            enableScrollSpy
                        />
                        <p>Total Reviews</p>
                    </div>
                    {/* card-3  */}
                    <div className='bg-white p-5 rounded-md space-y-3 text-center'>
                        <img className='w-10 mx-auto' src='https://i.ibb.co.com/yFy7dbFZ/fi-7804340.png' alt="" />
                        <CountUp
                            className='text-3xl md:text-4xl font-bold'
                            end={1900}
                            duration={5}
                            suffix='+'
                            enableScrollSpy
                        />
                        <p>Patients</p>
                    </div>
                    {/* card-4  */}
                    <div className='bg-white p-5 rounded-md space-y-3 text-center'>
                        <img className='w-10 mx-auto' src='https://i.ibb.co.com/DPB5K80f/fi-15536380.png' alt="" />
                        <CountUp
                            className='text-3xl md:text-4xl font-bold'
                            end={300}
                            duration={5}
                            suffix='+'
                            enableScrollSpy
                        />
                        <p>Total Stuffs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestServices;
