

const about = () => {
    return (
        <div>
            <div className="mt-5 ">
                <div className="hero w-[371px] md:w-[588px] lg:w-[1080px] h-[600px] object-cover bg-center bg-gradient-to-r from-[#A2A2A2] to-[#FEFCF7]"
                    style={{ backgroundImage: 'url(/images/home/image-hero-whitecup.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl md:text-7xl lg:text-7xl font-bold">About Us</h1>
                            <p className="mb-5 w-[300px] md:w-[500px] lg:w-[500px]">Coffeeroasters began its journey of
                             exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been
                             dedicated to bring the perfect cup - from bean to brew - in every shipment.</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-10 gap-5 mb-20 md:mb-20 lg:mb-10">
                <div className="w-[371px] md:w-[481px] lg:w-[481px] h-[470px]">
                    <img className="w-[371px] md:w-[481px] lg:w-[481px] h-[470px]" src="/images/home/image-commitment.jpg" alt="" />
                </div>
                <div className="mx-auto">
                  <h3 className="text-3xl font-bold text-[#333D4B]">Our commitment</h3>
                  <p className="mt-8 text-[#333D4B] w-[339px] md:w-[339px] lg:w-[540px] h-[351px]"> Were built on a simple mission and a commitment
                   to doing good along the way. We want to make it easy for you to discover and brew the 
                   worlds best coffee at home. It all starts at the source. To locate the specific lots we
                    want to purchase, we travel nearly 60 days a year trying to understand the challenges
                     and opportunities in each of these places. We collaborate with exceptional coffee growers
                      and empower a global community of farmers through with well above fair-trade benchmarks.
                       We also offer training, support farm community initiatives, and invest in coffee 
                       plant science. Curating only the finest blends, we roast
                   each lot to highlight tasting profiles distinctive to their native growing region.</p>
                </div>
            </div>

            <div className="w-[371px] relative md:w-[588px] mb-10 mt-[350px] md:mt-[300px] lg:mt-[100px] lg:w-[1080px] bg-[#2C343E] h-[474px]">
            <div className=" pl-2 p-2 md:pl-14 lg:pl-14 pt-32 md:pt-24 lg:pt-24">
                <h3 className="font-bold text-4xl text-[#FEFCF7]">Uncompromising quality</h3>
                <p className="w-[360px] md:w-[470px] lg:w-[540px] text-[#FEFCF7] mt-10 ">Although we work with growers who pay close attention to 
                    all stages of harvest and processing, we employ, on our end
                    , a rigorous quality control program to avoid over-roasting
                     or baking the coffee dry. Every bag of coffee is tagged with
                      a roast date and batch number. Our goal is to roast consistent
                      , user-friendly coffee, 
                    so that brewing is easy and enjoyable.</p>
            </div>
            <div className="absolute w-[371px] md:w-[473px] lg:w-[445px] rounded-lg h-[474px] md:h-[320px] lg:h-[474px] right-0 md:right-14 lg:right-0 -top-72  md:-top-60 lg:-top-20">
            <img  className="absolute  w-[371px] rounded-lg md:w-[473px] lg:w-[509px] md:h-[320px] lg:h-[474px] " src="/images/home/image-quality.jpg" alt="" />
            </div>
            </div>
            <div className="mt-10 mb-10 ml-5">
            <p className="font-bold text-[#83888F] text-xl">Our headquarters</p>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-0 md:gap-5 lg:gap-5 items-center w-[371px] md:w-[588px] lg:w-[1080px] pl-10 md:pl-0 lg:pl-0 md:ml-0 lg:ml-10 ">
                <div className="w-[320px] md:w-[220px] lg:w-[320px]   h-[252px]  md:h-[372px]  lg:h-[372px]  pt-0 md:pt-14  lg:pt-14  rounded-md">
                    <img className="" src="/images/about/Combined Shape.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-5 md:mt-10 lg:mt-10 mb-5">United Kingdom</h4>
                    <p className=" w-[255px]  text-[#333D4B]">36 Swanston Street</p>
                    <p className=" w-[255px]  text-[#333D4B]">Kewell</p>
                    <p className=" w-[255px]  text-[#333D4B]">Victoria</p>
                    <p className=" w-[255px]  text-[#333D4B]">+61 4 9928 3629</p>
                </div>
                <div className="w-[320px] md:w-[220px] lg:w-[320px]   h-[252px]  md:h-[372px]  lg:h-[372px] pt-0 md:pt-14  lg:pt-14  rounded-md">
                    <img className="" src="/images/about/Combined Shape.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-5 md:mt-10 lg:mt-10 mb-5">Canada</h4>
                    <p className=" w-[255px]  text-[#333D4B]">1528  Eglinton Avenue</p>
                    <p className=" w-[255px]  text-[#333D4B]">Toronto</p>
                    <p className=" w-[255px]  text-[#333D4B]">Ontario M4P 1A6</p>
                    <p className=" w-[255px]  text-[#333D4B]">+1 416 485 2997</p>
                </div>
                <div className="w-[320px] md:w-[220px] lg:w-[320px]    h-[252px]  md:h-[372px]  lg:h-[372px]  pt-0 md:pt-14  lg:pt-14 rounded-md">
                    <img className="" src="/images/about/Combined Shape.png" alt="" />
                    <h4 className="text-xl text-[#333D4B] font-bold mt-5 md:mt-10 lg:mt-10 mb-5">Australia</h4>
                    <p className=" w-[255px]  text-[#333D4B]">68  Asfordby Rd</p>
                    <p className=" w-[255px]  text-[#333D4B]">Alcaston</p>
                    <p className=" w-[255px]  text-[#333D4B]">SY6 1YA</p>
                    <p className=" w-[255px]  text-[#333D4B]">+44 1241 918425</p>
                </div>
            </div>

        </div>
    );
};

export default about;