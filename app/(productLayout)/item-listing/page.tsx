"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TopBar from "./components/TopBar";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import { FilterProvider, useFilterContext } from "./context/FilterContext";
import CustomPagination from "../../../components/CustomPagination";

const PageContent = () => {
  const router = useRouter();
  const { filters, sidebarVisible, toggleSidebar, products: _products, loading } =
    useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Assuming 12 items per page

  const handleSearch = (query: string) => {
    // This will be handled by the context
    // Search functionality can be implemented here
  };

  const handleHideFilters = () => {
    toggleSidebar();
  };

  const handleShowFilters = () => {
    toggleSidebar();
  };

  const handleProductClick = (product: any) => {
    // Navigate to product detail page
    router.push(`/item-listing/${product.id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You can also trigger API calls here to fetch data for the new page
  };

  return (
    <div className="bg-[#EBF0F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Bar with Controls */}
        <TopBar
          productCount="2,356"
          currentRange="1 - 12"
          sortBy={filters.sortBy}
          onSearch={handleSearch}
          onShowFilters={handleShowFilters}
          sidebarVisible={sidebarVisible}
        />

        {/* Main Content Area */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar
            onHideFilters={handleHideFilters}
            isVisible={sidebarVisible}
          />

          {/* Product Grid */}
          <ProductGrid onProductClick={handleProductClick} />
        </div>

        <div className="mt-[2.875rem] flex justify-center">
          <CustomPagination
            currentPage={currentPage}
            totalItems={2356}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
          </div>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <FilterProvider>
      <PageContent />
    </FilterProvider>
  );
};

export default Page;
