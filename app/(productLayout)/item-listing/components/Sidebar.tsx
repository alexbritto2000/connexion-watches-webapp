"use client";
import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../context/FilterContext';
import { Slider, Checkbox } from '@heroui/react';
import { ChevronDownIcon } from '../../../../components/icons';

// Define the props interface
interface SidebarProps {
  onHideFilters: () => void;
  isVisible?: boolean;
}

// Helper function to generate selected filters text
const getSelectedFiltersText = (filters: any) => {
  const selectedFilters: string[] = [];

  // Check price range
  if (filters.priceRange && (filters.priceRange[0] !== 120 || filters.priceRange[1] !== 300)) {
    selectedFilters.push(`Price: $${filters.priceRange[0]} - $${filters.priceRange[1]}`);
  }

  // Check year range
  if (filters.yearRange && (filters.yearRange[0] !== 2000 || filters.yearRange[1] !== 2025)) {
    selectedFilters.push(`Year: ${filters.yearRange[0]} - ${filters.yearRange[1]}`);
  }

  // Check conditions
  if (filters.conditions && filters.conditions.length > 0) {
    selectedFilters.push(`Condition: ${filters.conditions.join(', ')}`);
  }

  // Check deal ratings
  if (filters.dealRatings && filters.dealRatings.length > 0) {
    selectedFilters.push(`Deal Rating: ${filters.dealRatings.join(', ')}`);
  }

  // Check search query
  if (filters.searchQuery && filters.searchQuery.trim() !== '') {
    selectedFilters.push(`Search: "${filters.searchQuery}"`);
  }

  return selectedFilters.length > 0 ? selectedFilters.join(' | ') : 'No filter selected';
};

