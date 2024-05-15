import { useState } from "react";


const createPlan = () => {

    const [selectedId, setSelectedId] = useState(null);
    const [selectedId2, setSelectedId2] = useState(null);
    const [selectedId3, setSelectedId3] = useState(null);
    const [selectedId4, setSelectedId4] = useState(null);
    const [selectedId5, setSelectedId5] = useState(null);
    const [selectedContent, setSelectedContent] = useState('');
    const [selectedContent2, setSelectedContent2] = useState('');
    const [selectedContent3, setSelectedContent3] = useState('');
    const [selectedContent4, setSelectedContent4] = useState('');
    const [selectedContent5, setSelectedContent5] = useState('');

    const handleClick = (id, content) => {
        setSelectedId(id);
        setSelectedContent(content);
    };
    const handleClick2 = (id, content) => {
        setSelectedId2(id);
        setSelectedContent2(content);
    };
    const handleClick3 = (id, content) => {
        setSelectedId3(id);
        setSelectedContent3(content);
    };
    const handleClick4 = (id, content) => {
        setSelectedId4(id);
        setSelectedContent4(content);
    };
    const handleClick5 = (id, content) => {
        setSelectedId5(id);
        setSelectedContent5(content);
    };

    return (
        <div>
            <div className="mt-5 ">
                <div className="hero w-[371px] md:w-[588px] lg:w-[1080px] h-[500px] object-cover bg-center bg-gradient-to-r from-[#A2A2A2] to-[#FEFCF7]"
                    style={{ backgroundImage: 'url(/images/plan/image-hero-blackcup.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl md:text-7xl lg:text-7xl font-bold">Create a plan</h1>
                            <p className="mb-5 w-[300px] md:w-[500px] lg:w-[500px]">Build a subscription plan
                                that best fits your needs. We offer an assortment of the best
                                artisan coffees from around the globe delivered fresh to your door.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[1200px] md:h-[600px] lg:h-[600px] bg-[#2C343E] mt-10 mb-10">
                <div className="pt-20 pl-5 md:pl-10 lg:pl-10">
                    <img className="w-[350px] md:w-[450px] lg:w-[650px]" src="/images/plan/Path 2.png" alt="" />
                </div>
                <div className="mt-20 flex flex-col md:flex-row gap-12 md:gap-5 lg:gap-5 lg:flex-row justify-between p-5 md:p-0 lg:p-5">
                    <div className="space-y-5 text-center" >
                        <img className="mx-auto" src="/images/plan/01 (1).png" alt="" />
                        <h3 className="text-4xl md:text-2xl lg:text-4xl font-bold text-[#FEFCF7]">Pick your <br />coffee</h3>
                        <p className="text-[#FEFCF7] w-[285px] md:w-[180px] lg:w-[285px] mx-auto">Select from our evolving range of artisan coffees. Our beans
                            are ethically sourced and we pay fair prices for them.
                            There are new coffees in all profiles
                            every month for you to try out.</p>
                    </div>
                    <div className="space-y-5 text-center">
                        <img className="mx-auto" src="/images/plan/02 (1).png" alt="" />
                        <h3 className="text-4xl md:text-2xl lg:text-4xl font-bold text-[#FEFCF7]">Choose the <br /> frequency</h3>
                        <p className="text-[#FEFCF7] w-[285px] md:w-[180px] lg:w-[285px] mx-auto">Customize your order frequency,
                            quantity, even your roast style and grind type. Pause,
                            skip or cancel your subscription with no commitment through our online portal..</p>
                    </div>

                    <div className="space-y-5 text-center">
                        <img className="mx-auto" src="/images/plan/03 (1).png" alt="" />
                        <h3 className="text-4xl md:text-2xl lg:text-4xl font-bold text-[#FEFCF7]">Receive and <br /> enjoy!</h3>
                        <p className="text-[#FEFCF7] w-[285px] md:w-[180px] lg:w-[285px] mx-auto">We ship your package within 48 hours,
                            freshly roasted. Sit back and enjoy
                            award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>

            </div>


            {/* my plan  */}

            <div className="flex  justify-between ">
                <div className="hidden md:hidden lg:block">
                    <div className="flex gap-5 p-5 border-b-2 border-gray-300 w-[200px]">
                        <p className="font-bold text-[#0E8784] text-xl">01</p>
                        <p className="font-bold text-xl">Preferences</p>
                    </div>
                    <div className="flex gap-5 p-5 border-b-2 border-gray-300 w-[200px]">
                        <p className="font-bold text-[#0E8784] text-xl">02</p>
                        <p className="font-bold text-xl">Bean Type</p>
                    </div>
                    <div className="flex gap-5 p-5 border-b-2 border-gray-300 w-[200px]">
                        <p className="font-bold text-[#0E8784] text-xl">03</p>
                        <p className="font-bold text-xl">Quantity</p>
                    </div>
                    <div className="flex gap-5 p-5 border-b-2 border-gray-300 w-[210px]">
                        <p className="font-bold text-[#0E8784] text-xl">04</p>
                        <p className="font-bold text-xl">Grind Option</p>
                    </div>
                    <div className="flex gap-5 p-5 border-b-2 border-gray-300 w-[200px]">
                        <p className="font-bold text-[#0E8784] text-xl">05</p>
                        <p className="font-bold text-xl">Deliveries</p>
                    </div>
                </div>

                   {/*  How do you drink your coffee? */}

                <div className="w-[730px] ml-1 md:-ml-5 lg:-ml-0">
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-3xl w-[340px] md:w-[630px] lg:w-[630px]  font-bold] text-[#83888F]">
                            How do you drink your coffee?
                        </div>
                        <div className="collapse-content flex flex-col md:flex-row lg:flex-row gap-3 ">
                            <div id="1" onClick={() => handleClick(1, 'Capsule')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId === 1 ? '#0E8784' : '#F4F1EB'}] ${selectedId === 1 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Capsule</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Compatible with Nespresso systems and similar brewers</p>
                            </div>

                            <div id="2" onClick={() => handleClick(2, 'Filter')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px]
                                 bg-[${selectedId === 2 ? '#0E8784' : '#F4F1EB'}] ${selectedId === 2 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Filter</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">For pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </div>

                            <div id="3" onClick={() => handleClick(3, 'Espresso')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId === 3 ? '#0E8784' : '#F4F1EB'}] ${selectedId === 3 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl  font-bold text-center">Espresso</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Dense and finely ground beans for an intense, flavorful experience</p>
                            </div>
                        </div>
                    </div>

                      {/* What type of coffee? */}

                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl w-[340px] md:w-[630px] lg:w-[630px]  font-bold] text-[#83888F]">
                            What type of coffee?
                        </div>
                        <div className="collapse-content flex flex-col md:flex-row lg:flex-row gap-3 ">
                            <div id="4" onClick={() => handleClick2(4, 'Single Origin')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]   md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId2 === 4 ? '#0E8784' : '#F4F1EB'}] ${selectedId2 === 4 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Single Origin</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Distinct, high quality coffee from a specific family-owned farm</p>
                            </div>

                            <div id="5" onClick={() => handleClick2(5, 'Decaf')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId2 === 5 ? '#0E8784' : '#F4F1EB'}] ${selectedId2 === 5 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Decaf</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Just like regular coffee, except the caffeine has been removed</p>
                            </div>

                            <div id="6" onClick={() => handleClick2(6, 'Blended')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]   md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId2 === 6 ? '#0E8784' : '#F4F1EB'}] ${selectedId2 === 6 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl  font-bold text-center">Blended</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Combination of two or three dark roasted beans of organic coffees</p>
                            </div>
                        </div>
                    </div>

                  {/*   How much would you like? */}

                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl w-[340px] md:w-[630px] lg:w-[630px]  font-bold] text-[#83888F]">
                            How much would you like?
                        </div>
                        <div className="collapse-content flex flex-col md:flex-row lg:flex-row gap-3 ">
                            <div id="7" onClick={() => handleClick3(7, '250g')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId3 === 7 ? '#0E8784' : '#F4F1EB'}] ${selectedId3 === 7 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">250g</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </div>

                            <div id="8" onClick={() => handleClick3(8, '500g')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]   md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId3 === 8 ? '#0E8784' : '#F4F1EB'}] ${selectedId3 === 8 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">500g</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </div>

                            <div id="9" onClick={() => handleClick3(9, '1000g')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId3 === 9 ? '#0E8784' : '#F4F1EB'}] ${selectedId3 === 9 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl  font-bold text-center">1000g</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Dense and finely ground beans for an intense, flavorful experience</p>
                            </div>
                        </div>
                    </div>

                    {/*  Want us to grind them? */}

                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl w-[340px] md:w-[630px] lg:w-[630px]  font-bold] text-[#83888F]">
                            Want us to grind them?
                        </div>
                        <div className="collapse-content flex flex-col md:flex-row lg:flex-row gap-3 ">
                            <div id="10" onClick={() => handleClick4(10, 'Wholebean')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId4 === 10 ? '#0E8784' : '#F4F1EB'}] ${selectedId4 === 10 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Wholebean</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Compatible with Nespresso systems and similar brewers</p>
                            </div>

                            <div id="11" onClick={() => handleClick4(11, 'Filter')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId4 === 11 ? '#0E8784' : '#F4F1EB'}] ${selectedId4 === 11 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Filter</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">Best choice if you cherish the full sensory experience</p>
                            </div>

                            <div id="12" onClick={() => handleClick4(12, 'Cafetiére')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId4 === 12 ? '#0E8784' : '#F4F1EB'}] ${selectedId4 === 12 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl  font-bold text-center">Cafetiére</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5"> Course ground beans specially suited for french press coffee</p>
                            </div>
                        </div>
                    </div>

                    {/*  How often should we deliver? */}

                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl w-[340px] md:w-[630px] lg:w-[630px] font-bold] text-[#83888F]">
                            How often should we deliver?
                        </div>
                        <div className="collapse-content flex flex-col md:flex-row lg:flex-row gap-3 ">
                            <div id="13" onClick={() => handleClick5(13, 'Every week')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId5 === 13 ? '#0E8784' : '#F4F1EB'}] ${selectedId5 === 13 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Every week</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">$7.20 per shipment. Includes free first-class shipping.</p>
                            </div>

                            <div id="14" onClick={() => handleClick5(14, 'Every 2 weeks')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId5 === 14 ? '#0E8784' : '#F4F1EB'}] ${selectedId5 === 14 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl font-bold text-center">Every 2 weeks</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">$9.60 per shipment. Includes free priority shipping.</p>
                            </div>

                            <div id="15" onClick={() => handleClick5(15, 'Every month')}
                                className={`rounded-md pt-2 md:pt-10 lg:pt-10 w-[328px] cursor-pointer hover:bg-[#FDD6BA]  md:w-[190px] lg:w-[228px] h-[140px] md:h-[250px] lg:h-[250px] 
                                bg-[${selectedId5 === 15 ? '#0E8784' : '#F4F1EB'}] ${selectedId5 === 15 ?
                                    'text-white' : ''}`}>
                                <h3 className="text-3xl  font-bold text-center">Every month</h3>
                                <p className="w-[272px] md:w-[172px] lg:w-[172px] text-center mx-auto mt-5">$12.00 per shipment. Includes free priority shipping.</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[360px] md:w-[620px] lg:w-[730px] h-[308px] md:h-[208px] lg:h-[208px] bg-[#2C343E] mt-10 mb-10 p-10">
                        <p className="text-[#FFFFFF] font-xl font-bold">ORDER SUMMARY</p>
                        <p className="w-[302px] md:w-[602px] lg:w-[602px] text-2xl font-bold mt-2 text-[#FFFFFF]">“I drink my coffee as
                           
                           {/* ?1 */}
                            {selectedContent ? (
                                <span className="text-[#0E8784]">{selectedContent}</span>
                            ) : (
                                <span onClick={() => handleClick(null, '______')} className="text-[#0E8784] cursor-pointer">______</span>
                            )}
                            with a

                            {selectedContent2 ? (
                                <span className="text-[#0E8784]">{selectedContent2}</span>
                            ) : (
                                <span onClick={() => handleClick2(null, '______')} className="text-[#0E8784] cursor-pointer">______</span>
                            )}
                            type of bean.

                            {selectedContent3 ? (
                                <span className="text-[#0E8784]">{selectedContent3}</span>
                            ) : (
                                <span onClick={() => handleClick3(null, '______')} className="text-[#0E8784] cursor-pointer">______</span>
                            )}
                            ground ala

                            {selectedContent4 ? (
                                <span className="text-[#0E8784]">{selectedContent4}</span>
                            ) : (
                                <span onClick={() => handleClick4(null, '______')} className="text-[#0E8784] cursor-pointer">______</span>
                            )}
                            sent to me
  {selectedContent5 ? (
                                <span className="text-[#0E8784]">{selectedContent5}</span>
                            ) : (
                                <span onClick={() => handleClick5(null, '______')} className="text-[#0E8784] cursor-pointer">______</span>
                            )}
                            .”</p>

                    </div>

                    <div className="flex justify-end mt-10 mb-10">
                    <button className="w-[200px] hover:bg-[#66D2CF] cursor-pointer text-xl rounded-md h-[56px] text-white font-bold bg-[#0E8784]">Create your plan</button>
                    </div>

                </div>
            </div>
             


        </div>
    );
};

export default createPlan;