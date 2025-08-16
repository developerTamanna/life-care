import React, { useEffect, useState } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

const DoctorsContainer = ({doctors}) => {

  const [displayDoctors, setDisplayDoctors] = useState([])

    // console.log(doctors)
    //function button

    const [showAll,setShowAll]=useState(false)

    useEffect(()=>{

        if(showAll){
            setDisplayDoctors(doctors)
        }
        else{
            setDisplayDoctors(doctors.slice(0, 6))
        }

    },[doctors, showAll])
    return (
        <div>
            <div className='text-center mb-8 mt-20'>
            <h1 className='md:text-xs lg:text-5xl text-gray-800 font-medium'>Our Best Doctors</h1>
            <p className='py-6 text-gray-600'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
           <div className='lg:py-12 md:py-10'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>

         {
            displayDoctors.map(doctor=> <DoctorCard
            key={doctor.id}
            doctor={doctor}
            ></DoctorCard>)
         }
            </div>
            <button
             onClick={()=>{
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo(0, 400)
             }}
            
            className="btn btn-primary ">{showAll?'Show Less':'Show All'}</button>
            </div> 
        </div>
    );
};

export default DoctorsContainer;