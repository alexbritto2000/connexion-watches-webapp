"use client";
import React from 'react';

const ThisWeeksHighlights = () => {

    return (
        <div className="bg-gray-100 py-[3.25rem] pb-[6rem] pt-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-[1.5rem]">
                    <h2 className="font-medium text-[1.25rem] text-black">
                        This Weeks Highlights
                    </h2>
                </div>
            </div>

            <div>
                <div className='flex flex-row w-full p-0'>
                    <div className='w-[30%] relative'>
                        <img src='watchLanding/limited-series.jpg' alt="Limited Series" className='w-full h-[31.25rem] object-cover' />

                        <div className='absolute text-white text-[1.875rem] top-[4rem] flex flex-row justify-center w-full'>
                            Limited Series
                        </div>
                    </div>

                    <div className='w-[70%] relative'>
                        <img src='watchLanding/collections.jpg' alt="Collections" className='w-full h-[31.25rem] object-cover' />

                        <div className='absolute text-white text-[1.875rem] top-[4rem] flex flex-row justify-center w-full'>
                            Exquisite Styles & Collections
                        </div>
                    </div>
                </div>

                <div className='flex flex-row w-full p-0'>
                    <div className='w-[70%] relative'>
                        <img src='watchLanding/autumn.jpg' alt="AUTUMN Collections" className='w-full h-[31.25rem] object-cover' />

                        <div className='absolute text-white text-[1.875rem] top-[4rem] flex flex-row justify-center w-full'>
                            AUTUMN Collections
                        </div>
                    </div>

                    <div className='w-[30%] relative'>
                        <img src='watchLanding/exclusive.jpg' alt="Exclusive" className='w-full h-[31.25rem] object-cover' />

                        <div className='absolute text-white text-[1.875rem] bottom-[4rem] flex flex-row justify-center w-full'>
                            Exclusive
                        </div>
                    </div>
                </div>
               {/*  <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {popularBrands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200 flex items-center justify-center min-h-[4rem]"
                        >
                            <span className="text-black font-bold text-center">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default ThisWeeksHighlights;
