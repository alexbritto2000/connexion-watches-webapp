"use client";
import React, { useState } from 'react';
import { LayoutGroup, m, motion } from "framer-motion";
import ComingSoon from './common/ComingSoon';
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

export default function BiddingPage() {
  const [activeTab, setActiveTab] = useState<string>("Buyer");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tabs: string[] = ["Buyer", "Seller"];
  const bidCards = [
    { name: 'Active Bids', value: 5 },
    { name: 'Accepted', value: 3 },
    { name: 'Declined', value: 5 },
    { name: 'Counter Offers', value: 2 },
  ];
  const [activeBid, setActiveBid] = useState("active");
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
      imgUrl: '/bidding/bid-1.jpg',
      model: '2023 Model',
      title: 'Calatrava White Gold Watch',
      ref: '412515621',
      price: '$35,000',
      yourOffer: '$31,500',
      marketAverage: '$33,500',
      status: 'Pending Response',
      badge: 'Great Deal',
      seller: {
        name: 'LUX Store',
        rating: 4.5,
        reviews: 88
      }
    },
    {
      id: 2,
      imgUrl: '/bidding/bid-2.jpg',
      model: '2023 Model',
      title: 'Calatrava White Gold Watch',
      ref: '412515621',
      price: '$35,000',
      yourOffer: '$31,500',
      marketAverage: '$33,500',
      status: 'Pending Response',
      badge: 'Great Deal',
      seller: {
        name: 'LUX Store',
        rating: 4.5,
        reviews: 88
      }
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

              <div className='flex flex-col gap-4'>
                {/* Card 1 */}
                {yourBids.map((bid) => (
                  <div className='w-full border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-[0.5rem] p-[1.5rem] bg-white' key={bid.id}>
                    <div>
                      <div className='flex flex-row gap-[2rem]'>
                        <div className='w-[7rem] h-[8.8125rem] rounded-[0.375rem] shadow-[0px_1px_0px_0px_#0000001F]'>
                          <img src={bid.imgUrl} className='w-full h-full object-cover' />
                        </div>

                        <div className='flex flex-col gap-[2px] w-full'>
                          <div className='flex flex-row justify-between items-center w-full'>
                            <div className='flex flex-row gap-[0.625rem]'>
                              <div className='text-[#374151] text-[0.875rem]'>
                                {bid.model}
                              </div>

                              <div className='bg-[#057A55] text-[0.75rem] py-[1px] px-[6px] rounded-[2px] text-white'>
                                <div className='pt-[1px]'>
                                  {bid.badge}
                                </div>
                              </div>
                            </div>

                            <div className='text-[0.75rem] text-white bg-[#E3A008] py-[2px] px-[6px] rounded-[2px]'>
                              {bid.status}
                            </div>
                          </div>

                          <div className='font-medium text-[#111928]'>
                            {bid.title}
                          </div>

                          <div className='text-[0.75rem] text-[#374151]'>
                            Ref # : {bid.ref}
                          </div>

                          <div className='text-[1.25rem]'>
                            {bid.price}
                          </div>

                          <div className='mt-[10px]'>
                            <div className='flex flex-row gap-[5.625rem]'>
                              <div>
                                <div className='text-[0.75rem] text-[#4B5563]'>
                                  Your Offer
                                </div>

                                <div className='text-[#111928]'>
                                  {bid.yourOffer}
                                </div>
                              </div>

                              <div>
                                <div className='text-[0.75rem] text-[#4B5563]'>
                                  Market Average
                                </div>

                                <div className='text-[#111928]'>
                                  {bid.marketAverage}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='border-b-1 border-[#D1D5DB] my-[1rem]' />

                      <div className='flex flex-row justify-between items-center'>
                        {/* Buttons row */}
                        <div className='flex flex-row items-center'>
                          <img src="/bidding/lux-store.png" alt="lux store" />

                          <div className='text-[0.875rem] text-[#2F3033] font-semibold ml-[10px]'>
                            {bid.seller?.name}
                          </div>

                          <div className='flex items-center ml-[9px]'>
                            <div>
                              <img src="/bidding/left-bracs.svg" alt="bracs" className='h-[10px]' />
                            </div>

                            <div className='text-[0.75rem] text-[#1F2A37]'>
                              {bid.seller?.reviews}
                            </div>

                            <div>
                              <img src="/bidding/right-bracs.svg" alt="bracs" className='h-[10px]' />
                            </div>
                          </div>
                        </div>

                        <div className='flex flex-row gap-[0.5rem]'>
                          <Button className='bg-[#1E429F] text-white rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit' onPress={onOpen}>
                            Modify offer
                          </Button>

                          <Button className='bg-[#1F2A37] text-white rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit'>
                            Contact Seller
                          </Button>

                          <Button className='bg-[#E5E7EB] text-[#374151] rounded-[6px] text-[0.75rem] py-[7px] px-[0.844rem] flex items-center font-medium h-fit'>
                            Withdraw
                          </Button>
                        </div>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" hideCloseButton classNames={{
        backdrop: "bg-black/80 backdrop-opacity-80",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}>
        <ModalContent className="w-[33.25rem] max-w-[90vw]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-between items-center gap-1 !bg-[#FFFFFF59] py-[14px] px-[1.5rem]">
                <div>Payment Method</div>
                <div>
                  <img src="/close-icon.svg" alt="steps" />
                </div>
              </ModalHeader>

              <ModalBody className='px-0 py-0 w-auto max-w-fit'>
                <div className='px-[1.5rem] my-[2.5rem]'>
                  <RadioGroup value={paymentType} onValueChange={setPaymentType}>
                    {/* 1. local */}
                    <div
                      className='border-b-1 border-[#E5E7EB] pb-[1rem] cursor-pointer'
                      onClick={() => setPaymentType('local')}
                      onKeyDown={(e) => handleKeyDown(e, 'local')}
                      role="button"
                      tabIndex={0}
                      aria-label="Select local wire transfer payment method"
                    >
                      <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem]'>
                        <div className='flex flex-row items-start gap-[10px]'>
                          <Radio value="local" />

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
                    <div
                      className='border-b-1 border-[#E5E7EB] pb-[1rem] cursor-pointer mt-[1rem]'
                      onClick={() => setPaymentType('credit-card')}
                      onKeyDown={(e) => handleKeyDown(e, 'credit-card')}
                      role="button"
                      tabIndex={0}
                      aria-label="Select credit card payment method"
                    >
                      <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem]'>
                        <div className='flex flex-row items-start gap-[10px]'>
                          <Radio value="credit-card" />

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
                    <div
                      className='pb-[1rem] cursor-pointer mt-[1rem]'
                      onClick={() => setPaymentType('financing')}
                      onKeyDown={(e) => handleKeyDown(e, 'financing')}
                      role="button"
                      tabIndex={0}
                      aria-label="Select financing payment method"
                    >
                      <div className='flex flex-row justify-between text-[0.75rem] ml-[0.4rem]'>
                        <div className='flex flex-row items-start gap-[10px]'>
                          <Radio value="financing" />

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
              </ModalBody>

              <ModalFooter>
                <div className='flex flex-row gap-[0.5rem] w-full'>
                  <Button onPress={onClose} className='border border-[#E5E7EB] rounded-[6px] py-[0.719rem] text-[0.875rem] font-semibold flex-1 text-black bg-white'>
                    Cancel
                  </Button>

                  {/* <Button color="primary" onPress={onClose}>
                    Pay Now
                  </Button> */}

                  <Button onPress={onClose} className='border border-[#E5E7EB] rounded-[6px] py-[0.719rem] text-[0.875rem] font-semibold flex-1 text-white bg-black'>
                    Pay Now
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
