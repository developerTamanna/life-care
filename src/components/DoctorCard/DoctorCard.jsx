import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({ doctor }) => {
  const { image, name, education, experience, registration_number, availabilityBadge, id, speciality} = doctor || {};

  return (
    <div className="w-full  p-4 bg-white rounded-2xl shadow-lg">
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl mb-4">
        <img
          src={image}
          alt={name}
          className="h-full object-contain"
        />
      </div>

      <div className="flex gap-2 mb-2">
        {availabilityBadge && (
          <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            {availabilityBadge}
          </span>
        )}
        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
          {experience} Experience
        </span>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
      <div className='flex gap-2'>
      <p className="text-sm text-gray-600 mb-2">{education}</p>
      <p className='text-sm text-blue-600 mb-2'>{speciality}</p>
      </div>

      <p className="flex items-center text-sm text-gray-500 mb-4">
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A9.968 9.968 0 0112 15c2.4 0 4.597.84 6.25 2.25m1.629-3.033A9.953 9.953 0 0021 12c0-5.523-4.477-10-10-10S1 6.477 1 12c0 1.8.477 3.488 1.316 4.938M15 19h6m0 0v-6m0 6l-6-6"
          />
        </svg>
        Reg No: {registration_number}
      </p>

      <Link to={`/doctor-details/${id}`}>
      <button className="w-full text-center py-2 rounded-full border border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition cursor-pointer">
        View Details
      </button>
      </Link>
    </div>
  );
};

export default DoctorCard;
