import { Button } from '@heroui/button'
import React from 'react'

const Overview = () => {
    return (
        <div>
            <div className='mt-[1rem] border border-[#E5E7EB] backdrop-blur-[30px] p-[1.5rem] rounded-[0.5rem] bg-white flex flex-col'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-[4rem]'>
                        <div>
                            <div className='text-[0.75rem] text-[#374151]'>
                                Listing Placed
                            </div>
                            <div className="text-[0.875rem] text-[#111928]">
                                Jan 30, 2025
                            </div>
                        </div>

                        <div>
                            <div className='text-[0.75rem] text-[#374151]'>
                                Listing#
                            </div>
                            <div className="text-[0.875rem] text-[#111928]">
                                PP-2025-001
                            </div>
                        </div>

                        <div>
                            <div className='text-[0.75rem] text-[#374151]'>
                                Listed Price
                            </div>
                            <div className="text-[0.875rem] text-[#111928]">
                                $12,999
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row gap-[10px]'>
                        <Button className='border-1 border-[#E5E7EB] rounded-[6px] bg-[#F3F4F6] h-[2.063rem]'>
                            <div className='flex flex-row items-center gap-[6px]'>
                                <div>
                                    <img src="/bidding/listing/edit-icon.svg" alt="edit-icon" />
                                </div>

                                <div className='text-[#374151] text-[0.875rem] pt-[2px]'>
                                    Edit Lisitng
                                </div>
                            </div>
                        </Button>

                        <Button className='border-1 border-[#E5E7EB] rounded-[6px] bg-[#F3F4F6] h-[2.063rem]'>
                            <div className='flex flex-row items-center gap-[6px]'>
                                <div>
                                    <img src="/bidding/listing/delete.svg" alt="delete-icon" />
                                </div>

                                <div className='text-[#374151] text-[0.875rem] pt-[2px]'>
                                    Delete Lisitng
                                </div>
                            </div>
                        </Button>
                    </div>
                </div>

                <div className='border-t-1 border-[#E5E7EB] my-[1rem]'></div>

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-[1.25rem]'>
                        <div className='shadow-[0px_6px_4.9px_0px_rgba(0,0,0,0.04),0px_1px_0px_0px_rgba(0,0,0,0.12)] rounded-[8px]'>
                            <img src="/bidding/listing/media-4.png" alt="media-1" className='w-[7.313rem] h-[7.375rem] object-cover' />
                        </div>

                        <div>
                            <div>
                                <div className="flex flex-row items-center gap-[0.75rem]">
                                    <div className="text-[0.82rem] text-[#374151]">2023 Model</div>

                                    <div className="rounded-[4px] text-[0.75rem] text-[#111928] px-[0.5rem] py-[2px] shadow-[0px_6px_4.9px_0px_rgba(0,0,0,0.04),0px_1px_0px_0px_rgba(0,0,0,0.12)] bg-[#F3F4F6]">
                                        Like New
                                    </div>

                                    <div className="bg-[#057A55] rounded-[4px] text-[0.75rem] text-white px-[0.5rem] py-[2px]">
                                        Great Deal
                                    </div>
                                </div>

                                <div className='text-[1rem] mt-[4px] font-medium'>
                                    Calatrava White Gold Watch
                                </div>

                                <div className='text-[0.75rem] text-[#374151] mt-[4px]'>
                                    Ref # : 412515621
                                </div>

                                <div className='text-[0.875rem] flex flex-row items-center mt-[10px] gap-[0.5rem]'>
                                    <div>
                                        Original box
                                    </div>

                                    <div className='w-[5px] h-[5px] rounded-full bg-[#9CA3AF]'></div>

                                    <div>
                                        Original papers
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-t-1 border-[#E5E7EB] my-[1rem]'></div>

                <div className='py-[1rem]'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Brand:
                                        </div>

                                        <div>
                                            Patek Philippe
                                        </div>
                                    </div>
                                </td>

                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Style:
                                        </div>

                                        <div>
                                            Luxury
                                        </div>
                                    </div>
                                </td>

                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Case Material:
                                        </div>

                                        <div>
                                            Stainless Steel
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Movement Type:
                                        </div>

                                        <div>
                                            Automatic
                                        </div>
                                    </div>
                                </td>

                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Strap:
                                        </div>

                                        <div>
                                            Stainless Steel Bracelet
                                        </div>
                                    </div>
                                </td>

                                <td className='py-[4px]'>
                                    <div className='flex gap-[6px] text-[0.875rem] text-[#333333]'>
                                        <div className='font-semibold'>
                                            Warranty:
                                        </div>

                                        <div>
                                            5-Year 
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='border-t-1 border-[#E5E7EB] my-[1rem]'></div>

                <div className='flex flex-col gap-[0.5rem]'>
                    <div className='font-semibold text-[0.875rem] text-[#333333]'>
                        Description
                    </div>

                    <div className='text-[0.875rem] text-[#333333]'>
                        Ref. 126300 is the simplest version of the Datejust 41. With a classic smooth steel bezel, it can fly under the radar more easily than variants with fluted bezels. The bracelet and case are made of Oystersteel, Rolex’s brand name for their 904L stainless steel. The Datejust 41 is offered in a variety of dial colors, and it remains one of the most consistently popular men’s Rolex watches. Its caliber 3235 movement guarantees accuracy within 2 seconds per day, with 70 hours of power reserve.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview