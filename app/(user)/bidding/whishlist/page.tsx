'use client';
import React, { useState } from 'react';
import ComingSoon from '../common/ComingSoon';
import { Button } from '@heroui/button';
import { Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, Switch, useDisclosure } from '@heroui/react';
import { IoClose } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';

export default function WishlistPage() {
  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md cursor-pointer";
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSelected, setIsSelected] = React.useState(false);

  const handleClear = () => {
    setSearchTerm("");
  };

  const whishlistItems = [
    {
      id: 1,
      title: "Calatrava White Gold Watch",
      reference: "412515621",
      yearRange: "2020 - 2022",
      condition: "Like New",
      maxOffer: "$8,999",
      features: ["Original box", "Original papers"],
      imageUrl: "/bidding/whishlist/whishlist-1.png"
    },
    {
      id: 2,
      title: "Calatrava White Gold Watch",
      reference: "412515621",
      yearRange: "2021",
      condition: "Like New",
      maxOffer: "$8,999",
      features: ["Original box", "Original papers"],
      imageUrl: "/bidding/whishlist/whishlist-2.png"
    },
    {
      id: 3,
      title: "Calatrava White Gold Watch",
      reference: "412515621",
      yearRange: "2023 Modal",
      condition: "Like New",
      maxOffer: "$8,999",
      features: ["Original box", "Original papers"],
      imageUrl: "/bidding/whishlist/whishlist-3.jpg"
    }
    // Add more items as needed
  ];

  return (
    <>
      <div className="mb-[10px] flex justify-between items-center mt-[1.5rem]">
        <div className='text-[1.5rem] font-semibold'>
          Wishlist
        </div>


        <Button className='flex flex-row items-center gap-[0.5rem] border-1 border-[#6B7280] rounded-[6px] px-[1.813rem] py-[0.938rem] bg-transparent'>
          <div>
            <img src="/bidding/listing/add-icon.svg" alt="add-icon" />
          </div>

          <div className='text-[#4B5563] text-[0.875rem]'>
            Create Wishlist
          </div>
        </Button>
      </div>

      <div className="flex justify-between gap-4 mt-4">
        <div className='flex items-center gap-2'>
          <div className='text-[0.875rem] text-[#9CA3AF]'>
            Sort by:
          </div>

          <Select
            defaultSelectedKeys={["date"]}
            variant="flat"
            color="default"
            disallowEmptySelection
            className="w-[4.5rem] bg-transparent focus:outline-none focus:ring-0"
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
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded cursor-pointer"
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

      <div>
        {whishlistItems.length > 0 ? (
          whishlistItems.map((item) => (
            <div
              key={item.id} // ✅ always add a key here
              className="flex flex-row justify-between items-start mt-4 border border-gray-200 backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] bg-white rounded-[6px] cursor-pointer" onClick={onOpen}
            >
              <div className="flex flex-row gap-[1rem]">
                <div className='pl-[0.5rem]'>
                  <img
                    src={item.imageUrl || "/bidding/whishlist/whishlist-1.png"}
                    alt="whishlist-1"
                    className="h-full w-[6.875rem] object-cover"
                  />
                </div>

                <div className="py-[1rem]">
                  <div>
                    <div className="flex flex-row items-center gap-[0.75rem]">
                      <div className="text-[0.75rem] text-[#9CA3AF]">
                        {item.yearRange || "2020 - 2022"}
                      </div>

                      <div className="rounded-[4px] text-[0.75rem] text-[#111928] px-[0.5rem] py-[2px] shadow-[0px_6px_4.9px_0px_rgba(0,0,0,0.04),0px_1px_0px_0px_rgba(0,0,0,0.12)] bg-[#F3F4F6]">
                        {item.condition || "Like New"}
                      </div>

                      <div>
                        <img
                          src="/bidding/whishlist/a-icon.svg"
                          alt="great-deal-badge"
                        />
                      </div>
                    </div>

                    <div className="text-[1.125rem] mt-[2px] text-[#111928]">
                      {item.title || "Calatrava White Gold Watch"}
                    </div>

                    <div className="text-[0.875rem] text-[#9CA3AF] mt-[4px]">
                      Ref #: {item.reference || "412515621"}
                    </div>

                    <div className="mt-[4px] font-medium text-[#111928]">
                      Max Offer: {item.maxOffer || "$8,999"}
                    </div>

                    <div className="text-[0.875rem] flex flex-row items-center mt-[10px] gap-[0.5rem]">
                      <div>Original box</div>
                      <div className="w-[5px] h-[5px] rounded-full bg-[#9CA3AF]"></div>
                      <div>Original papers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[1rem] mt-[1rem] mr-[1rem]">
                <div className='cursor-pointer'>
                  <img src="/bidding/whishlist/gray-edit.svg" alt="edit" />
                </div>
                <div className='cursor-pointer'>
                  <img src="/bidding/whishlist/gray-delete.svg" alt="delete" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mt-4 text-gray-500">No items in wishlist</div>
        )}
      </div>


      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center" hideCloseButton classNames={{
        backdrop: "bg-black/80 backdrop-opacity-80",
        closeButton: "hover:bg-white/5 active:bg-white/10",
      }}>
        <ModalContent className="w-[33.25rem] max-w-[90vw] rounded-[0.5rem]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row justify-between items-center gap-1 !bg-[#FFFFFF59] py-[14px] px-[1.5rem]">
                <div>Create Wishlist</div>

                <div className='cursor-pointer' onClick={onClose}>
                  <img src="/close-icon.svg" alt="steps" />
                </div>
              </ModalHeader>

              <ModalBody className='px-0 py-0 bg-gray-100'>
                <div className='p-[1.5rem] w-full'>
                  <div className='text-[#333333] text-[0.875rem] mb-[1rem]'>
                    Set series alerts and auto-purchase for specific watches
                  </div>

                  <div className='flex flex-row gap-[0.5rem]'>
                    <Select
                      className="max-w-xs bg-white rounded-[10px]"
                      placeholder="Brand"
                      variant="bordered"
                      radius='sm'
                    >
                      <SelectItem key='1'>
                        Rolex
                      </SelectItem>
                    </Select>

                    <Select
                      className="max-w-xs bg-white rounded-[10px]"
                      placeholder="Model"
                      variant="bordered"
                      radius='sm'
                    >
                      <SelectItem key='1'>
                        GT
                      </SelectItem>
                    </Select>
                  </div>

                  <div className='mt-[0.5rem]'>
                    <Input
                      endContent={
                        <img src="/bidding/whishlist/info-icon.svg" alt="info-icon" />
                      }
                      labelPlacement="outside"
                      placeholder="Reference Number"
                      variant='bordered'
                      radius='sm'
                      className='bg-white rounded-[10px]'
                    />
                  </div>

                  <div className='my-[0.5rem] text-[0.875rem] text-[#333333]'>
                    Optional
                  </div>

                  <div className='flex flex-row gap-[0.5rem]'>
                    <Select
                      className="max-w-xs bg-white rounded-[10px]"
                      placeholder="Year Range"
                      variant="bordered"
                      radius='sm'
                    >
                      <SelectItem key='1'>
                        2020 - 2022
                      </SelectItem>
                    </Select>

                    <div className='flex flex-row gap-[0.25rem]'>
                      <Input
                        labelPlacement="outside"
                        placeholder="From"
                        variant='bordered'
                        radius='sm'
                        className='bg-white rounded-[10px]'
                      />

                      <Input
                        labelPlacement="outside"
                        placeholder="To"
                        variant='bordered'
                        radius='sm'
                        className='bg-white rounded-[10px]'
                      />
                    </div>
                  </div>

                  <div className='my-[0.5rem] text-[0.875rem] text-[#333333]'>
                    Max Price
                  </div>

                  <div className='mt-[0.5rem]'>
                    <Input
                      endContent={
                        <div className='text-[#6B7280] text-[0.875rem]'>USD</div>
                      }
                      labelPlacement="outside"
                      placeholder="0,000"
                      variant='bordered'
                      radius='sm'
                      className='bg-white rounded-[10px]'
                    />
                  </div>

                  <div className='flex flex-row gap-[0.5rem] mt-[0.5rem]'>
                    <Select
                      className="max-w-xs bg-white rounded-[10px]"
                      placeholder="Condition"
                      variant="bordered"
                      radius='sm'
                    >
                      <SelectItem key='1'>
                        Good
                      </SelectItem>
                    </Select>

                    <Select
                      className="max-w-xs bg-white rounded-[10px]"
                      placeholder="Box & Papers"
                      variant="bordered"
                      radius='sm'
                    >
                      <SelectItem key='1'>
                        Box only
                      </SelectItem>
                      <SelectItem key='2'>
                        Box and papers
                      </SelectItem>
                    </Select>
                  </div>

                  <div className='flex flex-col gap-[0.5rem] mt-[0.5rem]'>
                    <div className='border border-[#E5E7EB] bg-white rounded-[6px] px-[1rem] py-[0.75rem]'>
                      <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-[1rem]'>
                          <div>
                            <img src="/bidding/whishlist/auto-purchase.svg" alt="plus-icon" />
                          </div>

                          <div>
                            <div className='text-[0.875rem] text-[#111928] font-semibold'>
                              Auto-Purchase
                            </div>

                            <div className='text-[0.75rem] text-[#4B5563]'>
                              Automatically purchase when match is found
                            </div>
                          </div>
                        </div>

                        <div>
                          <img src="/bidding/whishlist/info-icon.svg" alt="info" />
                        </div>

                        <div>
                          <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                          </Switch>
                        </div>
                      </div>
                    </div>

                    <div className='border border-[#E5E7EB] bg-white rounded-[6px] px-[1rem] py-[0.75rem]'>
                      <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-[1rem]'>
                          <div>
                            <img src="/bidding/whishlist/broadcast.svg" alt="plus-icon" />
                          </div>

                          <div>
                            <div className='text-[0.875rem] text-[#111928] font-semibold'>
                              Broadcast to Grey Dealers
                            </div>

                            <div className='text-[0.75rem] text-[#4B5563]'>
                              Alert <strong>grey dealers</strong> if they have this watch
                            </div>
                          </div>
                        </div>

                        <div>
                          <img src="/bidding/whishlist/info-icon.svg" alt="info" />
                        </div>

                        <div>
                          <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                          </Switch>
                        </div>
                      </div>
                    </div>

                    <div className='border border-[#E5E7EB] bg-white rounded-[6px] px-[1rem] py-[0.75rem]'>
                      <div className='flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center gap-[1rem]'>
                          <div>
                            <img src="/bidding/whishlist/broadcast.svg" alt="plus-icon" />
                          </div>

                          <div>
                            <div className='text-[0.875rem] text-[#111928] font-semibold'>
                              Broadcast to Grey Dealers
                            </div>

                            <div className='text-[0.75rem] text-[#4B5563]'>
                              Alert <strong>grey dealers</strong> if they have this watch
                            </div>
                          </div>
                        </div>

                        <div>
                          <Select
                            className="w-[6rem] bg-white rounded-[10px]"
                            placeholder="Email"
                            variant="bordered"
                            radius='sm'
                          >
                            <SelectItem key='1'>
                              info@mail.com
                            </SelectItem>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>

              <ModalFooter className='bg-gray-100'>
                <div className='flex flex-row items-end justify-end gap-[0.5rem] w-full'>
                  <Button onPress={onClose} className='border border-[#E5E7EB] rounded-[6px] py-[0.719rem] text-[0.875rem] font-semibold text-black bg-white w-[9.375rem]'>
                    Cancel
                  </Button>

                  <Button onPress={onClose} className='border border-[#E5E7EB] rounded-[6px] py-[0.719rem] text-[0.875rem] font-semibold text-white bg-black w-[9.375rem]'>
                    Create
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
