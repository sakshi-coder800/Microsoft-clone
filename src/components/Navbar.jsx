import React, { useState } from 'react';
import logo from "../../public/img/logo.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex md:flex-row navbar justify-between items-center text-center p-4'>
      <div className="flex  items-center w-full">
        <div className="flex items-center">
          <div 
            className="hamburger inline-block p-4 cursor-pointer md:hidden" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
            <div className="line h-0.5 w-6 my-1 bg-black"></div>
          </div>

          <div className="logo text-center">
            <img src={logo} className='w-[50%]' alt="Microsoft Logo" />
          </div>
        </div>

        <div className={`features absolute w-full md:static md:w-auto bg-gray-200 md:bg-white inset-0 md:flex md:mx-4 md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          {['Microsoft 365', 'Office', 'Windows', 'Surface', 'Xbox', 'Support'].map(item => (
            <div key={item} className="fitem hover:underline hover:underline-offset-8 cursor-pointer p-2">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="cart text-center md:order-3 flex justify-center items-center  md:mt-0">
        <div className="search hidden md:block mr-6">All Microsoft</div>
        {/* <div className="mx-2">Search</div> */}
        <img className="w-4 mr-6" src="../../public/img/search.svg" alt="Search Icon" />
        <div className="flex pt-1">
          <img className="w-4 h-4 mr-4" src="../../public/img/cart.svg" alt="Cart Icon" />
          <img className="w-4 h-4 mr-4" src="../../public/img/user.svg" alt="Account Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
