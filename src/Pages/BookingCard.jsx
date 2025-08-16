import React from 'react';


const BookingCard = ({ doctor, handleDelete }) => {
    const { name,education,fee ,id, speciality } = doctor;
    return (
        <div className="p-4 rounded-lg shadow-sm flex flex-col bg-white mt-8">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-dotted border-gray-400 p-2 space-y-4 sm:space-y-0">
    <div>
      <h3 className="font-medium text-black">{name}</h3>
      <div className='flex gap-2'>
      <p className="text-xs text-gray-600 mt-2">{education}</p>
      <p className='text-xs text-blue-600 mt-2'>{speciality}</p>
      </div>
    </div>
    <div>
      <p className="text-md text-gray-600 text-right sm:text-left">
        Appointment fee: {fee} + vat
      </p>
    </div>
  </div>
  <button
    onClick={() => handleDelete(id)}
    className="bg-white text-red-600 px-4 py-1 rounded w-full hover:bg-red-600 hover:text-white mt-8 border"
  >
    Cancel Appointment
  </button>
</div>

    );
};

export default BookingCard;
