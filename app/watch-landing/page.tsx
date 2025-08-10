"use client";
import React, { useState } from 'react';
import { LayoutGroup, motion } from "framer-motion";
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { Slider } from "@heroui/react";
import Buy from './buy';

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
    <div className="flex flex-col w-full h-full max-w-md items-start justify-center px-4 py-2 bg-white">
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
  const [activeTab, setActiveTab] = useState<string>("Buy");
  const [value, setValue] = useState<number[]>([200, 800]);

  const tabs: string[] = ["Buy", "Sell"];

  return (
    <div>
      <img src='watchLanding/banner-1.png' className='w-full' alt="Banner" />

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
          <img src='watchLanding/smart-connoisseur.png' alt="Smart Connoisseur" />
        </div>
      </div>

      <div className='px-8 py-8 flex justify-center items-center'>
        <div className='w-full max-w-7xl flex gap-3 justify-between'>
          <Select
            variant="bordered"
            className='flex-1'
            classNames={{
              base: "bg-white",
              trigger: "!border-1 !border-[#E5E7EB] focus-within:!border-black rounded-md flex-nowrap items-center gap-2 text-[0.82rem] bg-white !text-black",
              listbox: "bg-white",
              listboxWrapper: "bg-white",
              popoverContent: "bg-white",
              selectorIcon: "text-black",
              value: "!text-black",
              innerWrapper: "!text-black",
            }}
            placeholder='Brand'
          >
            <SelectItem key="rolex" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Rolex</SelectItem>
            <SelectItem key="omega" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Omega</SelectItem>
            <SelectItem key="cartier" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Cartier</SelectItem>
            <SelectItem key="patek" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Patek Philippe</SelectItem>
          </Select>

          <Popover placement="bottom-start" classNames={{
            content: [
              "bg-white",
            ],
          }}>
            <PopoverTrigger>
              <Button variant="bordered" className="flex-1 bg-white justify-between text-[0.82rem] text-black !border-1 !border-[#E5E7EB] focus:!border-[#000000]" radius={'sm'}>
                {value[0] === 0 && value[1] === 1000 ? 'Price range' : `$${Math.round(value[0])} - $${Math.round(value[1])}`}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <SliderComponent value={value} setValue={setValue} />
            </PopoverContent>
          </Popover>

          <Select
            variant="bordered"
            className='flex-1'
            classNames={{
              base: "bg-white",
              trigger: "!border-1 !border-[#E5E7EB] focus-within:!border-black rounded-md flex-nowrap items-center gap-2 text-[0.82rem] bg-white !text-black",
              listbox: "bg-white",
              listboxWrapper: "bg-white",
              popoverContent: "bg-white",
              selectorIcon: "text-black",
              value: "!text-black",
              innerWrapper: "!text-black",
            }}
            placeholder='Condition'
          >
            <SelectItem key="new" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">New</SelectItem>
            <SelectItem key="used" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Used</SelectItem>
            <SelectItem key="refurbished" className="bg-white text-black hover:bg-gray-100 data-[selected=true]:text-black">Refurbished</SelectItem>
          </Select>

          <Input
            placeholder="Search"
            type="text"
            variant="bordered"
            radius={'sm'}
            className='flex-1'
            classNames={{
              inputWrapper: '!border-1 !border-[#E5E7EB] focus-within:!border-[#000000] rounded-md text-black bg-white',
            }}
          />

          <div
            className="bg-black rounded-md px-3 py-1 flex items-center cursor-pointer border-1"
          >
            <img src='watchLanding/mdi_camera.svg' className="w-6" alt="Camera" />
          </div>

          <Button
            type="button"
            className="text-white bg-black rounded-md"
          >
            Search
          </Button>
        </div>
      </div>

      <Buy />
    </div>
  );
}
