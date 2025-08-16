import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import '../App.css'
import Footer from '../components/Navbar/Footer/Footer';
import { RingLoader } from 'react-spinners';

const MainLayout = () => {

    const navigation = useNavigation();
    const isloading = navigation.state === 'loading';

    return (





        <div className="bg-[#efefef] min-h-screen">
        {isloading ? (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <RingLoader color="#36D7B7" size={60} />
          </div>
        ) : (
          <>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto min-h-[calc(100vh-435px)] lg:p-5 my-6">
              <Outlet></Outlet>
            </div>
            <Footer></Footer>
          </>
        )}
      </div>

        // <div>
        //     <Navbar></Navbar>
        //        <div className=' min-h-[calc(100vh-116px)]'>
        //       <div className='max-w-screen-2xl mx-auto'>
        //       <Outlet></Outlet>
        //       </div>
        //        </div>
        //       <div className='mt-20'>
        //       <Footer></Footer>
        //       </div>
        // </div>
    );
};

export default MainLayout;