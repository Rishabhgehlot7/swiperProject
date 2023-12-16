import React from 'react'

export default function Card() {
    return (

        <div className=''>
            <div className='bg-gray-100 w-[95%] rounded-xl mx-auto h-auto my-3 hover:shadow-2xl border-green-500 border-l-8 '>
                <div className='w-full'>
                    <div className='flex h-auto p-5'>
                        <img className='w-[90px]' src="https://w7.pngwing.com/pngs/529/166/png-transparent-flower-logo-black-and-white-plumeria-white-leaf-orange-thumbnail.png" alt="" />
                        <div className='px-3 flex flex-col justify-evenly w-full'>
                            <div className='text-xl'>Company Name</div>
                            <div className='text-xl text-gray-400'>(Mainline)</div>
                            <div className='flex text-xl items-center justify-between'>
                                <div>12 Nov - 16 Nov</div>
                                <div className=' lg:block hidden'>Price: 120 - 140</div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-black h-[2px] w-[98%] mx-auto'></div>
                </div>

                <section className='w-full '>
                    <div className='flex justify-between w-full px-5 py-1'>
                        <div>
                            <div className=' text-gray-500'>
                                Lot / Min Invest
                            </div>
                            <div className='text-xl'>
                                10 / 14,300
                            </div>
                        </div>
                        <div className=''>
                            <div className='text-right  text-gray-500'>
                                Lot / Min Invest
                            </div>
                            <div className='text-right text-xl'>
                                10 / 14,300
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-full px-5 py-1'>
                        <div>
                            <div className=' text-gray-500'>
                                Allotment Date
                            </div>
                            <div className='text-xl'>
                                22 Nov 2023
                            </div>
                        </div>
                        <div className=''>
                            <div className='text-right  text-gray-500'>
                                Gray Market Price
                            </div>
                            <div className='text-right text-xl text-green-500'>
                                50 (11%)
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between w-full px-5 py-1'>
                        <div>
                            <div className=' text-gray-500'>
                                Listing Date
                            </div>
                            <div className='text-xl'>
                                12 Nov 2023
                            </div>
                        </div>
                        <div className=''>
                            <div className='text-right  text-gray-500'>
                                Est. Profit (Retail/HNI)
                            </div>
                            <div className='text-right text-xl text-green-500'>
                                1080 / 45000
                            </div>
                        </div>
                    </div>
                </section>

                {/* button section */}
                <section className=' text-white w-full p-5'>
                    <button className='w-full h-12 bg-gray-900'>Allotment is live Check it out !!</button>
                    <div className='flex justify-between w-full mx-auto my-2 h-12'>
                        <button className='w-[49%] bg-gray-900'>Apply Now</button>
                        <button className='w-[49%] bg-gray-900'>Allotment</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
