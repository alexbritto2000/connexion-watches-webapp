"use client";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

export default function MarketTrendsPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      showArrow
      backdrop="opaque"
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
          Market Trends
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
          {/* <h3 className="text-lg font-bold text-gray-900 mb-4">Market Analysis</h3> */}
          
          <div className="space-y-3">
            <a href="/market-trends/price-index" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Price Index" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Price Index
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Track market prices and trends over time
                  </p>
                </div>
              </div>
            </a>

            <a href="/market-trends/brand-performance" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Brand Performance" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    Brand Performance
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare watch brand market performance
                  </p>
                </div>
              </div>
            </a>

            <a href="/market-trends/seasonal-trends" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Seasonal Trends" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    Seasonal Trends
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Understand seasonal market fluctuations
                  </p>
                </div>
              </div>
            </a>

            <a href="/market-trends/investment-guide" className="block p-4 rounded-lg hover:bg-gray-50 transition-colors group">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <img src="/header/watch.svg" alt="Investment Guide" className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    Investment Guide
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Expert advice on watch investments
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
