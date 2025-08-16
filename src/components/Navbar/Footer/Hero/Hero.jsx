import React, { useState } from 'react';

const Hero = ({handleSearch}) => {

    //search function
    const [searchText, setSearchText] = useState('')
    //    console.log(searchText)

    return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-white lg:p-4 md:p-1">
    <div className="w-full max-w-6xl rounded-2xl border border-white/100 bg-white/5 p-10 mt-10">
<div className="text-center">
<h1 className="text-lg sm:text-xl md:text-2xl lg:text-5xl xl:text-7xl font-thin text-gray-800 leading-snug sm:leading-normal text-center sm:text-left lg:text-center">
  Dependable Care, Backed by Trusted <br className="hidden sm:block" /> Professionals.
</h1>


<p className="py-4 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed text-center sm:text-left lg:text-center">
  Our best doctors are here to provide expert care, compassion, and support.
  <br className="hidden sm:block" />
  With years of experience and a commitment to your well-being, they are dedicated to offering personalized treatment and trusted medical advice — right when you need it most.
</p>



    <form 
    onSubmit={(e)=>{
        handleSearch(e, searchText)
        //reset input state
        setSearchText('')
    }}
    className="md:flex items-center justify-center gap-2"> 
        <input
           value={searchText}
            onChange={e=>setSearchText(e.target.value)}
            className="md:w-3/6 p-2 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            type="text"
            placeholder="Search any doctor..."
        />
        <div className="mt-2 md:mt-0">
            <button
            type='submit'
            className="btn btn-primary">Search Now</button>
        </div>
    </form>

    <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
        <img 
            className="w-64 h-64 object-cover rounded-lg" 
            src="https://i.ibb.co/qYgNvybR/banner-1-img.png" 
            alt="Banner" 
        />
        <img 
            className="w-64 h-64 object-cover rounded-lg" 
            src="https://i.ibb.co/fVWWD71g/about-img.png" 
            alt="Banner" 
        />
    </div>
</div>
</div>
</div>
    );
};

export default Hero;
