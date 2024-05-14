
<img onClick={toggleDiv} className="w-[24px] h-[17px] block md:hidden lg:hidden cursor-pointer" src="/imges/icons/icon-hamburger.svg" alt="" />

{divOpen && (
    <div className="absolute top-[75px] left-[15%]  z-10">
        <div className="space-y-1 w-[275px] shadow-lg font-semibold text-[#1B1D23] bg-[#FFFFFF] mt-4 p-3 rounded-lg  text-[30px] pl-10 list-none">
            <Link to="/protfulio" className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Portfolio</Link> <br />
            <Link to="/about"  className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">About Us</Link>
            <Link to="/contact" className="cursor-pointer w-[140px] p-1 rounded-lg hover:bg-gray-100">Contact</Link>
        </div>
    </div>
)}