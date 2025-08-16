"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useFilterContext } from '../context/FilterContext';
import { Button } from '@heroui/button';

// Define the props interface
interface TopBarProps {
  productCount?: string;
  currentRange?: string;
  sortBy?: string;
  onSearch: (query: string) => void;
  onShowFilters: () => void;
  sidebarVisible: boolean;
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

const TopBar: React.FC<TopBarProps> = ({
  productCount = "2,356",
  currentRange = "1 - 12",
  sortBy = "New Arrivals",
  onSearch,
  onShowFilters,
  sidebarVisible
}) => {
  const { filters, clearFilters, updateFilters } = useFilterContext();
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Sort options
  const sortOptions = [
    'New Arrivals',
    'Price: Low to High',
    'Price: High to Low',
    'Year: Newest First',
    'Year: Oldest First',
    'Best Deals',
    'Most Popular'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSortOptionClick = (option: string) => {
    // Update the context filters directly
    updateFilters({ sortBy: option });
    setIsSortDropdownOpen(false);
  };

  return (
    <div className="pt-[0.5rem] mb-[1.5rem]">
      <div className='flex flex-row justify-between items-center w-full'>
        <div className='text-[1.25rem] font-medium text-black'>
          Patek Philippe Nautilus
        </div>

        <div className='flex flex-row items-center gap-[2.5rem]'>
          {/* Sort */}
          <div className="flex items-center gap-[0.5rem] relative" ref={sortDropdownRef}>
            <span className="text-[#9CA3AF] text-[0.82rem]">
              Sort by:
            </span>

            <button
              className="flex items-center gap-[0.5rem] text-[0.82rem] text-black hover:text-gray-700 transition-colors cursor-pointer"
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
            >
              {sortBy}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isSortDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      className={`w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${option === sortBy ? 'text-black bg-[#EBF0F2] font-medium' : 'text-gray-700'
                        }`}
                      onClick={() => handleSortOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Product Count */}
          <div className="text-black text-[0.82rem]">
            <span>
              Showing {currentRange}
            </span>

            <span className='text-[#9CA3AF] ml-[6px]'>
              out of {productCount} Products
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center mt-[1.25rem] gap-[1rem]'>
        <Button onClick={onShowFilters} className='bg-black text-white rounded-md'>
          {sidebarVisible ? 'Hide filters' : 'Show filters'}
        </Button>

        <div className='border border-[#E5E7EB] bg-white rounded-[6px] py-[0.75rem] px-[1rem] gap-[0.5rem] flex flex-row flex-1 items-center justify-between'>
          <div className='flex flex-row gap-[0.5rem]'>
            <div className='text-black text-[0.82rem]'>
              Selected filters:
            </div>

            <div className='text-[#9CA3AF] text-[0.82rem] italic'>
              {getSelectedFiltersText(filters)}
            </div>
          </div>

          {/* Close button - only show when filters are selected */}
          {getSelectedFiltersText(filters) !== 'No filter selected' && (
            <button
              onClick={clearFilters}
              className='text-[#9CA3AF] hover:text-black transition-colors cursor-pointer'
              title="Clear all filters"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className='border border-[#E5E7EB] bg-white rounded-[6px] p-[0.75rem] cursor-pointer hover:bg-gray-50'>
          <img src='search-icon.svg' alt='Search' />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
