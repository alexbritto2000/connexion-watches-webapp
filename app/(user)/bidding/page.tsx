"use client";
import React, { useState } from 'react';
import { LayoutGroup, motion } from "framer-motion";
import ComingSoon from './common/ComingSoon';
import { Chip, Input, Select, SelectItem, Tab, Tabs } from '@heroui/react';
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function BiddingPage() {
  const [activeTab, setActiveTab] = useState<string>("Buyer");

  const tabs: string[] = ["Buyer", "Seller"];
  const bidCards = [
    { name: 'Active Bids', value: 5 },
    { name: 'Accepted', value: 3 },
    { name: 'Declined', value: 5 },
    { name: 'Counter Offers', value: 2 },
  ];
  const [activeBid, setActiveBid] = useState("active");

  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md cursor-pointer";
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <>
      {/* <ComingSoon
        title="Dashboard Overview"
        description="Your personalized dashboard is coming soon! Track your bidding activity, watch your favorite items, and stay updated with market trends."
        icon="/bidding/overview.svg"
      /> */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-[10px] flex justify-between items-center">
          <div className='text-[1.5rem] font-semibold'>
            Your Bids
          </div>

          {/* Tab Component */}
          <LayoutGroup>
            <div className="flex rounded-lg cursor-pointer w-max bg-[#DBE0E2] text-[0.875rem] p-[2px]">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    className={`relative py-[0.406rem] px-[0.688rem] flex items-center rounded-lg cursor-pointer transition-colors duration-200 ${isActive ? "text-black backdrop-blur-[30px] shadow-[0px_12px_25px_0px_#0000000D]" : "text-[#3E4347]"
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-white rounded-lg z-0"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{tab}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "Buyer" && (
            <div>
              <div className='mb-[1rem]'>
                {/* 1. Cards */}
                <div className='flex flex-wrap gap-[10px]'>
                  {bidCards.map((bid) => (
                    <div className='border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A] p-[1.5rem] w-[10.5rem] bg-white rounded-[0.5rem] pb-[1rem]'>
                      <div className='text-[0.75rem] text-[#111928]'>
                        {bid.name}
                      </div>

                      <div className='text-[1.25rem] text-[#111928]'>
                        {bid.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2. Tabs */}
                <div className="flex justify-between gap-4 mt-4">
                  <div className='flex items-center gap-[1rem]'>
                    <Tabs
                      key="underlined"
                      aria-label="Tabs variants"
                      variant="underlined"
                      selectedKey={activeBid}
                      onSelectionChange={(key) => setActiveBid(String(key))}
                      classNames={{
                        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider border-[#E5E7EB]",
                        cursor: "w-full bg-black",
                        tab: "py-3 px-4 h-fit !text-[0.875rem]",
                        tabContent: "group-data-[selected=true]:text-black text-[#6B7280]",
                      }}
                    >
                      <Tab
                        key="active"
                        title='Active'
                      />
                      <Tab
                        key="accepted"
                        title="Accepted"
                      />
                      <Tab
                        key="declined"
                        title="Declined"
                      />
                      <Tab
                        key="expired"
                        title="Expired"
                      />
                      <Tab
                        key="all"
                        title="All"
                      />
                    </Tabs>

                    <div className='flex items-center gap-2'>
                      <div className='text-[0.875rem] text-[#9CA3AF]'>
                        Sort by:
                      </div>

                      <Select
                        defaultSelectedKeys={["date"]}
                        variant="flat"
                        color="default"
                        disallowEmptySelection
                        className="w-24 bg-transparent focus:outline-none focus:ring-0"
                        classNames={{
                          trigger: `${inputWrapperStyle} bg-transparent px-2 py-1 focus:outline-none focus:ring-0 focus:border-none shadow-none border-none`,
                          value: "text-black"
                        }}
                      >
                        <SelectItem key="date">
                          Date
                        </SelectItem>
                      </Select>
                    </div>
                  </div>

                  {/* 3. Search input */}
                  <div>
                    <div className="relative w-[8.125rem] max-w-sm">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => (e.target.value)}
                        placeholder="Search..."
                        className="w-full border-b-2 border-[#cbcfd1] focus:outline-none focus:border-blue-500 pr-10 pl-4 py-3 h-11 bg-[#EBF0F2]"
                      />

                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
                        {searchTerm ? (
                          <IoClose size={18} onClick={handleClear} />
                        ) : (
                          <FiSearch size={18} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className='w-full border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-[0.5rem] p-[1.5rem] bg-white'>
                  <div>
                    <div className='flex flex-row gap-[2rem]'>
                      <div className='w-[7rem] h-[8.8125rem] rounded-[0.375rem] shadow-[0px_1px_0px_0px_#0000001F]'>
                        <img src="/bidding/bid-1.jpg" className='w-full h-full object-cover' />
                      </div>

                      <div>
                        <div className='flex flex-row gap-[0.625rem]'>
                          <div className='text-[#374151] text-[0.875rem]'>
                            2023 Model
                          </div>

                          <div className='bg-[#057A55] text-[0.75rem] py-[2px] px-[6px] rounded-[2px] text-white'>
                            <div>
                              Great Deal
                            </div>
                          </div>
                        </div>

                        <div className='font-medium mt-[2px] text-[#111928]'>
                          Calatrava White Gold Watch
                        </div>

                        <div className='text-[0.75rem] text-[#374151]'>
                          Ref # : 412515621
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          )}

          {activeTab === "Seller" && (
            <div>
              {/* <h3 className="text-lg font-medium mb-4">Seller Dashboard</h3>
              <p className="text-gray-600">Your listings and selling activity will appear here.</p> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
