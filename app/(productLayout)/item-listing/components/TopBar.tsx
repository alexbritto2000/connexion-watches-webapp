"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useFilterContext } from '../context/FilterContext';

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
          <div className="flex items-center gap-2 relative" ref={sortDropdownRef}>
            <span className="text-[#9CA3AF] text-[0.82rem]">
              Sort by:
            </span>
            
            <button
              className="flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors"
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
            >
              {sortBy}
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isSortDropdownOpen ? 'rotate-180' : ''}`} 
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
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        option === sortBy ? 'text-black bg-[#EBF0F2] font-medium' : 'text-gray-700'
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
          <div className="text-gray-600">
            Showing {currentRange} out of {productCount} Products
          </div>
        </div>
      </div>


      <br />
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left side - Filters */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onShowFilters}
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            {sidebarVisible ? 'Hide filters' : 'Show filters'}
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Selected filters:</span>
            <span className="text-gray-400">
              {getSelectedFiltersText(filters)}
            </span>
            {getSelectedFiltersText(filters) !== 'No filter selected' && (
              <button
                onClick={clearFilters}
                className="ml-2 text-xs text-red-600 hover:text-red-800 underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
        
        {/* Right side - Sort, Count, Search */}
        <div className="flex items-center gap-6">
          
          {/* Search */}  
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="bg-gray-100 px-3 py-2 rounded-r-md border border-l-0 border-gray-300 hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
