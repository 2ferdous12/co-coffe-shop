import { Link } from "react-router-dom";


const footer = () => {
    return (
<div className="mx-auto ">
<div className=" 
        w-[371px]  md:w-[588px] lg:w-full  p-2  bg-[#2C343E] flex items-center 
         h-[346px] md:h-[270px] lg:h-[120px]">
         <div className="flex mx-auto   flex-col md:flex-col lg:flex-row 
         lg:justify-around   w-[327px]  md:w-[440px]  lg:w-full ">
            <div>
            <img className='w-[203px]  mx-auto h-[24px] mb-6  md:mb-8  lg:mb-0'  src="/images/about/coffeeroasters.png" alt="" />
            </div>
            <div className="flex flex-col mx-auto md:flex-row lg:flex-row items-center gap-6 md:gap-10 lg:gap-10 text-[#83888F] mb-6  md:mb-8  lg:mb-0 font-bold">
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT US</Link>
                <Link to="/createPlan">CREATE YOUR PLAN</Link>
            </div>
            <div className="flex justify-center gap-6 ">
                <img src="/images/about/Path.svg" alt="" />
                <img src="/images/about/Path (1).svg" alt="" />
                <img src="/images/about/Shape.svg" alt="" />
            </div>
         </div>
        </div>
</div>
    );
};

export default footer;