import React, { useEffect, useState } from 'react';
import { getBookings, removeBooking } from '../utils';
import BookingCard from './BookingCard';
import { Link } from 'react-router';
import ConeChart from './ConeChart';

const MyBooKing = () => {
  const [displayDoctors, setDisplayDoctors] = useState([]);

  useEffect(() => {
    const saveDoctors = getBookings();
    setDisplayDoctors(saveDoctors);
  }, []);

  const handleDelete = (id) => {
    removeBooking(id);
    setDisplayDoctors(getBookings());
  };

  return (
    <>
      <div className='mt-20'>
      {displayDoctors.length > 0 && (
        <ConeChart data={displayDoctors} />
      )}
      </div>

      <div className="py-12 px-4 bg-gray-100 min-h-screen">
        {displayDoctors.length > 0 ? (
          <>
            <div className="text-center p-2 mt-10">
              <h2 className="text-2xl font-bold mb-2">My Today Appointments</h2>
              <p className="text-gray-600">
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
              </p>
            </div>
            <div className="grid gap-4">
              {displayDoctors.map((doctor, index) => (
                <BookingCard key={index} doctor={doctor} handleDelete={handleDelete} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center mt-20">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">You have no booked any appointment yet!</h2>
            <p className="text-sm p-2 text-gray-500">
              Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
            </p>
            <Link to="/">
              <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mt-4">
                Back to Home
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default MyBooKing;
