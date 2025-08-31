'use client';
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div className="max-w-[960px] mx-auto mt-[2.5rem] mb-[6.5rem] flex flex-row w-full">
            <div className="w-[50%]">
                <div className="text-[#333333] text-[0.9rem] font-semibold">
                    Billing Address
                </div>

                <div className="mt-4 flex flex-col gap-[2px] text-[0.9rem]">
                    <div>
                        Kyle Deux
                    </div>

                    <div>
                        116th and Broadway
                    </div>

                    <div>
                        2A
                    </div>

                    <div>
                        10027 New York
                    </div>

                    <div>
                        New York
                    </div>

                    <div>
                        United States of America
                    </div>
                </div>

                <div className="text-[#333333] text-[0.9rem] font-semibold mt-[2rem]">
                    Shipping Address
                </div>

                <div className="text-[0.9rem] mt-4">
                    Same as billing address
                </div>

                <div className="text-[#333333] text-[0.9rem] font-semibold mt-[2rem]">
                    Seller
                </div>

                <div className="text-[0.9rem] mt-4">
                    Luxury Time Global
                </div>

                <div className="text-[#333333] text-[0.9rem] font-semibold mt-[2rem]">
                    Services
                </div>

                <div className="text-[#333333] text-[0.9rem] font-semibold mt-[2rem]">
                    Buyer Protection
                </div>

                <div className="text-[0.9rem] test-[#111928] mt-2">
                    With Buyer Protection, you benefit from many security services, including payment through our Service, our commitment to authenticity, and a legally mandated 14-day return policy.
                </div>
            </div>

            <div className="w-[50%]">
                <div className="text-[#333333] text-[0.9rem] font-semibold">
                    Your Order
                </div>

                <div className="flex flex-col mt-[1rem] text-[0.9rem] gap-[2px]">
                    <div>
                        • Payment via an escrow account
                    </div>
                    <div>
                        • Expected delivery 2/6/25 - 2/11/25
                    </div>
                </div>

                <div className="text-[#333333] text-[0.9rem] font-semibold mt-[1.25rem]">
                    Cost Summary
                </div>

                <div className="mt-4 p-[0.75rem] w-full bg-[#F3F4F6] rounded-[6px] text-[#111928] text-[0.75rem]">
                    <div className="flex justify-between">
                        <div>
                            Item price
                        </div>

                        <div>
                            $70,000
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            Shipping costs
                        </div>

                        <div>
                            $79.00
                        </div>
                    </div>

                    <div className="w-full my-[0.75rem] border-b border-[#E5E7EB]" />

                    <div className="flex justify-between">
                        <div>
                            Subtotal
                        </div>

                        <div>
                            $70,079
                        </div>
                    </div>

                    <div className="flex justify-between">
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

                            <div className="text-[#6B7280]">
                                Plus sales tax (<span className="underline">View sales tax</span>)
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex flex-row gap-4 w-full">
                    <Button className="rounded-[6px] py-[0.7rem] text-[0.9rem] font-semibold bg-[#F3F4F6] text-black flex flex-1" onClick={() => router.push('/payment-selection')}>
                        Back
                    </Button>

                    <Button className="rounded-[6px] py-[0.7rem] text-[0.9rem] font-semibold bg-black text-white flex flex-1" onClick={() => router.push('/order-confirmed')}>
                        Pay Now
                    </Button>
                </div>

            </div>
        </div>
    );
}