const Sidebar: React.FC<SidebarProps> = ({
  onHideFilters,
  isVisible = true
}) => {
  const { filters, updateFilters } = useFilterContext();
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange || [120, 300]);
  const [yearRange, setYearRange] = useState<[number, number]>(filters.yearRange || [2000, 2025]);
  const [expandedSections, setExpandedSections] = useState<{
    price: boolean;
    year: boolean;
    condition: boolean;
    dealRating: boolean;
  }>({
    price: true,
    year: true,
    condition: true,
    dealRating: true
  });

  useEffect(() => {
    setPriceRange(filters.priceRange || [120, 300]);
    setYearRange(filters.yearRange || [2000, 2025]);
  }, [filters.priceRange, filters.yearRange]);

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
    updateFilters({ priceRange: newRange });
  };

  const handleYearChange = (newRange: [number, number]) => {
    setYearRange(newRange);
    updateFilters({ yearRange: newRange });
  };

  const handleConditionChange = (condition: string) => {
    const newConditions = filters.conditions?.includes(condition)
      ? filters.conditions.filter(c => c !== condition)
      : [...(filters.conditions || []), condition];

    updateFilters({ conditions: newConditions });
  };

  const handleDealRatingChange = (rating: string) => {
    const newRatings = filters.dealRatings?.includes(rating)
      ? filters.dealRatings.filter(r => r !== rating)
      : [...(filters.dealRatings || []), rating];

    updateFilters({ dealRatings: newRatings });
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="w-80 bg-white rounded-lg shadow-sm p-6 mr-6">
      {/* Hide Filters Button */}
      {/* <div className="mb-6">
        <button 
          onClick={onHideFilters}
          className="bg-black text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors w-full"
        >
          Hide filters
        </button>
      </div> */}

      {/* Selected Filters */}
      {/* <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Selected filters: {getSelectedFiltersText(filters)}
        </p>
      </div> */}

      {/* Price Filter */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer border-[#E5E7EB] border-b pb-[0.75rem]"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold text-black">
            Price
          </h3>

          <ChevronDownIcon
            size={20}
            className={`text-gray-500 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`}
          />
        </div>

        {expandedSections.price && (
          <div className="mt-[1rem] mb-[2rem]">
            <div className="mb-[1.625rem] flex items-center justify-between">
              <span className="text-sm text-[#4B5563]">
                Range
              </span>

              <div className="text-sm text-[#1F2A37]">
                ${priceRange[0]} - ${priceRange[1]}
              </div>
            </div>

            <Slider
              className="max-w-md"
              maxValue={1000}
              minValue={0}
              step={10}
              value={priceRange}
              onChange={(val) => {
                if (Array.isArray(val)) handlePriceChange(val as [number, number]);
              }}
              classNames={{
                track: "bg-[#E5E7EB] h-1",
                filler: "bg-black",
                thumb: "bg-black border-none w-3 h-3 rounded-full",
              }}
            />
          </div>
        )}
      </div>

      {/* Year Filter */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer border-[#E5E7EB] border-b pb-[0.75rem]"
          onClick={() => toggleSection('year')}
        >
          <h3 className="font-semibold text-black">
            Year
          </h3>

          <ChevronDownIcon
            size={20}
            className={`text-gray-500 transition-transform ${expandedSections.year ? 'rotate-180' : ''}`}
          />
        </div>

        {expandedSections.year && (
          <div className="mt-[1rem] mb-[2rem]">
            <div className="mb-[1.625rem] flex items-center justify-between">
              <span className="text-sm text-[#4B5563]">
                Range
              </span>

              <div className="text-sm text-[#1F2A37]">
                {yearRange[0]} - {yearRange[1]}
              </div>
            </div>

            <Slider
              className="max-w-md"
              maxValue={2025}
              minValue={1900}
              step={1}
              value={yearRange}
              onChange={(val) => {
                if (Array.isArray(val)) handleYearChange(val as [number, number]);
              }}
              classNames={{
                track: "bg-[#E5E7EB] h-1",
                filler: "bg-black",
                thumb: "bg-black border-none w-3 h-3 rounded-full",
              }}
            />
          </div>
        )}
      </div>

      {/* Condition Filter */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer border-[#E5E7EB] border-b pb-[0.75rem]"
          onClick={() => toggleSection('condition')}
        >
          <h3 className="font-semibold text-black">
            Condition
          </h3>

          <ChevronDownIcon
            size={20}
            className={`text-gray-500 transition-transform ${expandedSections.condition ? 'rotate-180' : ''}`}
          />
        </div>

        {expandedSections.condition && (
          <div className="mt-[1rem] mb-[2rem] flex flex-col gap-[0.75rem]">
            {['Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
              <Checkbox
                key={condition}
                 color="success"
                isSelected={filters.conditions?.includes(condition) || false}
                onValueChange={() => handleConditionChange(condition)}
                classNames={{
                  base: "items-center",
                  wrapper: "bg-white",
                  icon: "text-black"
                }}
              >
                <span className="ml-2 text-sm text-[#1F2A37]">{condition}</span>
              </Checkbox>
            ))}
          </div>
        )}
      </div>

      {/* Deal Rating Filter */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer border-[#E5E7EB] border-b pb-[0.75rem]"
          onClick={() => toggleSection('dealRating')}
        >
          <h3 className="font-semibold text-black">
            Deal rating
          </h3>

          <ChevronDownIcon
            size={20}
            className={`text-gray-500 transition-transform ${expandedSections.dealRating ? 'rotate-180' : ''}`}
          />
        </div>

        {expandedSections.dealRating && (
          <div className="mt-[1rem] mb-[2rem] flex flex-col gap-[0.75rem]">
            {['Great Deal', 'Good Deal', 'Fair Deal', 'High Priced', 'Uncertain'].map((rating) => (
              <Checkbox
                key={rating}
                color="success"
                isSelected={filters.dealRatings?.includes(rating) || false}
                onValueChange={() => handleDealRatingChange(rating)}
                classNames={{
                  base: "items-center",
                  wrapper: "bg-white",
                  icon: "text-black"
                }}
              >
                <span className="ml-2 text-sm text-[#1F2A37]">
                  {rating}
                </span>
              </Checkbox>
            ))}
            <div className="text-sm text-gray-500 mt-2">+ 234 more</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
