import React from 'react'

const Page = () => {
  return (
    <div className="bg-[#EBF0F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Product Title */}
        <h1 className="text-3xl font-bold text-black mb-8">Patek Philippe Nautilus</h1>
        
        {/* Header Controls */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Left side - Filters */}
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Show filters
              </button>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Selected filters:</span>
                <span className="text-gray-400">No filter selected</span>
              </div>
            </div>
            
            {/* Right side - Sort, Count, Search */}
            <div className="flex items-center gap-6">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Sort by:</span>
                <button className="flex items-center gap-2 text-black font-medium hover:text-gray-700">
                  New Arrivals
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Product Count */}
              <div className="text-gray-600">
                Showing 1 - 12 out of 2,356 Products
              </div>
              
              {/* Search */}
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        
        {/* Placeholder for product grid */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-500 text-center py-12">Product grid will be displayed here</p>
        </div>
      </div>
    </div>
  )
}

export default Page