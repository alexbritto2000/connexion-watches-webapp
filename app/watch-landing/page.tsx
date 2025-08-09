"use client";
import React, { useState } from 'react';
import Header from '@/components/headerComponents/Header';
import { LayoutGroup, motion } from "framer-motion";
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { Slider } from "@heroui/react";

type SliderComponentProps = {
  value: number[];
  setValue: (val: number[]) => void;
};

const SliderComponent: React.FC<SliderComponentProps> = ({ value, setValue }) => {
  // Helper to format currency without trailing .00
  const formatValue = (val: number) => {
    // Round to integer and add dollar sign
    return `$${Math.round(val)}`;
  };

  return (
    <div className="flex flex-col w-full h-full max-w-md items-start justify-center px-4 py-2">
      <div className="text-black font-medium mb-6 flex flex-row gap-11">
        <div>
          Price Range
        </div>

        <div className='text-[#1F2A37] font-normal'>
          {`${formatValue(value[0])} – ${formatValue(value[1])}`}
        </div>
      </div>

      <Slider
        className="max-w-md"
        formatOptions={{ style: "currency", currency: "USD" }} // optional, can remove since we format ourselves
        maxValue={1000}
        minValue={0}
        step={10}
        value={value}
        onChange={(val) => {
          if (Array.isArray(val)) setValue(val);
        }}
        classNames={{
          label: "mb-6",                         // 24px gap below label
          track: "bg-[#E5E7EB] h-1",             // light grey track with 4px height
          filler: "bg-black",                    // black filled part
          thumb: "bg-black border-none w-3 h-3 rounded-full", // small black round thumb
        }}
      />
    </div>
  );
};

export default function WatchLanding() {
  const [activeTab, setActiveTab] = useState("Buy");
  const inputWrapperStyle = "!border-1 !border-[#F0F0F0] focus-within:border-blue-500 rounded-md";
  const [value, setValue] = useState<number[]>([200, 800]);

  const tabs = ["Buy", "Sell"];

  return (
    <div>
      <img src='WatchLanding/banner-1.png' className='w-full' />

      <div className='flex justify-between px-6 mt-[-2.5rem]'>
        <div className='w-[13.125rem]'></div>

        <LayoutGroup>
          <div className="flex border border-gray-200 shadow-sm rounded-lg cursor-pointer p-1 font-semibold w-max bg-white mt-4 h-[3.85rem]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <div
                  key={tab}
                  className={`relative px-[4rem] flex items-center rounded-lg cursor-pointer ${isActive ? "text-white" : "text-black"
                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-black rounded-lg z-0"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}

                  {/* No opacity or scale animation here */}
                  <span className="relative z-10">
                    {tab}
                  </span>
                </div>
              );
            })}
          </div>
        </LayoutGroup>

        <div>
          <img src='watchLanding/smart-connoisseur.png' />
        </div>
      </div>

      <div className='px-8 py-8 flex justify-center items-center'>
        <div className='w-full max-w-7xl flex gap-3'>
          <Select
            variant="bordered"
            className='w-[15.625rem]'
            classNames={{
              trigger: `${inputWrapperStyle} flex-nowrap items-center gap-2 text-[0.82rem] border-[#E5E7EB] border-1`,
            }}
            placeholder='Product type'
          >
            <SelectItem key="ring">Ring</SelectItem>
          </Select>

          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button variant="bordered" className="w-[15.625rem] justify-between text-[0.82rem] text-[#6B7280] border-1 border-[#E5E7EB]" radius={'sm'}>
                Select Price Range
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <SliderComponent value={value} setValue={setValue} />
            </PopoverContent>
          </Popover>

          <Input
            placeholder="Description"
            type="text"
            variant="bordered"
            radius={'sm'}
            classNames={{
              inputWrapper: 'border-1 border-[#E5E7EB]',  // apply your border style here
            }}
          />

          <div
            className="bg-black rounded-md px-3 py-1 flex items-center cursor-pointer border-1"
          >
            <img src='watchLanding/mdi_camera.svg' className="w-6" />
          </div>

          <Button
            type="button"
            className="text-white bg-black rounded-md"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
