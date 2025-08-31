import { Button } from '@heroui/button'
import React from 'react'

const Summary = () => {
    return (
        <div>
            <div className='text-[0.9rem] font-semibold'>
                Summary
            </div>

            <div className='flex flex-row gap-4 mt-[1.25rem]'>
                <div className='w-[10.75rem] h-[10.75rem]'>
                    <img src="/productDetails/product-overview-1.png" alt="product-overview" />
                </div>

                <div>
                    <div className="flex flex-row items-center gap-[0.75rem]">
                        <div className="text-[0.82rem] text-[#9CA3AF]">2023 Model</div>

                        <div className="bg-white rounded-[4px] text-[0.75rem] text-[#111928] px-[0.5rem] py-[2px]">
                            Like New
                        </div>

                        <div className="bg-[#057A55] rounded-[4px] text-[0.75rem] text-white font-semibold px-[0.5rem] py-[2px]">
                            Great Deal
                        </div>
                    </div>

                    <div className='text-[0.9rem] text-[#9CA3AF] mt-0.5'>
                        Ref # : 412515621
                    </div>

                    <div className='text-[1.1rem]'>
                        Calatrava White Gold Watch
                    </div>

                    <div className='text-[0.9rem] flex flex-row mt-[0.5rem]'>
                        <div>
                            Original box 
                        </div>

                        <div className='ml-[1.25rem]'>
                            Original papers
                        </div>
                    </div>

                    <Button className='w-[15.313rem] mt-[0.5rem] flex flex-row justify-center bg-white text-black rounded-[6px]'>
                        <div className='flex flex-row gap-[0.5rem] items-center'>
                            <div>
                                <img src="/buyingPage/carbon_delivery-parcel.svg" alt="delivery parcel" />
                            </div>

                            <div className='mt-[1px]'>
                                Delivery: 2/6/25-2/11/25
                            </div>
                        </div>
                    </Button>

                    <div className='w-[15.313rem] flex flex-row justify-between mt-2 font-medium text-[0.75rem]'>
                        <div>
                            Luxury Time Global
                        </div>

                        <div className='flex flex-row items-center gap-[3px]'>
                            <img src="/buyingPage/location.svg" alt="location" className='w-[0.65rem]' />
                            <div className='mt-[2px]'>
                                US
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary