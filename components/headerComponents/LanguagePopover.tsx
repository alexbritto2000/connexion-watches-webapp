"use client";
import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/react";

export default function LanguagePopover() {
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
          "py-2 px-2 border border-gray-200 rounded-lg shadow-lg text-[#1C1F25]",
          "bg-white",
          "min-w-[120px]",
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
          EN
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
        <div className="space-y-1">
          <a href="#" className="block px-3 py-1 rounded-md hover:bg-gray-50 transition-colors hover:text-[#057A55] text-sm">
            Tamil
          </a>

          <a href="#" className="block px-3 py-1 rounded-md hover:bg-gray-50 transition-colors hover:text-[#057A55] text-sm">
            Japanese
          </a>
        </div>
      </PopoverContent>
    </Popover>
  );
}
