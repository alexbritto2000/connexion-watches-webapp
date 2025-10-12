"use client";

import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import verificationData from "./data.json";

const AuthenticityVerificationDetailPage = () => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleSelectionChange = (criteriaId: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [criteriaId]: value
        }));
    };
    return (
        <div className="max-w-7xl mx-auto pt-[1.5rem] pb-[2rem]">
            {/* <h1 className="text-2xl font-bold mb-4">Loading Authenticity Verification Details...</h1> */}
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-row gap-[0.5rem] items-center">
                    <div>
                        <Image src="/bidding/authenticity-verification/authendicity.svg" alt="add-icon" width={18} height={19} />
                    </div>

                    <div className="text-[#1F2A37] text-[0.75rem]">
                        #PP-2025-001
                    </div>
                </div>

                <Button className="text-[0.75rem] text-[#6B7280] px-[0.75rem] py-[0.5rem] border border-[#D5D5D5] rounded-[0.5rem] bg-transparent">
                    Need Help?
                </Button>

            </div>

            <div className="w-[50rem] mx-auto mt-[1.4rem]">
                <div className="text-[1.5rem] text-black">
                    Authenticity Verification
                </div>

                <div className="text-[0.75rem] text-[#4B5563]">
                    You’ve started the authentication process. Follow these steps carefully
                </div>

                <div className="mt-[1rem] shadow-[0_6px_4.9px_0_#0000000A,0_1px_0_0_#0000001F] rounded-[0.5rem] bg-white p-[1.5rem] w-full">
                    <div className="rounded-[6px] border border-[#E5E7EB]">
                        <div className="flex flex-row items-center gap-[3.125rem]">
                            <div>
                                <Image src="/bidding/authenticity-verification/watch-img-2.png" alt="step1" width={142} height={187} className="w-auto rounded-[6px]" />
                            </div>

                            <div className="flex-1 pr-4">
                                <div className="text-[0.75rem] text-[#9CA3AF]">
                                    2023 Model
                                </div>

                                <div className="mt-[2px] text-[#111928]">
                                    Calatrava White Gold Watch
                                </div>

                                <div className="mt-[0.5rem] text-[0.75rem] text-[#111928]">
                                    <div className="flex flex-row justify-between">
                                        <div className="font-medium">Reference number:</div>
                                        <div>412515621</div>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <div className="font-medium">Movement:</div>
                                        <div>Automatic</div>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <div className="font-medium">Case material:</div>
                                        <div>Steel</div>
                                    </div>

                                    <div className="flex flex-row justify-between">
                                        <div className="font-medium">Dial color:</div>
                                        <div>Gray</div>
                                    </div>
                                </div>

                                <div className="mt-[0.5rem] text-[#4B5563] text-[0.75rem] underline">
                                    Edit Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-[1rem] shadow-[0_6px_4.9px_0_#0000000A,0_1px_0_0_#0000001F] rounded-[0.5rem] bg-white p-[1.5rem] w-full">
                    <div className="space-y-4">
                        {verificationData.criteria.map((criteria, index) => (
                            <div key={criteria.id} className="flex flex-row justify-between">
                                <div>
                                    <div className="text-[#111928] text-[0.875rem] font-medium">
                                        {criteria.title}
                                    </div>

                                    <div className="text-[#374151] text-[0.75rem]">
                                        {criteria.description}
                                    </div>
                                </div>

                                <Select
                                    className="w-[16.875rem] bg-white rounded-[10px]"
                                    placeholder="Select an option"
                                    variant="bordered"
                                    radius='sm'
                                    selectedKeys={formData[criteria.id] ? [formData[criteria.id]] : []}
                                    onSelectionChange={(keys) => {
                                        const selectedKey = Array.from(keys)[0] as string;
                                        handleSelectionChange(criteria.id, selectedKey);
                                    }}
                                >
                                    {criteria.options.map((option) => (
                                        <SelectItem key={option.key}>
                                            {option.value}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <div className="mt-[2rem] flex justify-end">
                <Button className='border border-[#E5E7EB] rounded-[6px] py-[0.75rem] text-[0.875rem] font-semibold text-black bg-white mr-[10px] w-[11.875rem] h-[2.75rem]'>
                    Save & Close
                </Button>
                <Button
                    className="bg-[#111928] text-white px-[2rem] py-[0.75rem] rounded-[6px] text-[0.875rem] font-medium w-[11.875rem] h-[2.75rem]"
                    onClick={() => {
                        console.log('Form data:', formData);
                        // Add your submit logic here
                    }}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
}

export default AuthenticityVerificationDetailPage;