"use client";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

export default function SellPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      showArrow
      backdrop="transparent"
      placement="bottom"
      classNames={{
        base: ["before:bg-default-200"],
        content: [
          "py-6 px-6 border border-gray-200 rounded-xl shadow-lg text-[#1C1F25]",
          "bg-white",
          "min-w-[400px]",
        ],
      }}
    >
      <PopoverTrigger>
        <a
          href="#"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="text-[1rem] font-normal py-3 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative flex items-center gap-2"
        >
          Sell
          <img
            src="/header/dropdown.svg"
            alt="dropdown"
            className={`w-3 h-3 transition-transform duration-300 ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
          />
        </a>
      </PopoverTrigger>

      <PopoverContent
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="space-y-4">
          {/* <h3 className="text-lg font-bold text-gray-900 mb-4">Sell Your Watch</h3> */}
          
          <div className="space-y-3">
            <a href="/sell/consignment" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Consignment" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Consignment
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Let us sell your watch on your behalf
                  </p>
                </div>
              </div>
            </a>

            <a href="/sell/direct-sale" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Direct Sale" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Direct Sale
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Sell directly to us for immediate payment
                  </p>
                </div>
              </div>
            </a>

            <a href="/sell/valuation" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Valuation" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Get Valuation
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Professional appraisal of your timepiece
                  </p>
                </div>
              </div>
            </a>

            <a href="/sell/process" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Process" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Selling Process
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Step-by-step guide to selling your watch
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
