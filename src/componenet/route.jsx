import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const route = () => {
    return (
        <div className="  shadow-lg mx-auto
        w-[327px] md:w-[688px] lg:w-[1180px] pl-[5px] md:pl-[50px] lg:pl-[50px] pr-[5px] md:pr-[50px]  lg:pr-[50px]  bg-[#FFFFFF]">
          <Navbar></Navbar>
         <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default route;