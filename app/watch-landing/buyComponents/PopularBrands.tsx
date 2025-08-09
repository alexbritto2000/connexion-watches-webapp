"use client";
import React from 'react';

const PopularBrands = () => {
    const popularBrands = [
        "Rolex",
        "Omega", 
        "Patek Philippe",
        "Tudor",
        "Cartier",
        "Audemars Piguet",
        "Breitling",
        "IWC",
        "Panerai",
        "Seiko"
    ];

    return (
        <div className="bg-gray-100 py-[3.25rem] px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-[1.5rem]">
                    <h2 className="text-[1.25rem] font-bold text-black">
                        Popular Brands
                    </h2>
                    <a href="#" className="text-[#6B7280] text-sm hover:text-black transition-colors">
                        View all &gt;
                    </a>
                </div>

                <div className="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
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
                </div>
            </div>
        </div>
    );
};

export default PopularBrands;
