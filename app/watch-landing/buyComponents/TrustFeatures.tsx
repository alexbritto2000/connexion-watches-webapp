"use client";

import React from 'react';

const TrustFeatures = () => {
    return (
        <div className="bg-gray-100 text-black px-8 pb-[6.25rem]">
            <div className="max-w-7xl mx-auto py-[4rem] border-t-1 border-[#E5E7EB]">
                <div className='grid grid-cols-3 gap-10'>
                    <div className='flex flex-row items-start gap-3'>
                        <img src="/watchLanding/SealCheckSupplier.svg" alt="Marketplace Verified" />

                        <div className='flex flex-col gap-2'>
                            <div className='font-medium'>
                                Marketplace Verified
                            </div>

                            <div className='text-[0.82rem]'>
                                Every item listed on our marketplace goes through a rigorous verification process to ensure authenticity and quality. Shop with confidence
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row items-start gap-3'>
                        <img src="/watchLanding/guarantee.svg" alt="Our Guarantee" className='mt-[6px]' />

                        <div className='flex flex-col gap-2'>
                            <div className='font-medium'>
                                Our Guarantee
                            </div>

                            <div className='text-[0.82rem]'>
                                We stand by our buyers and sellers. If something goes wrong, our dedicated support team will work to make it right.
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row items-start gap-3'>
                        <img src="/watchLanding/wallet.svg" alt="Sell with Ease" className='w-4 mt-[6px]' />

                        <div className='flex flex-col gap-2'>
                            <div className='font-medium'>
                                Sell with Ease
                            </div>

                            <div className='text-[0.82rem]'>
                                "Listing your items is quick and simple. Start selling watches, coins, and jewelry in just a few clicks.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustFeatures;
