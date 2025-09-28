"use client";
import React, { useState } from 'react';
import { LayoutGroup, m, motion } from "framer-motion";
import { Button, Chip, Input, Radio, RadioGroup, Select, SelectItem, Tab, Tabs, useDisclosure } from '@heroui/react';
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@heroui/react";

export default function ListingsPage() {
  const [activeTab, setActiveTab] = useState<string>("Buyer");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tabs: string[] = ["Buyer", "Seller"];
  const bidCards = [
    { name: 'Active Listings', value: 10 },
    { name: 'Total Views', value: 1000 },
    { name: 'Pending Offers', value: 5 },
    { name: 'Sold this Month', value: 5 },
  ];
  const [activeBid, setActiveBid] = useState("listings");
  const [paymentType, setPaymentType] = useState("local");

  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md cursor-pointer";
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleKeyDown = (event: React.KeyboardEvent, value: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setPaymentType(value);
    }
  };

  const yourBids = [
    {
      id: 1,
      listing_created: 'Jan 30, 2025',
      listing_number: 'PP-2025-001',
      price: '$12,999',
      favourites: 5,
      views: 16,
      status: 'Active',
      model: '2023 Model',
      title: 'Calatrava White Gold Watch',
      ref: '412515621',
      boost: 'ends 28.04.2025',
      imgUrl: '/bidding/listing/list-1.png',
    },
    {
      id: 2,
      listing_created: 'Dec 24, 2024',
      listing_number: 'PP-2024-089',
      price: '$10,0000',
      favourites: 12,
      views: 22,
      status: 'Active',
      model: '2023 Model',
      title: 'Calatrava White Gold Watch',
      ref: '412515621',
      boost: '',
      imgUrl: '/bidding/listing/list-2.png',
    }
  ];

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
            Listings
          </div>

          {/* Tab Component */}
          {/* <LayoutGroup>
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
          </LayoutGroup> */}
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "Buyer" && (
            <div>
              <div className='mb-[1rem]'>
                {/* 1. Cards */}
                <div className='flex justify-between items-center'>
                  <div className='flex flex-wrap gap-[10px]'>
                    {bidCards.map((bid) => (
                      <div key={bid.name} className='border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A] p-[1.5rem] w-[10.5rem] bg-white rounded-[0.5rem] pb-[1rem]'>
                        <div className='text-[0.75rem] text-[#111928]'>
                          {bid.name}
                        </div>

                        <div className='text-[1.25rem] text-[#111928]'>
                          {bid.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className='flex flex-row items-center gap-[0.5rem] border-1 border-[#6B7280] rounded-[6px] px-[1.813rem] py-[0.938rem] bg-transparent'>
                    <div>
                      <img src="/bidding/listing/add-icon.svg" alt="add-icon" />
                    </div>

                    <div className='text-[#4B5563] text-[0.875rem]'>
                      Add Listing
                    </div>
                  </Button>
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
                        key="listings"
                        title='Listings'
                      />
                      <Tab
                        key="auctions"
                        title='Auctions'
                      />
                      <Tab
                        key="sold"
                        title='Sold'
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
                          <button
                            type="button"
                            onClick={handleClear}
                            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                            aria-label="Clear search"
                          >
                            <IoClose size={18} />
                          </button>
                        ) : (
                          <FiSearch size={18} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col gap-4'>
                {/* Card 1 */}
                {yourBids.map((bid) => (
                  <div className='w-full border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-[0.5rem] p-[1.5rem] bg-white' key={bid.id}>
                    <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-row gap-[4rem]'>
                        <div>
                          <div className='text-[0.75rem] text-[#4B5563]'>
                            Listing Created
                          </div>

                          <div className='text-[0.875rem] text-[#111928]'>
                            {bid.listing_created}
                          </div>
                        </div>

                        <div>
                          <div className='text-[0.75rem] text-[#4B5563]'>
                            Listing#
                          </div>

                          <div className='text-[0.875rem] text-[#111928]'>
                            {bid.listing_number}
                          </div>
                        </div>

                        <div>
                          <div className='text-[0.75rem] text-[#4B5563]'>
                            Price
                          </div>

                          <div className='text-[0.875rem] text-[#111928]'>
                            {bid.price}
                          </div>
                        </div>
                      </div>

                      <div className='flex flex-row gap-[1.5rem]'>
                        <div className='flex flex-row gap-[0.25rem] items-center'>
                          <div>
                            <img src="/bidding/listing/fav.svg" alt="fav" />
                          </div>

                          <div className='text-[0.75rem] text-[#111928]'>
                            {bid.favourites} Favorites
                          </div>
                        </div>

                        <div className='flex flex-row gap-[0.25rem] items-center'>
                          <div>
                            <img src="/bidding/listing/views.svg" alt="views" />
                          </div>

                          <div className='text-[0.75rem] text-[#111928]'>
                            {bid.views} Views
                          </div>
                        </div>

                        <div className='bg-[#057A55] text-[0.75rem] py-[1px] px-[6px] rounded-[2px] text-white'>
                          <div className='pt-[1px]'>
                            {bid.status}
                          </div>
                        </div>
                      </div>


                    </div>

                    <div className='border-b-1 border-[#E5E7EB] my-[1rem]' />

                    <div className='flex flex-row justify-between items-end'>
                      <div className='flex flex-row gap-[2rem]'>
                        <div>
                          <img src={bid.imgUrl} alt="list" />
                        </div>

                        <div>
                          <div className='flex flex-col gap-[2px] w-full'>
                            <div className='text-[#9CA3AF] text-[0.875rem]'>
                              {bid.model}
                            </div>

                            <div className='font-medium text-[#111928]'>
                              {bid.title}
                            </div>

                            <div className='text-[0.75rem] text-[#9CA3AF]'>
                              Ref # : {bid.ref}
                            </div>
                          </div>

                          <div className='flex flex-row items-center mt-[10px] gap-[0.5rem]'>
                            <div className='text-[0.875rem]'>
                              Original box
                            </div>

                            <div className='bg-[#9CA3AF] h-[5px] w-[5px] rounded-full'></div>

                            <div className='text-[0.875rem]'>
                              Original papers
                            </div>
                          </div>

                          <div className='mt-[1rem] flex flex-row gap-[0.5rem]'>
                            <Button className='flex flex-row items-center gap-[6px] border-1 border-[#E5E7EB] rounded-[6px] bg-[#F3F4F6] px-[0.75rem] py-[2px] h-[2.063rem]'>
                              <img src="/bidding/listing/edit-icon.svg" alt="edit-icon" />

                              <div className='text-[0.875rem] text-[#4B5563]'>
                                Edit Lisitng
                              </div>
                            </Button>

                            <Button className='flex flex-row items-center gap-[6px] border-1 border-[#E5E7EB] rounded-[6px] bg-[#F3F4F6] px-[0.75rem] py-[2px] h-[2.063rem]'>
                              <img src="/bidding/listing/carbon_rocket.svg" alt="carbon_rocket" />

                              <div className='text-[0.875rem] text-[#4B5563]'>
                                Boost Visibility
                              </div>
                            </Button>

                            <Button className='flex flex-row items-center gap-[6px] border-1 border-[#E5E7EB] rounded-[6px] bg-[#F3F4F6] px-[0.75rem] py-[2px] h-[2.063rem]'>
                              <img src="/bidding/listing/sell-icon.svg" alt="sell-icon" />

                              <div className='text-[0.875rem] text-[#4B5563]'>
                                Sell Now
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        {bid.boost && (
                          <Button className='flex flex-row bg-[#3F83F8] rounded-[2px] h-[1.625rem] px-[6px]'>
                            <img src="/bidding/listing/white_carbon_rocket.svg" alt="carbon-rocket" />

                            <div className='flex flex-row text-white text-[0.75rem] gap-[2px]'>
                              <div className='font-semibold'>
                                Boost
                              </div>
                              <div>
                                ends 28.04.2025
                              </div>
                            </div>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

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
