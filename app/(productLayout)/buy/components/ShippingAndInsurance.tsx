'use client';
import React from 'react';
import { RadioGroup, Radio } from "@heroui/react";

interface ShippingAndInsuranceProps {
  shippingMethod: string;
  setShippingMethod: (value: string) => void;
  insuranceMethod: string;
  setInsuranceMethod: (value: string) => void;
}

const ShippingAndInsurance = ({ 
  shippingMethod, 
  setShippingMethod, 
  insuranceMethod, 
  setInsuranceMethod 
}: ShippingAndInsuranceProps) => {
  return (
    <>
      <div className='text-[#333333] text-[0.9rem] font-semibold mb-[1.25rem] mt-[2rem]'>
        Shipping Method
      </div>

      <div>
        <div className="flex flex-col gap-3">
          <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
            {/* 1. DHL */}
            <div className='border-b-1 border-[#E5E7EB] pb-[0.9rem] w-full cursor-pointer' onClick={() => setShippingMethod('DHL')}>
              <div className='flex flex-row justify-between items-center text-[0.75rem] ml-[0.4rem] w-full'>
                <div className='flex flex-row items-center gap-[10px]'>
                  <Radio value="DHL">
                  </Radio>

                  <div className='w-[6rem]'>
                    Cheapest
                  </div>
                </div>

                <div>
                  $5
                </div>

                <div className='text-[#4B5563] w-[7rem]'>
                  10 Business days
                </div>

                <div className='w-[3rem] flex justify-end'>
                  <img src="/buyingPage/DHL logo.svg" alt="DHL" />
                </div>
              </div>
            </div>

            {/* 2. FEDEX */}
            <div className='border-b-1 border-[#E5E7EB] pb-[0.9rem] pt-[0.5rem] w-full cursor-pointer' onClick={() => setShippingMethod('FEDEX')}>
              <div className='flex flex-row justify-between items-center text-[0.75rem] ml-[0.4rem] w-full'>
                <div className='flex flex-row items-center gap-[10px]'>
                  <Radio value="FEDEX">
                  </Radio>

                  <div className='w-[6rem]'>
                    Express
                  </div>
                </div>

                <div>
                  $10
                </div>

                <div className='text-[#4B5563] w-[7rem]'>
                  5-7 Business days
                </div>

                <div className='w-[3rem] flex justify-end'>
                  <img src="/buyingPage/fedex.svg" alt="FEDEX" />
                </div>
              </div>
            </div>

            {/* 3. UPS */}
            <div className='pt-[0.5rem] w-full cursor-pointer' onClick={() => setShippingMethod('UPS')}>
              <div className='flex flex-row justify-between items-center text-[0.75rem] ml-[0.4rem] w-full'>
                <div className='flex flex-row items-center gap-[10px]'>
                  <Radio value="UPS">
                  </Radio>

                  <div className='w-[6rem]'>
                    Super Fast
                  </div>
                </div>

                <div>
                  $20
                </div>

                <div className='text-[#4B5563] w-[7rem]'>
                  2-3 Business days
                </div>

                <div className='w-[3rem] flex justify-end'>
                  <img src="/buyingPage/UPS logo.svg" alt="UPS" />
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className='text-[#333333] text-[0.9rem] font-semibold mb-[1.25rem] mt-[2rem]'>
        Insurance method
      </div>

      <div>
        <div className="flex flex-col">
          <RadioGroup value={insuranceMethod} onValueChange={setInsuranceMethod}>
            {/* 1. CARRIER */}
            <div className='border-b-1 border-[#E5E7EB] pb-[1rem] w-full cursor-pointer' onClick={() => setInsuranceMethod('CARRIER')}>
              <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem] w-full'>
                <div className='flex flex-row items-start gap-[10px]'>
                  <Radio value="CARRIER">
                  </Radio>

                  <div>
                    <div className='mb-[0.5rem]'>
                      Carrier Insurance
                    </div>

                    <div className='flex flex-col gap-[0.25rem] text-[#4B5563]'>
                      <div>
                        First $100 covered for free
                      </div>

                      <div>
                        Coverage up to $50,000
                      </div>

                      <div>
                        Protection against loss and damage
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text-[0.72rem]'>
                  $429.00
                </div>
              </div>
            </div>

            {/* 2. Premium Insurance */}
            <div className='pb-[1rem] w-full cursor-pointer mt-[1rem]' onClick={() => setInsuranceMethod('PREMIUM')}>
              <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem] w-full'>
                <div className='flex flex-row items-start gap-[10px]'>
                  <Radio value="PREMIUM">
                  </Radio>

                  <div>
                    <div className='mb-[0.5rem]'>
                      Premium Insurance
                    </div>

                    <div className='flex flex-col gap-[0.25rem] text-[#4B5563]'>
                      <div>
                        Full value coverage
                      </div>

                      <div>
                        Protection against theft, loss, and damage
                      </div>

                      <div>
                        Simplified claims process
                      </div>
                    </div>
                  </div>
                </div>

                <div className='text-[0.72rem]'>
                  $329.95
                </div>
              </div>
            </div>
          </RadioGroup>
        </div>

        <div className='bg-[#EBF5FF] rounded-[0.5rem] p-[1rem] flex flex-row'>
          <div className='w-[1.5rem] mt-[2px]'>
            <img src='/buyingPage/blue-info.svg' alt="Info" />
          </div>

          <div className='text-[#3F83F8] text-[0.75rem] pl-[10px]'>
            Shipping insurance protects your purchase against loss, damage, or theft during transit. Claims can be filed within 30 days of shipment for any covered incidents.
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAndInsurance;
