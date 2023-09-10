import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Hero = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["BTB", "BTC", "SASS"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className=' text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DATA ANALYTICS
        </p>
        <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 '>
          Grow with data.
        </p>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for{" "}
            <span ref={el} className='text-[#00df9a] pl-2'></span>
          </p>
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 p-3 text-black hover:bg-[#00df98cc] hover:text-white'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
