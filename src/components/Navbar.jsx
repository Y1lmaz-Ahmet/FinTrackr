import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* <!-- DESKTOP NAVIGATION --> */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a] bodoni'>
        FinTrackr.
      </h1>
      <ul className='hidden md:flex PT'>
        <li className='p-4 LINK-HOVER'>Home</li>
        <li className='p-4 LINK-HOVER'>Company</li>
        <li className='p-4 LINK-HOVER'>Resources</li>
        <li className='p-4 LINK-HOVER'>About</li>
        <li className='p-4 LINK-HOVER'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden LINK-HOVER'>
        {!openNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      {/* <!-- MOBILE NAVIGATION --> */}
      <div
        className={
          openNav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-[1px] border-r-gray-600  bg-[#000300] ease-in-out duration-500"
            : "fixed left-[100%]"
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 bodoni'>
          FinTrackr.
        </h1>
        <ul className='uppercase p-4 PT'>
          <li className='p-4 border-b border-gray-600 LINK-HOVER'>Home</li>
          <li className='p-4 border-b border-gray-600 LINK-HOVER'>Company</li>
          <li className='p-4 border-b border-gray-600 LINK-HOVER'>Resources</li>
          <li className='p-4 border-b border-gray-600 LINK-HOVER'>About</li>
          <li className='p-4 LINK-HOVER'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
