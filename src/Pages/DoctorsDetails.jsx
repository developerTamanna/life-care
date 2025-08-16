import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { addBooking } from '../utils';

const DoctorsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const navigate = useNavigate()

    // Check if the id is a valid number
    if (!/^\d+$/.test(id)) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-10 border-1 border-red-300 shadow-md mt-20">
                <h2 className="text-2xl font-bold text-red-600 mb-3">No Doctor Found!!</h2>
                <p className="text-gray-600 mb-5">
                    No Doctor Found With Id-number. You entered:
                    <span className="font-mono text-sm ml-1 text-blue-600">{id}</span>
                </p>
                <Link to="/">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                        View All Doctors
                    </button>
                </Link>
            </div>
        );
    }

    const numericId = parseInt(id);
    const singleDoctor = data.find(doctor => doctor.id === numericId);

    if (!singleDoctor) {
        return (
            <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-10">
                <h2 className="text-2xl font-bold text-red-600 mb-3">No Doctor Found!!</h2>
                <p className="text-gray-600 mb-5">
                No Doctor Found With Id-number:
                    <span className="font-mono text-sm ml-1 text-blue-600">{id}</span>
                </p>
                <Link to="/bookings">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                        View All Doctors
                    </button>
                </Link>
            </div>
        );
    }

    const {
        image,
        name,
        education,
        workplace,
        registration_number,
        availability,
        fee, speciality
    } = singleDoctor;

    const handleBooking = () => {
        addBooking(singleDoctor, navigate);
    };

    return (
        <div className="p-5 bg-white rounded-2xl shadow-md mx-auto mt-10 lg:px-20">
            <div className='bg-white rounded-xl p-5 shadow-sm'>
                <h2 className="text-2xl font-semibold text-center mb-3">Doctor’s Profile Details</h2>
                <p className="text-center text-gray-500 mb-8">
                    We are dedicated to providing the best healthcare services to ensure your well-being.
                    Consult with experienced doctors and take the right step towards a healthier life.
                    Your health is our top priority.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-5 items-center bg-white rounded-xl p-4 lg:p-5 shadow-sm mt-5">
  <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-xl overflow-hidden bg-gray-100 mx-auto lg:mx-0">
    <img src={image} alt={name} className="w-full h-full object-contain" />
  </div>

  <div className="flex-grow text-center lg:text-left mt-4 lg:mt-0">
    <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
    <div className='flex gap-2'>
    <p className="text-sm text-gray-700 mb-1">{education}</p>
    <p className='text-sm text-blue-700 mb-1'>{speciality}</p>
    </div>
    <p className="text-sm text-gray-600 mb-1">
      <span className="font-medium text-gray-800">Working at </span> {workplace}
    </p>
    <p className="flex justify-center lg:justify-start items-center text-sm text-gray-500 mb-3">
      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A9.968 9.968 0 0112 15c2.4 0 4.597.84 6.25 2.25m1.629-3.033A9.953 9.953 0 0021 12c0-5.523-4.477-10-10-10S1 6.477 1 12c0 1.8.477 3.488 1.316 4.938M15 19h6m0 0v-6m0 6l-6-6"
        />
      </svg>
      Reg No: {registration_number}
    </p>

    <div className="mb-2">
      <span className="font-medium text-gray-800">Availability: </span>
      {availability.map((day, index) => (
        <span key={index} className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full mr-2 mt-1">
          {day}
        </span>
      ))}
    </div>

    <p className="text-sm text-gray-700">
      <span className="font-medium">Consultation Fee:</span>{" "}
      <span className="text-blue-600 font-bold">{fee}</span> (Incl. VAT)
      <a href="#" className="text-blue-500 underline ml-1">Per consultation</a>
    </p>
  </div>
</div>


<div className="mt-6 p-4 sm:p-5 rounded-xl bg-white shadow-sm">
  <h3 className="text-base sm:text-lg font-semibold mb-3">Book an Appointment</h3>

  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 mb-4">
    <p className="text-sm font-medium text-gray-800">Availability</p>
    <span className="bg-green-100 text-green-600 px-3 py-1 text-xs rounded-full text-center w-max">
      Doctor Available Today
    </span>
  </div>

  <p className="text-xs text-yellow-700 bg-yellow-50 p-2 rounded mb-4">
    ⚠️ Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
  </p>

  
    <button
      onClick={handleBooking}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
      Book Appointment Now
    </button>

</div>

        </div>
    );
};

export default DoctorsDetails;
