import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black flex'>
      {/* Content Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='flex flex-grow flex-col justify-center'>
          <p className='text-blue-500 mt-10'>Hi, I am</p>
          <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>
            SUBHASH
          </h1>
          <p className='text-[#F6F0EF] py-4 max-w-[1000px]'>
            I am pursuing my degree at VIT-AP UNIVERSITY. I am a passionate Computer Science & Engineering student with a strong interest in software development. 
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
