import RatingStars from '@/components/RatingStars'
import { Button } from '@heroui/button'
import { useRouter } from "next/navigation";
import React from 'react'

const Seller = () => {
    const router = useRouter();

    return (
        <div>
            <div className='text-[0.9rem] font-semibold mt-[1.25rem] mb-[0.6rem]'>
                Seller
            </div>

            <div className="mt-[1rem] flex flex-row justify-between max-w-[36.25rem]">
                <div className="flex">
                    <div className="flex flex-col items-center mr-[1rem]">
                        <img
                            src="/productDetails/3-stars.svg"
                            alt="stars"
                            className="mb-[-10px]"
                        />

                        <div className="flex flex-row items-center">
                            <img
                                src="/productDetails/trust-score-left-bracs.svg"
                                alt="left-bracket"
                            />

                            <div className="text-[#046C4E] text-[1.875rem] font-medium">
                                88
                            </div>

                            <img
                                src="/productDetails/trust-score-left-bracs.svg"
                                className="transform scale-x-[-1]"
                                alt="right-bracket"
                            />
                        </div>

                        <div className="text-[#111928] text-[0.75rem] mt-[-8px]">
                            Trust Score
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex flex-row items-center gap-[6px]">
                            <div className="text-black text-[1rem]">John Smith</div>

                            <div>
                                <img
                                    src="/productDetails/verified-batch.svg"
                                    alt="badge"
                                />
                            </div>

                            <div>
                                <img src="/productDetails/flag.svg" alt="usa-flag" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-1">
                            <div>
                                <RatingStars rating={5} />
                            </div>

                            <div className="text-[0.9rem] text-[#6B7280] mt-[1px] flex flex-row gap-[1px]">
                                <span className="text-black">5,0</span>(
                                <span className="underline">24</span>)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-[6px]">
                    <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                        <img src="/productDetails/badge.svg" alt="badge" />
                    </div>

                    <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                        <img src="/productDetails/item-cart.svg" alt="item-cart" />
                    </div>

                    <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                        <img
                            src="/productDetails/verified-watch.svg"
                            alt="verified-watch"
                        />
                    </div>

                    <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                        <img
                            src="/productDetails/watch-graph.svg"
                            alt="watch-graph"
                        />
                    </div>
                </div>
            </div>

            <div className='mt-[2rem] max-w-[36.25rem]'>
                <div className='w-full rounded-[6px] bg-white py-[0.75rem] border-1 border-[#D1D5DB]'>
                    <div className='flex flex-row gap-[0.5rem] items-center justify-center text-[0.9rem]'>
                        <div className='text-[0.9rem] w-[1.25rem]'>
                            <img src="/buyingPage/basil_clock-outline.svg" alt="clock" />
                        </div>

                        <div className='font-semibold mt-[2px]'>
                            Reserved for
                        </div>

                        <div className='font-semibold mt-[2px]'>
                            59:59 min
                        </div>

                        <div className='mt-[2px]'>
                            Complete your purchase before time runs out!
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[1.25rem]'>
                <div className='text-[#111928] font-semibold text-[0.9rem]'>
                    Buyer Protection
                </div>

                <div className='max-w-[36.25rem] mt-[0.5rem] text-[0.75rem] text-[#111928]'>
                    With Buyer Protection, you benefit from many security services, including payment through our Service, our commitment to authenticity, and a legally mandated 14-day return policy.
                </div>
            </div>

            <div className='mt-[2rem] max-w-[36.25rem]'>
                <div className='flex flex-row justify-between text-[0.75rem] text-[#111928]'>
                    <div>
                        Item price
                    </div>

                    <div>
                        $70,000
                    </div>
                </div>

                <div className='flex flex-row justify-between text-[0.75rem] text-[#111928] mt-[0.75rem]'>
                    <div>
                        Shipping costs
                    </div>

                    <div>
                        Calculated after shipping address inputted
                    </div>
                </div>

                <div className='w-full border-t border-[#E5E7EB] my-[0.75rem]' />

                <div className='flex flex-row justify-between text-[0.75rem] mt-[0.75rem]'>
                    <div className='font-semibold text-[#111928]'>
                        Total price
                    </div>

                    <div className='flex flex-col justify-end'>
                        <div className='font-semibold text-[#111928] flex justify-end'>
                            $70,079
                        </div>

                        <div className='text-[0.65rem] text-[#6B7280]'>
                            Plus sales tax (View sales tax)
                        </div>
                    </div>
                </div>

                <div className='flex items-end justify-between mt-[1.25rem]'>
                    <div className='max-w-[24.875rem] text-[0.75rem]'>
                        Monthly payments available with affirm. Check your purchasing power
                        To use Affirm upon seller confirmation, click see if you qualify.
                    </div>

                    <img src="/buyingPage/arcticons_affirm.svg" alt="arcticons_affirm" />
                </div>

                <div className='w-full mt-[1.7rem]'>
                    <Button className='py-[0.75rem] w-full rounded-[6px] bg-black text-white font-semibold text-[0.9rem]' onClick={() => router.push("/billing-details")}>
                        Pay Now
                    </Button>
                </div>

                <div className='mt-[1rem] text-[0.75rem] text-[#6B7280] flex flex-col items-center justify-center'>
                    <div>By using this service, you agree to our</div>
                    <div>
                        <span className='underline cursor-pointer'>
                            Terms & Conditions
                        </span> and <span className='underline cursor-pointer'>Privacy Policy.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seller