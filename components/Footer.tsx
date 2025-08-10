import React from 'react';
import { Button } from '@heroui/button';

const Footer = () => {
    return (
        <div className='w-full bg-black flex flex-col justify-center items-center'>
            <div className='grid grid-cols-[1fr_1fr_1fr_auto] max-w-7xl w-full pt-[3rem] pb-[2rem]'>

                {/* 1st col */}
                <div>
                    <div>
                        <img src='/footer/white-connexion.svg' />
                    </div>

                    <div className='flex flex-col gap-4 text-white text-[0.82rem] mt-12'>
                        <div className='flex items-center gap-2'>
                            <img src='/footer/Phone.svg' alt="Phone Icon" />
                            <a href="tel:9999999999" className="hover:underline">
                                Give us a call 999-999-9999
                            </a>
                        </div>

                        <div className='flex items-center gap-2'>
                            <img src='/footer/mail.svg' alt="Mail Icon" />
                            <a href="mailto:support@lbxmarketplace.com" className="hover:underline">
                                support@lbxmarketplace.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2nd col */}
                <div className='text-white'>
                    <div className='text-[1.5rem]'>
                        Product Catalog
                    </div>

                    <div className='flex flex-col gap-2 mt-6 text-[0.83rem] cursor-pointer'>
                        <div className="hover:underline">Watch</div>
                        <div className="hover:underline">Coins</div>
                        <div className="hover:underline">Jewelry</div>
                    </div>
                </div>

                {/* 3rd col */}
                <div className='text-white'>
                    <div className='text-[1.5rem]'>
                        Company
                    </div>

                    <div className='flex flex-col gap-2 mt-6 text-[0.83rem] cursor-pointer'>
                        <div className="hover:underline">About Us</div>
                        <div className="hover:underline">FAQs</div>
                        <div className="hover:underline">Newsletter</div>
                    </div>
                </div>

                {/* 4th col */}
                <div className='text-white w-fit'>
                    <div className='text-[1.5rem]'>
                        Info
                    </div>

                    <div className='flex flex-col gap-2 mt-6 text-[0.83rem] cursor-pointer'>
                        <div className="hover:underline">Terms & Conditions</div>
                        <div className="hover:underline">Privacy Policy</div>
                        <div className="hover:underline">Shipping Policy</div>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl border-b border-[#4B5563] w-full'/>

            <div className='w-full max-w-7xl text-white my-8 flex justify-between items-center'>
                <div>
                    © 2016-2025 LBX Marketplace. All rights reserved.
                </div>

                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-4'>
                        <img src='/footer/x.svg' className='cursor-pointer' />
                        <img src='/footer/FacebookLogo.svg' className='cursor-pointer' />
                        <img src='/footer/InstagramLogo.svg' className='cursor-pointer' />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Footer;

