import { toast } from 'react-toastify';

export const getBookings = () => {
    const bookings = localStorage.getItem('bookings');
    if (bookings) return JSON.parse(bookings);
    return [];
}

export const addBooking = (doctor, navigate) => {
    const bookings = getBookings();
    const isExist = bookings.find(d => d.id === doctor.id);

    if (isExist) {
        
        toast.error('❌ Already Booked!', { autoClose: 1500 }); 
       
        return;
    }

    bookings.push(doctor);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    toast.success('✅ Appointment Booked Successfully!', { autoClose: 1500 }); 
    navigate('/my-booking')  
}

export const removeBooking = (id) => {
    const bookings = getBookings();
    const remainingBookings = bookings.filter(doctor => doctor.id !== id);
    localStorage.setItem('bookings', JSON.stringify(remainingBookings));
    toast.info('🗑️ Booking Removed.', { autoClose: 1500 });  // info toast
}
