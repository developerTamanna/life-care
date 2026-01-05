import React, { useState } from 'react';
import Hero from '../components/Navbar/Footer/Hero/Hero';
import DoctorsContainer from '../components/DoctorsContainer/DoctorsContainer';
import { useLoaderData } from 'react-router';
import BestServices from '../components/BestServices/BestServices';
const Home = () => {

    //card container er data load function

   const data = useLoaderData()
//    console.log(data)

   //search function
   const [doctors,setDoctors] = useState(data)

   const handleSearch = (e, text) => {
    e.preventDefault();
      if(text==='') return setDoctors(data);
    const searchDoctors = data.filter(doctor =>
        doctor?.name?.toLowerCase().split(' ').includes(text.toLowerCase())
    );

    setDoctors(searchDoctors);
};

    return (
        <div>
           <Hero
           handleSearch ={handleSearch}

           ></Hero>
         <div>
            <DoctorsContainer
            doctors = {doctors}

            ></DoctorsContainer>
         </div>
            <BestServices></BestServices>
        </div>
    );
};

export default Home;
