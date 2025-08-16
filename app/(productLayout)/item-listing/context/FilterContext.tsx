"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for our filters
interface Filters {
  priceRange: [number, number];
  yearRange: [number, number];
  conditions: string[];
  dealRatings: string[];
  searchQuery: string;
  sortBy: string;
}

// Define types for products
interface Product {
  id: number;
  image: string;
  model: string;
  brand: string;
  price: string;
  dealStatus: string;
  dealColor: string;
  seller: string;
  condition: string;
}

// Define the context value type
interface FilterContextType {
  filters: Filters;
  updateFilters: (newFilters: Partial<Filters>) => void;
  sidebarVisible: boolean;
  toggleSidebar: () => void;
  clearFilters: () => void;
  applyFilters: () => Promise<void>;
  products: Product[];
  loading: boolean;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider');
  }
  return context;
};

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [120, 300],
    yearRange: [2000, 2025],
    conditions: [],
    dealRatings: [],
    searchQuery: '',
    sortBy: 'New Arrivals'
  });

  const [sidebarVisible, setSidebarVisible] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const updateFilters = (newFilters: Partial<Filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const toggleSidebar = () => {
    setSidebarVisible(prev => !prev);
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [120, 300],
      yearRange: [2000, 2025],
      conditions: [],
      dealRatings: [],
      searchQuery: '',
      sortBy: 'New Arrivals'
    });
  };

  const applyFilters = async (): Promise<void> => {
    setLoading(true);
    try {
      // Here you would typically make an API call with the current filters
      // For now, we'll simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock API response - replace with actual API call
      const mockProducts: Product[] = [
        {
          id: 1,
          image: "/watchLanding/recommend-1.png",
          model: "2023 Model",
          brand: "Patek Philippe Nautilus",
          price: "$12,999",
          dealStatus: "Great Deal",
          dealColor: "bg-[#057A55]",
          seller: "LUX Store",
          condition: "Like New"
        },
        // Add more mock products as needed
      ];
      
      setProducts(mockProducts);
    } catch (error) {
      console.error('Error applying filters:', error);
    } finally {
      setLoading(false);
    }
  };

  const value: FilterContextType = {
    filters,
    updateFilters,
    sidebarVisible,
    toggleSidebar,
    clearFilters,
    applyFilters,
    products,
    loading
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};
