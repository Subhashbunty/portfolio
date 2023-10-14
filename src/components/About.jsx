import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black '>
      <div className='flex flex-col justify-center items-center w-full h-full '>
        <div className='max-w-[100px] w-full grid grid-cols-2 gap-8 mt-20'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-6xl font-bold inline border-b-4 border-red-600 text-white'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-rows-2 gap-8 px-4'>
            <div className='sm:text-center text-5xl font-bold text-white'>
              <p>Hi, I am Subhash, nice to meet you.</p>
            </div>
            <div className='sm:text-center text-1xl font-bold text-[#E81515]'>
              <p >Welcome to my portfolio. I am a Computer Science & Engineering student with a passion for technology and problem-solving. Explore my work and projects to learn more about my journey.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
