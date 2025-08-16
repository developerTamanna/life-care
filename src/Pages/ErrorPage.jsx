import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-md w-full p-6 bg-white rounded-xl shadow-lg mt-20 mx-auto">
                <img className='mx-auto' src="https://i.ibb.co.com/tTqdWDJj/download.jpg" alt=""/>
                <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Oops! The page you're looking for doesn't exist. Please check the URL or return to the homepage.
                </p>
                <Link 
                    to="/" 
                    className="btn btn-primary px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;