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

                {/* Trust Score and Buyer Protection Section */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 mt-16">
                    {/* Left Column - Trust Score */}
                    <div>
                        {/* Background Image with Seller Cards */}
                        <div className="bg-white rounded-lg shadow-md h-full flex flex-col justify-between">
                            <div>
                                <img src='watchLanding/trust-score.png' alt="Trust Score Background" className="w-full rounded-t-lg" />
                            </div>

                            {/* Trust Score Explanation */}
                            <div className='p-6 pt-0 flex flex-row items-center gap-4'>
                                <div>
                                    <h3 className="text-2xl text-black mb-2">
                                        Trust Score
                                    </h3>
                                    <p className="text-[#111928] text-[0.82rem] leading-relaxed">
                                        Trust Score measures user reliability based on transactions, reviews, and verification.
                                        A higher score boosts credibility, fostering trust and smoother marketplace interactions.
                                    </p>
                                </div>

                                <div>
                                    <img src='watchLanding/review-stars.svg' alt="Trust Score Icon" className="min-w-[8.438rem]" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Buyer Protection */}
                    <div className="space-y-6 h-full flex flex-col">
                        {/* Buyer Protection Block */}
                        <div className="shadow-[0px_12px_25px_0px_#0000000D] backdrop-blur-[14.8px] bg-[linear-gradient(0deg,#000,#000),radial-gradient(68.5%_75.95%_at_95%_-30.83%,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_100%)] rounded-lg p-6 text-white flex-1">
                            <h3 className="text-[1.5rem] mb-[1rem]">
                                Buyer Protection
                            </h3>
                            <p className="text-[0.82rem] leading-relaxed mb-[2.5rem]">
                                With Buyer Protection, you benefit from secure payments through our platform,
                                verified product authenticity, and a legally mandated 14-day return policy,
                                ensuring a safe and hassle-free shopping experience.
                            </p>
                            <div className="space-y-[0.5rem]">
                                {[
                                    "Secure Payments",
                                    "Authenticity Guarantee",
                                    "14-Day Returns",
                                    "Dedicated AI Support",
                                    "Fraud Protection"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <img src='white-tick.svg' />
                                        <span className="text-[0.82rem] font-medium">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Availability Block */}
                        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
                            <h3 className="text-[1.5rem] text-black mb-2">
                                Available in 150+ countries
                            </h3>
                            <p className="text-[#6B7280] text-[0.82rem]">
                                No matter where you are, chances are our app is there for you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyRetailersLove;
