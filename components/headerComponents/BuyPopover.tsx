"use client";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

export default function BuyPopover() {
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
          Buy
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
          {/* <h3 className="text-lg font-bold text-gray-900 mb-4">Browse Watches</h3> */}
          
          <div className="space-y-3">
            <a href="/buy/luxury" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Luxury" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Luxury Watches
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Premium timepieces from renowned brands
                  </p>
                </div>
              </div>
            </a>

            <a href="/buy/sport" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Sport" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Sport Watches
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    High-performance watches for active lifestyles
                  </p>
                </div>
              </div>
            </a>

            <a href="/buy/vintage" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Vintage" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Vintage Watches
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Classic timepieces with historical significance
                  </p>
                </div>
              </div>
            </a>

            <a href="/buy/limited-edition" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Limited" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Limited Edition
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Exclusive and rare collector's pieces
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
