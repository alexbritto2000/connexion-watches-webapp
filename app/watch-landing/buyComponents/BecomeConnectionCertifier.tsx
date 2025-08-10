"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/button';

const BecomeConnectionCertifier = () => {

    const connectionCertifierBenefits = [
        {
            image: "/watchLanding/boost-trust-icon.svg",
            title: "Verify & Authenticate",
            description: "Ensure connections meet marketplace standards"
        },
        {
            image: "/watchLanding/boost-trust-icon.svg",
            title: "Boost Trust",
            description: "Help users make informed decisions with verified connections"
        },
        {
            image: "/watchLanding/enhance-reputation.svg",
            title: "Enhance Your Reputation",
            description: "Establish yourself as a trusted expert in the community."
        }
    ];

    return (
        <div className='bg-gray-100 pb-[6rem]'>
            <div className="max-w-7xl mx-auto">
                {/* Background with dotted pattern */}
                <div className="relative rounded-[0.5rem] overflow-hidden">

                    {/* Main content card */}
                    <div className="relative bg-white rounded-2xl md:p-12 shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F]">
                        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-1">
                            {/* Left Section - Main Proposition */}
                            <div className="space-y-6">
                                {/* Icon */}
                                <img
                                    src="/watchLanding/connection-certifier-bg.svg"
                                    alt="Connection Certifier"
                                />

                                <div className='p-[4rem] pt-0'>
                                    {/* Brand */}
                                    <img
                                        src="/watchLanding/connexion-txt-logo.svg"
                                        alt="Connection Text Logo"
                                    />

                                    {/* Main Heading */}
                                    <h2 className="mt-[0.5rem] text-[1.5rem] text-black leading-[150%] mb-[10px]">
                                        Become a Connection Certifier
                                    </h2>

                                    {/* Description */}
                                    <p className="text-[0.82rem] text-[#1F2A37] leading-[150%] mb-[2.625rem]">
                                        Join our network as a Connection Certifier and play a key role in verifying and ensuring the quality of connections within our marketplace. By certifying connections, you help build trust, improve credibility, and create a more reliable experience for all users.
                                    </p>

                                    {/* CTA Button */}
                                    <Button className="bg-black text-white hover:bg-gray-800 px-[3.75rem] py-[0.7rem] text-[0.82rem]">
                                        Apply
                                    </Button>
                                </div>
                            </div>

                            {/* Right Section - Image and Additional Info */}
                            <div className="space-y-6 flex flex-col justify-center pr-[4rem]">

                                {connectionCertifierBenefits.map((benefit, index) => (
                                    <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl py-[2.125rem] px-[2rem] flex flex-row items-center max-w-[30.625rem]" key={index}>
                                        <div className="flex items-center space-x-[1.75rem]">
                                            <div className="shadow-[0px_10.57px_8.63px_0px_#0000000A,0px_1.76px_0px_0px_#0000001F] bg-white rounded-[0.5rem] px-[0.75rem] py-[0.938rem]">
                                                <img
                                                    src={benefit.image}
                                                    alt="Verify & Authenticate"
                                                    className="w-8 h-8 text-blue-500"
                                                />
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-black">
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-[#4B5563] text-[0.82rem]">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeConnectionCertifier;
