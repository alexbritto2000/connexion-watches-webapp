import { Button } from '@heroui/button';
import React from 'react'

const Market = () => {
    const yourBids = [
        {
            id: 1,
            imgUrl: '/bidding/bid-1.jpg',
            model: '2023 Model',
            title: 'Calatrava White Gold Watch',
            ref: '412515621',
            price: '$35,000',
            yourOffer: '$31,500',
            marketAverage: '$33,500',
            status: 'Pending Response',
            badge: 'Great Deal',
            timeRemaining: '23 hours',
            seller: {
                name: 'Sarah Jefferson',
                rating: 4.5,
                reviews: 72
            }
        },
        {
            id: 2,
            imgUrl: '/bidding/bid-2.jpg',
            model: '2023 Model',
            title: 'Calatrava White Gold Watch',
            ref: '412515621',
            price: '$35,000',
            yourOffer: '$31,500',
            marketAverage: '$33,500',
            status: 'Pending Response',
            badge: 'Great Deal',
            timeRemaining: '5 hours',
            seller: {
                name: 'Sarah Jefferson',
                rating: 4.5,
                reviews: 72
            }
        }
    ];

    return (
        <div>
            <div className='flex flex-col gap-4 mt-4'>
                {/* Card 1 */}
                {yourBids.map((bid) => (
                    <div className='w-full border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-[0.5rem] p-[1.5rem] bg-white' key={bid.id}>
                        <div>
                            <div className='flex flex-row gap-[2rem]'>
                                <div className='w-[7rem] h-[8.8125rem] rounded-[0.375rem] shadow-[0px_1px_0px_0px_#0000001F]'>
                                    <img src={bid.imgUrl} alt={bid.title} className='w-full h-full object-cover' />
                                </div>

                                <div className='flex flex-col gap-[2px] w-full'>
                                    <div className='flex flex-row justify-between items-center w-full'>
                                        <div className='flex flex-row gap-[0.625rem]'>
                                            <div className='text-[#374151] text-[0.875rem]'>
                                                {bid.model}
                                            </div>

                                            <div className='bg-[#057A55] text-[0.75rem] py-[1px] px-[6px] rounded-[2px] text-white'>
                                                <div className='pt-[1px]'>
                                                    {bid.badge}
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-[0.75rem] text-white bg-[#E3A008] py-[2px] px-[6px] rounded-[2px]'>
                                            {bid.status}
                                        </div>
                                    </div>

                                    <div className='font-medium text-[#111928]'>
                                        {bid.title}
                                    </div>

                                    <div className='text-[0.75rem] text-[#374151]'>
                                        Ref # : {bid.ref}
                                    </div>

                                    <div className='text-[1.25rem]'>
                                        {bid.price}
                                    </div>

                                    <div className='mt-[10px]'>
                                        <div className='flex flex-row gap-[5.625rem]'>
                                            <div>
                                                <div className='text-[0.75rem] text-[#4B5563]'>
                                                    Your Offer
                                                </div>

                                                <div className='text-[#111928]'>
                                                    {bid.yourOffer}
                                                </div>
                                            </div>

                                            <div>
                                                <div className='text-[0.75rem] text-[#4B5563]'>
                                                    Time Remaining
                                                </div>

                                                <div className='text-[#111928]'>
                                                    {bid.timeRemaining}
                                                </div>
                                            </div>

                                            <div>
                                                <div className='text-[0.75rem] text-[#4B5563]'>
                                                    Market Average
                                                </div>

                                                <div className='text-[#111928]'>
                                                    {bid.marketAverage}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border-b-1 border-[#D1D5DB] my-[1rem]' />

                            <div className='flex flex-row justify-between items-center'>
                                {/* Buttons row */}
                                <div className='flex flex-row items-center'>
                                    <img src="/bidding/lux-store.png" alt="lux store" />

                                    <div className='text-[0.875rem] text-[#2F3033] font-semibold ml-[10px]'>
                                        {bid.seller?.name}
                                    </div>

                                    <div className='flex items-center ml-[9px]'>
                                        <div>
                                            <img src="/bidding/left-bracs.svg" alt="bracs" className='h-[10px]' />
                                        </div>

                                        <div className='text-[0.75rem] text-[#1F2A37]'>
                                            {bid.seller?.reviews}
                                        </div>

                                        <div>
                                            <img src="/bidding/right-bracs.svg" alt="bracs" className='h-[10px]' />
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-[0.5rem]'>
                                    <Button className='bg-[#1E429F] text-white rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit'>
                                        Modify offer
                                    </Button>

                                    <Button className='bg-[#1F2A37] text-white rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit'>
                                        Contact Seller
                                    </Button>

                                    <Button className='bg-[#E5E7EB] text-[#374151] rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit'>
                                        Withdraw
                                    </Button>
                                </div>
                            </div>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    )
}

export default Market