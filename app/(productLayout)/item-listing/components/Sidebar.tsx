"use client";
import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../context/FilterContext';

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
        <h3 className="font-semibold text-gray-900 mb-3">Price</h3>
        <div className="mb-2">
          <span className="text-sm text-gray-500">Range</span>
          <div className="text-sm font-medium">${priceRange[0]} - ${priceRange[1]}</div>
        </div>
        <div className="relative">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange([parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
          />
        </div>
      </div>

      {/* Year Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Year</h3>
        <div className="mb-2">
          <span className="text-sm text-gray-500">Range</span>
          <div className="text-sm font-medium">{yearRange[0]} - {yearRange[1]}</div>
        </div>
        <div className="relative">
          <input
            type="range"
            min="1900"
            max="2025"
            value={yearRange[0]}
            onChange={(e) => handleYearChange([parseInt(e.target.value), yearRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="1900"
            max="2025"
            value={yearRange[1]}
            onChange={(e) => handleYearChange([yearRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
          />
        </div>
      </div>

      {/* Condition Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Condition</h3>
        <div className="space-y-2">
          {['Like New', 'Excellent', 'Good', 'Fair'].map((condition) => (
            <label key={condition} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.conditions?.includes(condition) || false}
                onChange={() => handleConditionChange(condition)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Deal Rating Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Deal rating</h3>
        <div className="space-y-2">
          {['Great Deal', 'Good Deal', 'Fair Deal', 'High Priced', 'Uncertain'].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.dealRatings?.includes(rating) || false}
                onChange={() => handleDealRatingChange(rating)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">{rating}</span>
            </label>
          ))}
        </div>
        <div className="text-sm text-gray-500 mt-2">+ 234 more</div>
      </div>
    </div>
  );
};

export default Sidebar;
