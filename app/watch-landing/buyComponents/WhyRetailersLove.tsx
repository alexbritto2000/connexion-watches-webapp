"use client";
import React from 'react';

const WhyRetailersLove = () => {
    const features = [
        {
            id: 1,
            icon: "watchLanding/diamond-icon.svg",
            title: "4.9 out of 5 stars",
            description: "Based on 180,000+ verified reviews worldwide"
        },
        {
            id: 2,
            icon: "watchLanding/platform-icon.svg",
            title: "10 million",
            description: "Luxury enthusiasts visit our platform every month"
        },
        {
            id: 3,
            icon: "watchLanding/handshake-icon.svg",
            title: "Over 250,000",
            description: "Customers trust our Secure Purchase Guarantee annually"
        },
        {
            id: 4,
            icon: "watchLanding/peoples-icon.svg",
            title: "More than 30,000",
            description: "Vetted and reputable sellers"
        }
    ];

    return (
        <div className="pb-[3.25rem] px-8 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className='flex flex-col gap-7'>
                    <div className='font-medium text-[1.25rem] text-black'>
                        Why Retailers Love Exchange
                    </div>

                    <div className='grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 gap-3'>
                        {features.map((feature) => (
                            <div key={feature.id} className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem] shadow-md hover:shadow-lg transition-shadow duration-200'>
                                <div className="w-[2.375rem] mb-[2rem]">
                                    <img 
                                        src={feature.icon} 
                                        alt={feature.title}
                                        className="w-6 h-6"
                                    />
                                </div>

                                <div className='text-[1.25rem] text-[#111928] font-medium mb-[0.5rem]'>
                                    {feature.title}
                                </div>

                                <div className='text-[#4B5563] text-[0.82rem]'>
                                    {feature.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyRetailersLove;
