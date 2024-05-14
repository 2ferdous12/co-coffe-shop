
const home = () => {
    return (
        <div>
            <div className="mt-5 ">
                <div className="hero w-[320px] md:w-[588px] lg:w-[1080px] h-[600px] object-cover bg-center bg-gradient-to-r from-[#A2A2A2] to-[#FEFCF7]"
                    style={{ backgroundImage: 'url(/images/about/image-hero-coffeepress.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl md:text-7xl lg:text-7xl font-bold">Great coffee <br /> made simple.</h1>
                            <p className="mb-5 w-[300px] md:w-[500px] lg:w-[500px]">Start your mornings with the worlds best coffees. Try our expertly curated artisan
                                coffees from our best roasters delivered directly to your door, at your schedule.</p>
                            <button className="w-[200px] hover:bg-[#66D2CF] cursor-pointer text-xl rounded-md h-[56px] text-white font-bold bg-[#0E8784]">Create your plan</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-[320px] md:w-[588px] lg:w-[1080px]  mx-auto absolute">
                <img className="w-[327px] md:w-[689px] lg:w-[1180px]" src="/images/about/Group 13.png" alt="" />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-between  mt-[200px] w-[320px] md:w-[588px] lg:w-[1080px] gap-10  mb-20 ">
                <div className="flex flex-col  md:flex-row lg:flex-col">
                    <img className="w-[255px] h-[193px] mx-auto" src="/images/about/image-gran-espresso.png" alt="" />
                    <div>
                        <p className="font-bold mt-10 text-xl text-[#333D4B]  text-center ">Gran Espresso</p>
                        <p className="w-[255px] text-[#333D4B] mx-auto text-center">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row lg:flex-col">
                    <img className="w-[255px] h-[193px] mx-auto" src="/images/about/image-gran-espresso.png" alt="" />
                    <div>
                        <p className="font-bold mt-10 text-xl text-[#333D4B]  text-center ">Planalto</p>
                        <p className="w-[235px] text-[#333D4B] mx-auto text-center">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row  lg:flex-col">
                    <img className="w-[255px] h-[193px] mx-auto" src="/images/about/image-piccollo.png" alt="" />
                    <div className="">
                        <p className="font-bold mt-10 text-xl text-[#333D4B]  text-center ">Piccollo</p>
                        <p className="w-[235px] text-[#333D4B] mx-auto text-center">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row  lg:flex-col">
                    <img className="w-[255px] h-[193px] mx-auto" src="/images/about/image-planalto.png" alt="" />
                    <div className="">
                        <p className="font-bold mt-10 text-xl text-[#333D4B]  text-center ">Danche</p>
                        <p className="w-[235px] text-[#333D4B] mx-auto text-center">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                    </div>
                </div>
            </div> 

        </div>
    );
};

export default home;