import React from "react";
import data from "../data";

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {data.map((item) => (
          <div
            key={item.id}
            className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 hover:cursor-pointer'
          >
            <img
              className='w-20 mx-auto mt-[-3rem] bg-white'
              src={item.img}
              alt=''
            />
            <h2 className='text-2xl font-bold text-center py-8'>
              {item.title}
            </h2>
            <p className='text-center text-4xl font-bold'>{item.price}</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8  mt-8'>{item.storage}</p>
              <p className='py-2 border-b mx-8 '>{item.grantedPersons}</p>
              <p className='py-2 border-b mx-8 '>{item.extraData}</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-[#00df98d7] hover:text-white'>
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
