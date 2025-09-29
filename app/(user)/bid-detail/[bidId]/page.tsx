"use client";
import { Button, Tab, Tabs } from '@heroui/react';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Overview from './components/Overview/Overview';
import Market from './components/Market/Market';

const BidDetailPage = () => {
    const [activeBid, setActiveBid] = useState("overview");
    const router = useRouter();
    const watchImages = [
        '/bidding/listing/media-1.png',
        '/bidding/listing/media-2.png',
        '/bidding/listing/media-3.png',
        '/bidding/listing/media-4.png'
    ]

    function handleBack() {
        router.push('/bidding/listing');
    }

    return (
        <div className="flex flex-row gap-[2rem] min-h-screen max-w-7xl mx-auto pt-[1.5rem] px-4">
            {/* Left Sidebar */}
            <div className='w-[21.75rem] flex-shrink-0'>
                <div 
                    className='flex flex-row items-center gap-[0.5rem] cursor-pointer h-[2.813rem]' 
                    onClick={handleBack}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleBack();
                        }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Go back to listings"
                >
                    <Image src="/bidding/listing/back.svg" alt="back-icon" width={16} height={16} />
                    <div>Back to Listings</div>
                </div>

                {/* Market Position Card */}
                <div className='mt-[1rem] border border-[#E5E7EB] backdrop-blur-[30px] p-[1rem] rounded-[0.5rem] bg-white flex flex-col gap-[1rem]'>
                    <div className='text-[0.875rem] font-medium text-[#111928]'>
                        Market Position
                    </div>

                    <div>
                        <div className='text-[0.75rem] text-[#374151]'>
                            Market Average
                        </div>
                        <div className='text-[0.875rem] font-medium text-[#111928]'>
                            $11,999
                        </div>
                    </div>

                    <div>
                        <div className='text-[0.75rem] text-[#374151]'>
                            Similar Listings
                        </div>
                        <div className='text-[0.875rem] font-medium text-[#111928]'>
                            15
                        </div>
                    </div>

                    <div>
                        <div className='text-[0.75rem] text-[#374151]'>
                            Recent Sales
                        </div>
                        <div className='text-[0.875rem] font-medium text-[#111928]'>
                            10 in last 30 days
                        </div>
                    </div>
                </div>

                {/* Quick Actions Card */}
                <div className='mt-[1rem] border border-[#E5E7EB] backdrop-blur-[30px] p-[1rem] rounded-[0.5rem] bg-white flex flex-col gap-[1rem]'>
                    <div className='text-[0.875rem] font-medium text-[#111928]'>
                        Quick Actions
                    </div>

                    <div className='flex flex-row gap-[0.5rem]'>
                        <Button className='bg-[#E5E7EB] h-[2rem] rounded-[6px] text-[0.75rem] text-[#374151] flex-1 font-normal flex flex-row items-center justify-center'>
                            <div className='flex flex-row items-center'>
                                Adjust Price
                            </div>
                        </Button>

                        <Button className='bg-[#E5E7EB] h-[2rem] rounded-[6px] text-[0.75rem] text-[#374151] flex flex-row items-center justify-center gap-1 flex-1 font-normal'>
                            <Image src="/bidding/listing/black_carbon_rocket.svg" alt="black-carbon-rocket" width={16} height={16} />
                            Boost Visibility
                        </Button>
                    </div>
                </div>

                {/* Media Card */}
                <div className='mt-[1rem] border border-[#E5E7EB] backdrop-blur-[30px] p-[1rem] rounded-[0.5rem] bg-white flex flex-col'>
                    <div className='flex flex-row justify-between items-center mb-[1rem]'>
                        <div>
                            <div className='text-[0.875rem] font-medium text-[#111928]'>
                                Media
                            </div>
                            <div className='text-[0.75rem] text-[#374151]'>
                                4 photos
                            </div>
                        </div>

                        <div className='border border-[#E5E7EB] rounded-[6px] py-[9.5px] px-[0.75rem] bg-transparent w-[2.75rem] h-[2.75rem] flex items-center justify-center cursor-pointer'>
                            <Image src="/bidding/listing/edit-gray-icon.svg" alt="edit-gray-icon" width={16} height={16} />
                        </div>
                    </div>

                    {watchImages.length > 0 && (
                        <div className='mt-[1rem] grid grid-cols-2 gap-[0.5rem]'>
                            {watchImages.map((image, index) => (
                                <div key={index} className='shadow-[0px_6px_4.9px_0px_rgba(0,0,0,0.04),0px_1px_0px_0px_rgba(0,0,0,0.12)] rounded-[6px]'>
                                    <Image
                                        src={image}
                                        alt={`Watch ${index + 1}`}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Area */}
            <div className='flex-1'>
                <div>
                    <Tabs
                        key="underlined"
                        aria-label="Bid detail tabs"
                        variant="underlined"
                        selectedKey={activeBid}
                        onSelectionChange={(key) => setActiveBid(String(key))}
                        classNames={{
                            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider border-[#E5E7EB]",
                            cursor: "w-full bg-black",
                            tab: "py-3 px-4 h-fit !text-[0.875rem]",
                            tabContent: "group-data-[selected=true]:text-black text-[#6B7280] font-medium",
                        }}
                    >
                        <Tab
                            key="overview"
                            title='Overview'
                        >
                        </Tab>
                        <Tab
                            key="offers"
                            title='Offers'
                        >
                        </Tab>
                        <Tab
                            key="market"
                            title='Market'
                        >
                        </Tab>
                        <Tab
                            key="messages"
                            title='Messages'
                        >
                        </Tab>
                    </Tabs>

                    {activeBid === "overview" && (
                        <Overview />
                    )}

                    {activeBid === "market" && (
                        <Market />
                    )}
                </div>
            </div>
        </div>
    );
}

export default BidDetailPage;