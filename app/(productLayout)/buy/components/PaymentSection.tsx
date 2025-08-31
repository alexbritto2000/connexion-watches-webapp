'use client';
import React from 'react';
import { RadioGroup, Radio } from "@heroui/react";

interface PaymentSectionProps {
  paymentType: string;
  setPaymentType: (value: string) => void;
}

const PaymentSection = ({ paymentType, setPaymentType }: PaymentSectionProps) => {
  return (
    <>
      <div className='text-[#333333] text-[0.9rem] font-semibold mb-[1.25rem] mt-[2rem]'>
        Payment
      </div>

      <div className="flex flex-col">
        <RadioGroup value={paymentType} onValueChange={setPaymentType}>
          {/* 1. local */}
          <div className='border-b-1 border-[#E5E7EB] pb-[1rem] w-full cursor-pointer' onClick={() => setPaymentType('local')}>
            <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem] w-full'>
              <div className='flex flex-row items-start gap-[10px]'>
                <Radio value="local">
                </Radio>

                <div>
                  <div className='mb-[0.5rem]'>
                    Local Wire Transfer
                  </div>

                  <div className='flex flex-col gap-[0.25rem] text-[#4B5563]'>
                    Pay safely and easily by wire transfer. We will confirm payment as soon as your money arrives in the escrow account.
                  </div>
                </div>
              </div>

              <div className="w-[1.25rem]">
                <img src="/buyingPage/edit_pencil.svg" alt="Edit pencil" />
              </div>
            </div>
          </div>

          {/* 2. Credit card */}
          <div className='border-b-1 border-[#E5E7EB] pb-[1rem] w-full cursor-pointer mt-[1rem]' onClick={() => setPaymentType('credit-card')}>
            <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem] w-full'>
              <div className='flex flex-row items-start gap-[10px]'>
                <Radio value="credit-card">
                </Radio>

                <div>
                  <div className='mb-[0.5rem]'>
                    Credit Card
                  </div>
                </div>
              </div>

              <div className='flex flex-row items-center gap-2'>
                <img src="/buyingPage/visa.svg" alt="visa" />
                <img src="/buyingPage/master-card.svg" alt="master-card" />
                <img src="/buyingPage/amex.svg" alt="amex" />
              </div>
            </div>
          </div>

          {/* 3. Financing */}
          <div className='pb-[1rem] w-full cursor-pointer mt-[1rem]' onClick={() => setPaymentType('financing')}>
            <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem] w-full'>
              <div className='flex flex-row items-start gap-[10px]'>
                <Radio value="financing">
                </Radio>

                <div>
                  <div className='mb-[0.5rem]'>
                    Financing
                  </div>
                </div>
              </div>

              <div className='flex flex-row items-center gap-2'>
                <div className='flex flex-col items-end'>
                  <div className='text-[#6B7280] text-[0.5rem]'>Monthly payments with</div>
                  <img src="/buyingPage/arcticons_affirm.svg" alt="arcticons_affirm" />
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>
    </>
  );
};

export default PaymentSection;
