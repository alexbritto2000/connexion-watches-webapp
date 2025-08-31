'use client'; 
import { Input } from '@heroui/input'
import { Select, SelectItem } from '@heroui/react';
import React, { useState } from 'react'
import ReactCountryFlag from "react-country-flag";
import { RadioGroup, Radio } from "@heroui/react";

const countries = [
  { code: "FR", name: "France", dial: "+33" },
  { code: "IN", name: "India", dial: "+91" },
  { code: "US", name: "United States", dial: "+1" },
  { code: "DE", name: "Germany", dial: "+49" },
  // ➝ add more countries as needed
];

const BuyComponent = () => {
  const [country, setCountry] = useState("FR"); // default France
  // ✅ state must be Set<string>
  const [selected, setSelected] = useState<Set<string>>(new Set(["IN"]));
  const [billingAddress, setBillingAddress] = React.useState("same");

  //const [country, setCountry] = useState(options.find((o) => o.value === "FR"));

  return (
    <div className="text-black flex justify-center w-full">
      <div className='flex flex-row w-full'>
        <div className='w-[50%] bg-white pr-[4.375rem] px-4 py-[4.375rem] flex justify-end'>
          <div className='max-w-[720px]'>
            <div>
              <div className='text-[#333333] text-[0.9rem] font-semibold mb-[1.25rem]'>
                Billing address
              </div>

              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                {/* First Name */}
                <Input
                  className="w-full"
                  label="First Name"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: [
                      "text-[#6B7280]",
                      "data-[shrink=true]:text-[#6B7280]!", // Add !important
                    ],   
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />

                {/* Last Name */}
                <Input
                  className="w-full"
                  label="Last Name"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: "text-[#6B7280]",
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />

                <div className="flex w-full items-center space-x-2">
                  {/* Country Dropdown */}
                  <Select
                  className='w-fit'
                    selectedKeys={selected}
                    onSelectionChange={(keys) => setSelected(keys as Set<string>)} // ✅ correct type
                    variant="bordered"
                    classNames={{
                      trigger: [
                        "border-[#E5E7EB]",
                        "h-[3.4rem]",
                        "rounded-[6px]",
                        "data-[focus=true]:border-[#E5E7EB]",
                      ],
                    }}
                    renderValue={() => {
                      const item = countries.find((c) => c.code === Array.from(selected)[0]);
                      return item ? (
                        <div className="flex items-center gap-2">
                          <ReactCountryFlag
                            countryCode={item.code}
                            svg
                            style={{ width: "2.25em", height: "2.25em" }}
                          />
                          <span>{item.dial}</span>
                        </div>
                      ) : null;
                    }}
                  >
                    {countries.map((country) => (
                      <SelectItem key={country.code}>
                        <div className="flex items-center gap-2">
                          <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{ width: "1.25em", height: "1.25em" }}
                          />
                          {/* <span>
                            {country.dial}
                          </span> */}
                        </div>
                      </SelectItem>
                    ))}
                  </Select>

                  {/* Phone Number Input */}
                  <Input
                    className="w-full"
                    label="Phone number"
                    type="tel"
                    variant="bordered"
                    classNames={{
                      input: "text-[#6B7280]",
                      label: [
                        "text-[#6B7280]",
                        "data-[shrink=true]:text-[#6B7280]!",
                      ],
                      inputWrapper: [
                        "border-[#E5E7EB]",
                        "rounded-[6px]",
                        "data-[focus=true]:border-[#E5E7EB]",
                      ],
                    }}
                  />
                </div>

                {/* Street */}
                <Input
                  className="w-full"
                  label="Street"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: "text-[#6B7280]",
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />

                {/* Street 2 */}
                <Input
                  className="w-full"
                  label="Street 2"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: "text-[#6B7280]",
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />

                <div className="flex w-full items-center space-x-2">
                  <div className='flex flex-1'>
                    {/* City */}
                    <Input
                      className="w-full"
                      label="City"
                      type="text"
                      variant="bordered"
                      classNames={{
                        input: "text-[#6B7280]", // Text color
                        label: "text-[#6B7280]",
                        inputWrapper: [
                          "border-[#E5E7EB]",
                          "rounded-[6px]",
                          "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                        ],
                      }}
                    />
                  </div>

                  <div className='w-[8.125rem]'>
                    {/* ZIP */}
                    <Input
                      className="w-full"
                      label="ZIP"
                      type="text"
                      variant="bordered"
                      classNames={{
                        input: "text-[#6B7280]", // Text color
                        label: "text-[#6B7280]",
                        inputWrapper: [
                          "border-[#E5E7EB]",
                          "rounded-[6px]",
                          "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                        ],
                      }}
                    />
                  </div>
                </div>

                {/* Country */}
                <Input
                  className="w-full"
                  label="Country"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: "text-[#6B7280]",
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />

                {/* State */}
                <Input
                  className="w-full"
                  label="State"
                  type="text"
                  variant="bordered"
                  classNames={{
                    input: "text-[#6B7280]", // Text color
                    label: "text-[#6B7280]",
                    inputWrapper: [
                      "border-[#E5E7EB]",
                      "rounded-[6px]",
                      "data-[focus=true]:border-[#E5E7EB]", // This targets the focus state
                    ],
                  }}
                />
              </div>

              <div className='text-[#333333] text-[0.9rem] font-semibold mb-[1.25rem] mt-[2rem]'>
                Shipping Address
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <RadioGroup value={billingAddress} onValueChange={setBillingAddress}>
                    <Radio value="same">Same as billing address</Radio>
                    <Radio value="different">Different shipping address</Radio>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[50%] bg-[#EBF0F2] pl-[4.375rem] px-4 py-[4.375rem]'>
          <div className='max-w-[720px]'>
            BuyComponent
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyComponent
