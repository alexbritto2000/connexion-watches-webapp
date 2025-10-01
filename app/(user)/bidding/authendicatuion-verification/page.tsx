'use client';

import React, { useState } from 'react';
import ComingSoon from '../common/ComingSoon';
import { Button, Tab, Tabs } from '@heroui/react';
import { IoClose } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';

export default function AuthenticityVerificationPage() {
  const [activeBid, setActiveBid] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleClear = () => {
    setSearchTerm("");
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
      imgUrl: '/bidding/authenticity-verification/watch-img.jpg',
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
      imgUrl: '/bidding/authenticity-verification/watch-img.jpg',
    }
  ];

  return (
    <>
      <div className="p-6">
        {/* Header */}
        <div className="mb-[10px] flex justify-between items-center">
          <div className='text-[1.5rem] font-semibold'>
            Your Bids
          </div>
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
                key="all"
                title='All'
              />
              <Tab
                key="completed"
                title='Completed'
              />
            </Tabs>
          </div>

          {/* 3. Search input */}
          <div>
            <div className="relative w-[8.125rem] max-w-sm">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Cards */}
        <div className='flex flex-col gap-[0.5rem] mt-[0.5rem]'>
          {yourBids.map((bid) => (
            <div
              className='w-full border border-white backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-[0.5rem] p-[1.5rem] bg-white cursor-pointer flex flex-row justify-between'
              key={bid.id}
              //onClick={() => handleClick(bid.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  //handleClick(bid.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View listing ${bid.listing_number}`}
            >
              <div className='flex flex-row gap-[2rem]'>
                <div className='rounded-[0.375rem] shadow-[0px_1px_0px_0px_#0000001F] w-fit'>
                  <img src={bid.imgUrl} className='h-[8.813rem] w-[7rem] object-cover' />
                </div>

                <div className='flex flex-col items-start justify-between'>
                  <div>
                    <div className='font-medium'>
                      Calatrava White Gold Watch
                    </div>
                    <div className='text-[#374151] text-[0.75rem] mt-[2px]'>
                      Ref # : 412515621
                    </div>
                  </div>

                  <div className='text-[#1F2A37] flex flex-row gap-[1rem] text-[0.875rem]'>
                    <div className='underline'>
                      View details
                    </div>
                    <div className='underline'>
                      Contact Owner
                    </div>
                  </div>

                  <Button className='border-1 border-[#E5E7EB] rounded-[6px] px-[1rem] py-[6.5px] bg-[#F3F4F6] h-[2rem]'>
                    <div className='flex flex-row gap-[6px] items-center'>
                      <div>
                        <img src="/bidding/authenticity-verification/watch-icon.svg" />
                      </div>

                      <div className='text-[#4B5563] text-[0.875rem]'>
                        Start verification
                      </div>
                    </div>
                  </Button>
                </div>
              </div>

              <div className='flex flex-col justify-between items-end'>
                <div className='flex flex-col items-end gap-[0.25rem]'>
                  <div className='text-[0.875rem] text-[#111928]'>
                    Arrived
                  </div>

                  <div className="bg-[#057A55] text-[0.75rem] py-[1px] px-[6px] rounded-[2px] text-white mt-[4px]">
                    <div className="pt-[1px]">Great Deal</div>
                  </div>
                </div>

                <Button className='border-1 border-[#E5E7EB] rounded-[6px] px-[1rem] py-[6.5px] bg-[#F3F4F6] h-[2rem]'>
                  <div className='flex flex-row gap-[6px] items-center'>
                    <div>
                      <img src="/bidding/authenticity-verification/report-icon.svg" />
                    </div>

                    <div className='text-[#4B5563] text-[0.875rem]'>
                      Report
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
