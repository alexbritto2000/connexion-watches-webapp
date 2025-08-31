'use client';
import { Button } from '@heroui/button'
import React from 'react'
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    return (
        <div className="max-w-[800px] mx-auto mt-[2.5rem] mb-[6.5rem] flex flex-col w-full items-center justify-center">
            <div>
                <img src="/orderConfirmed/confirmed-tick.svg" alt="confirmed-tick" />
            </div>

            <div className='mt-4 text-[1.5rem] text-[#111928]'>
                Order Confirmed!
            </div>

            <div className='text-[#4B5563] text-[0.75rem]'>
                Thank you for your purchase
            </div>

            <div className='text-[#4B5563] text-[0.75rem] mt-[10px]'>
                Order number WO-2025-1234
            </div>

            <div className='flex flex-row gap-[1rem] mt-[26px]'>
                <div className='flex items-center gap-[4px]'>
                    <div>
                        <img src="/orderConfirmed/download-icon.svg" alt="download-icon" />
                    </div>

                    <div className='text-[0.75rem] text-[#4B5563]'>
                        Receipt
                    </div>
                </div>

                <div className='flex items-center gap-[4px]'>
                    <div>
                        <img src="/orderConfirmed/share-icon.svg" alt="share-icon" />
                    </div>

                    <div className='text-[0.75rem] text-[#4B5563]'>
                        Share
                    </div>
                </div>
            </div>

            <div className='mt-[4.188rem] flex flex-row gap-[2%] w-full'>
                <div className='flex w-[49%]'>
                    <div className='flex flex-row gap-[1rem]'>
                        <div className='flex flex-row gap-[1rem]'>
                            <div className='w-[6.875rem]'>
                                <img src="/productDetails/product-overview-1.png" alt="Calatrava White Gold Watch" className='w-[6.875rem] h-[8.5rem] object-cover rounded-[6px] border-1 border-[#E5E7EB]' />
                            </div>

                            <div className='flex flex-1'>
                                <div>
                                    <div className="flex flex-row items-center gap-[0.75rem]">
                                        <div className="text-[0.82rem] text-[#9CA3AF]">2023 Model</div>

                                        <div className="bg-[#F3F4F6] rounded-[4px] text-[0.75rem] text-[#111928] px-[0.5rem] py-[2px]">
                                            Like New
                                        </div>
                                    </div>

                                    <div className='text-[0.9rem] text-[#9CA3AF] mt-0.5'>
                                        Ref # : 412515621
                                    </div>

                                    <div className='text-[1.1rem]'>
                                        Calatrava White Gold Watch
                                    </div>

                                    <div className='text-[0.9rem] flex flex-row mt-[0.5rem] items-center'>
                                        <div>
                                            Original box
                                        </div>

                                        <div className='w-[5px] h-[5px] rounded-full bg-[#E5E7EB] mx-[0.5rem]'/>

                                        <div>
                                            Original papers
                                        </div>
                                    </div>

                                    <div className='mt-4 text-[1.2rem]'>
                                        $70,000
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>

                <div className='flex w-[49%] bg-[#EBF5FF] rounded-[6px] px-[1rem] py-[1.5rem]'>
                    <div className='flex flex-row items-start gap-[1rem]'>
                        <img src="/orderConfirmed/clarity_date-line.svg" alt="Date line icon" />

                        <div>
                            <div className='text-[#1A56DB] font-semibold text-[0.9rem]'>
                                Important Dates
                            </div>

                            <div className='flex flex-col mt-[10px] gap-[6px] text-[#1C64F2] text-[0.75rem]'>
                                <div>
                                    • Authentication completion by: January 28, 2025
                                </div>
                                <div>
                                    • Expected shipping date: January 29, 2025
                                </div>
                                <div>
                                    • Return window ends: February 5, 2025
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-[2rem] flex flex-row gap-[2%] w-full">
                <Button className="rounded-[6px] py-[0.7rem] text-[0.9rem] font-semibold bg-[#F3F4F6] text-black flex w-[49%]" onClick={() => router.push('/billing-details')}>
                    View Order Details
                </Button>

                <Button className="rounded-[6px] py-[0.7rem] text-[0.9rem] font-semibold bg-black text-white flex w-[49%]" onClick={() => router.push('/order-confirmed')}>
                    Track Order
                </Button>
            </div>

            <div className='flex flex-row gap-[2%] w-full'>
                <div className='w-[49%] p-[0.75rem] border-1 border-[#E5E7EB] rounded-[6px]'>
                    <div className='text-[#333333] font-semibold text-[0.9rem]'>
                        Shipping Details
                    </div>

                    <div className='flex flex-col mt-[1rem] gap-[4px] text-[#111928] text-[0.75rem]'>
                        <div>
                            John Smith
                        </div>
                        <div>
                            123 Luxury Lane
                        </div>
                        <div>
                            New York, NY 10001
                        </div>
                        <div>
                            United States
                        </div>
                    </div>

                    <div className='flex flex-col mt-[1rem] gap-[4px] text-[0.75rem]'>
                        <div className='text-[#6B7280]'>
                            Estimated Delivery
                        </div>

                        <div>
                            February 2-3, 2025
                        </div>
                    </div>
                </div>

                <div className='w-[49%] p-[0.75rem] border-1 border-[#E5E7EB] rounded-[6px]'>
                    <div className='text-[#333333] font-semibold text-[0.9rem]'>
                        Payment Details
                    </div>

                    <div className='my-[0.75rem]'>
                        <div className='text-[0.75rem] text-[#6B7280]'>
                            Payment MethodPayment Method
                        </div>

                        <div className='text-[0.75rem] text-[#111928] mt-[4px]'>
                            •••• •••• •••• 1234
                        </div>
                    </div>

                    <div className="flex justify-between text-[0.75rem] text-[#111928]">
                        <div>
                            Subtotal
                        </div>

                        <div>
                            $70,079
                        </div>
                    </div>

                    <div className="flex justify-between text-[0.75rem] text-[#111928]">
                        <div>
                            Sales tax (8.875%)
                        </div>

                        <div>
                            $2,648.90
                        </div>
                    </div>

                    <div className="w-full my-[0.75rem] border-b border-[#E5E7EB]" />

                    <div className="flex justify-between">
                        <div className="text-[0.9rem] font-semibold">
                            Total price
                        </div>

                        <div className="flex flex-col">
                            <div className="text-[0.9rem] font-semibold text-end">
                                $72,742
                            </div>

                            <div className="text-[#6B7280] text-[0.75rem]">
                                Plus sales tax (<span className="underline">View sales tax</span>)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page