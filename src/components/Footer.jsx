import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] bodoni'>
          FinTrackr.
        </h1>
        <p className='py-4'>
          FinTrackr offers advanced data analytics solutions and insights for
          businesses. Discover how we can help your company grow.
        </p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} className='LINK-HOVER' />
          <FaInstagram size={30} className='LINK-HOVER' />
          <FaTwitterSquare size={30} className='LINK-HOVER' />
          <FaGithubSquare size={30} className='LINK-HOVER' />
          <FaDribbbleSquare size={30} className='LINK-HOVER' />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='footer-links LINK-HOVER'>Analytics</li>
            <li className='footer-links LINK-HOVER'>Marketing</li>
            <li className='footer-links LINK-HOVER'>Commerce</li>
            <li className='footer-links LINK-HOVER'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='footer-links LINK-HOVER'>Pricing</li>
            <li className='footer-links LINK-HOVER'>Documentation</li>
            <li className='footer-links LINK-HOVER'>Guides</li>
            <li className='footer-links LINK-HOVER'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='footer-links LINK-HOVER'>About</li>
            <li className='footer-links LINK-HOVER'>Blog</li>
            <li className='footer-links LINK-HOVER'>Jobs</li>
            <li className='footer-links LINK-HOVER'>Press</li>
            <li className='footer-links LINK-HOVER'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='footer-links LINK-HOVER'>Claim</li>
            <li className='footer-links LINK-HOVER'>Policy</li>
            <li className='footer-links LINK-HOVER'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
