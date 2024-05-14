
const home = () => {
    return (
        <div>
            <div className="mt-5 ">
                <div className="hero w-[371px] md:w-[588px] lg:w-[1080px] h-[600px] object-cover bg-center bg-gradient-to-r from-[#A2A2A2] to-[#FEFCF7]"
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


            <div className="w-[371px] md:w-[588px] lg:w-[1080px]  mx-auto absolute">
                <img className="w-[327px] md:w-[689px] lg:w-[1180px]" src="/images/about/Group 13.png" alt="" />
            </div>

            <div className="flex flex-col md:flex-col lg:flex-row justify-between  mt-[200px] w-[371px] md:w-[588px] lg:w-[1080px] gap-10  mb-20 ">
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


            <div className="mb-4 md:mb-0 lg:mb-0">
                <div className="hero h-[577px] w-[371px] md:w-[588px] lg:w-[1080px]  bg-[#2C343E] rounded-md">
                    <div className="hero-content text-center">
                        <div className="">
                            <h1 className="text-5xl text-white font-bold">Why choose us?</h1>
                            <p className="py-6 text-[#FEFCF7]">A large part of our role is choosing which particular coffees will be featured
                                in our range. This means working closely with the best coffee growers to give
                                you a more impactful experience on every level..</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row gap-5 w-[371px] md:w-[588px] lg:w-[1080px] pl-6 md:pl-0 lg:pl-0 mt-10 md:ml-10  lg:ml-10 -translate-y-52">
                    <div className="flex flex-col md:flex-row lg:flex-col items-center w-[320px]  md:w-[506px] lg:w-[320px] h-[382px] 
                    md:h-[180px] lg:h-[372px] text-center pt-14 md:pt-0 lg:pt-14 bg-[#0E8784] rounded-md">
                        <img className="mx-auto md:w-[56px] lg:w-[71px] md:h-[56px] lg:h-[71px]  " src="/public/images/about/icon-coffee-bean.svg" alt="" />
                        <div className="">
                            <h4 className="text-xl text-[#FEFCF7] font-bold mt-10 mb-5 mr-5">Best quality</h4>
                            <p className="mx-auto md:w-[344px] lg:w-[255px] text-[#FEFCF7] mr-2 md:mr-5 lg:mr-5">Discover an endless variety of the worlds best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-col items-center w-[320px]  md:w-[506px] lg:w-[320px] h-[382px] 
                    md:h-[180px] lg:h-[372px] text-center pt-14 md:pt-0 lg:pt-14 bg-[#0E8784] rounded-md">
                        <img className="mx-auto md:w-[56px] lg:w-[71px] md:h-[56px] lg:h-[71px]  " src="/public/images/about/icon-gift.svg" alt="" />
                        <div className="">
                            <h4 className="text-xl text-[#FEFCF7] font-bold mt-10 mb-5 mr-5">Exclusive benefits</h4>
                            <p className="mx-auto md:w-[344px] lg:w-[255px] text-[#FEFCF7] mr-2 md:mr-5 lg:mr-5">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-col items-center w-[320px]  md:w-[506px] lg:w-[320px] h-[382px]  
                    md:h-[180px] lg:h-[372px] text-center pt-14 md:pt-0 lg:pt-14 bg-[#0E8784] rounded-md">
                        <img className="mx-auto md:w-[56px] lg:w-[71px] md:h-[56px] lg:h-[71px]  " src="/public/images/about/icon-truck.svg" alt="" />
                        <div className=" ">
                            <h4 className="text-xl text-[#FEFCF7] font-bold mt-10 mb-5 mr-5">Free shipping</h4>
                            <p className="mx-auto md:w-[344px] lg:w-[255px] text-[#FEFCF7] mr-2 md:mr-5 lg:mr-5">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-2 md:mb-0 lg:mb-0 -mt-[100px] md:-mt-[0px] lg:-mt-[0px] p-3">
                <p className="font-bold text-[#83888F] text-xl">How it works</p>
            </div>


            <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-5 items-center w-[371px] md:w-[588px] lg:w-[1080px] pl-10 md:pl-0 lg:pl-0 md:ml-0 lg:ml-10 ">
                <div className="w-[320px] h-[372px]   pt-0 md:pt-14  lg:pt-14  rounded-md">
                    <img className="" src="/public/images/home/01.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-10 mb-5">Best quality</h4>
                    <p className=" w-[255px] md:w-[190px] lg:w-[255px] text-[#333D4B]">Discover an endless variety of the worlds best artisan coffee from each of our roasters.</p>
                </div>
                <div className="w-[320px] h-[372px] pt-0 md:pt-14  lg:pt-14  rounded-md">
                    <img className="" src="/public/images/home/02.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-10 mb-5">Exclusive benefits</h4>
                    <p className=" w-[255px] md:w-[200px] lg:w-[255px] text-[#333D4B]">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                </div>
                <div className="w-[320px]  h-[372px]  pt-0 md:pt-14  lg:pt-14 rounded-md">
                    <img className="" src="/public/images/home/03.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-10 mb-5">Free shipping</h4>
                    <p className=" w-[255px] md:w-[190px] lg:w-[255px] text-[#333D4B]">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
                </div>
            </div>

            <div className="ml-5 mb-10">
                <button className="w-[200px] hover:bg-[#66D2CF] cursor-pointer text-xl rounded-md h-[56px] text-white font-bold bg-[#0E8784]">Create your plan</button>
            </div>


        </div>
    );
};

export default home;