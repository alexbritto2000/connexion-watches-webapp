"use client";
import React from 'react';

const Buy = () => {
    const watchCategories = [
        {
            id: 1,
            name: "Chronographs",
            image: "watchLanding/browse-by-style.png",
            brand: "ULYSSE NARDIN"
        },
        {
            id: 2,
            name: "Diamond",
            image: "watchLanding/diamond.png",
            brand: "CHANEL"
        },
        {
            id: 3,
            name: "Diving",
            image: "watchLanding/gold.png",
            brand: "OMEGA Seamaster"
        },
        {
            id: 4,
            name: "Submariner",
            image: "watchLanding/sub-mariner.png",
            brand: "ROLEX Submariner"
        },
        {
            id: 5,
            name: "GMT-Master",
            image: "watchLanding/gmt-master.png",
            brand: "ROLEX GMT-Master"
        }
    ];

    return (
        <div className="bg-gray-100 py-[6.25rem] px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[1.25rem] font-bold text-black mb-[1.5rem] text-left">
                    Browse By Style
                </h2>

                <div className="flex flex-wrap gap-4 justify-items-start">
                    {watchCategories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-200"
                        >
                            <div className="w-[14.625rem] bg-white rounded-lg shadow-md mb-4 flex flex-col items-center justify-center overflow-hidden">
                                {/* <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-500 text-sm text-center px-2">
                                        {category.brand}
                                    </span>
                                </div> */}
                                <img src={category.image} className='h-[18.75rem] object-cover'/>

                                <span className="text-[#1F2A37] bg-[#F3F4F6] font-medium text-center py-[1.313rem] w-full">
                                    {category.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Buy;