import React from "react";
import LAPTOP from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={LAPTOP} alt='' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </p>
          <p>
            Unlock the power of data analytics with our centralized management
            solution. Streamline data collection, analysis, and reporting, all
            from one centralized dashboard. Gain insights, make informed
            decisions, and drive your business forward with ease. Take control
            of your data analytics process and experience the efficiency of
            centralized management today.
          </p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 p-3 text-[white] hover:bg-[#00df98cc] hover:text-black'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
