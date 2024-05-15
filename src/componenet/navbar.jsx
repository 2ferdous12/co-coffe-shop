import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
    const [divOpen, setDivOpen] = useState(false);

    const toggleDiv = () => {
        setDivOpen(!divOpen);
    };

    return (
        <div className="h-[90px]  p-3 flex items-center relative">
            <div className=" w-[327px] md:w-[689px] lg:w-[1280px]  flex  items-center justify-between   text-[15px]
             text-[#83888F] ">
                <div className=''>
                  <img className='w-[203px] h-[24px]' src="/images/Group 5.svg" alt="" />
                </div>
                <div className='flex justify-end gap-10 font-bold'>
                    <Link to="/" className="hidden cursor-pointer md:block lg:block">HOME</Link>
                    <Link to="/about" className="hidden cursor-pointer md:block lg:block">ABOUT US</Link>
                    <Link to="/createPlan" className="hidden cursor-pointer md:block lg:block">CREATE YOUR PLAN</Link>
                    <img onClick={toggleDiv} className="w-[24px] h-[17px] block md:hidden lg:hidden cursor-pointer" src="/images/icon-hamburger.svg" alt="" />
                </div>
                {divOpen && (
                    <div className="absolute top-[75px] left-[3%]  z-10">
                        <div className="space-y-2 w-[275px] shadow-lg font-semibold text-[#1B1D23] bg-[#FFFFFF] mt-4 p-3 rounded-lg text-center text-[25px] pl-5 list-none">
                            <Link to="/" className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">HOME</Link> <br />
                            <Link to="/about" className="cursor-pointer w-[140px] p-1 mb-10 rounded-lg hover:bg-gray-100">ABOUT US</Link> <br />
                            <Link to="/createPlan" className="cursor-pointer w-[140px] p-1 mt-20 rounded-lg hover:bg-gray-100">CREATE YOUR PLAN</Link>
                            <p></p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default navbar;