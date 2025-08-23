import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ProductInfo = (product: any) => {
    console.log("product details", product)

    const [activeTab, setActiveTab] = useState('product-info')

    const tabs = [
        { key: 'product-info', title: 'Product Information' },
        { key: 'master-data', title: 'Market Data' },
        { key: 'seller-info', title: 'Seller Info' }
    ]

    return (
        <div>
            <div className="flex flex-wrap">
                {/* Custom Tab Navigation */}
                <div className="flex border-b border-[#E5E7EB] w-full">
                    {tabs.map((tab) => (
                        <div key={tab.key} className="relative">
                            <button
                                onClick={() => setActiveTab(tab.key)}
                                className={`text-[0.875rem] font-medium transition-colors duration-200 px-[1rem] py-[0.75rem] cursor-pointer ${activeTab === tab.key
                                    ? 'text-black'
                                    : 'text-[#9CA3AF] hover:text-black'
                                    }`}
                            >
                                {tab.title}
                            </button>

                            {/* Active Tab Underline */}
                            {activeTab === tab.key && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="w-full mt-[2rem]">
                    <div className='text-[1.25rem] text-[#333333]'>
                        Description
                    </div>

                    <div className='text-[0.875rem] text-[#4B5563] mt-4 leading-[1.6]'>
                        Ref. 126300 is the simplest version of the Datejust 41. With a classic smooth steel bezel, it can fly under the radar more easily than variants with fluted bezels. The bracelet and case are made of Oystersteel, Rolex’s brand name for their 904L stainless steel. The Datejust 41 is offered in a variety of dial colors, and it remains one of the most consistently popular men’s Rolex watches. Its caliber 3235 movement guarantees accuracy within 2 seconds per day, with 70 hours of power reserve.
                    </div>

                    <>
                        <div className='text-[1.25rem] text-[#333333] mt-[2rem] mb-[0.5rem]'>
                            Watch Details
                        </div>

                        {/* Watch Details Grid */}
                        <div className="grid grid-cols-4 gap-[0.5rem]">
                            {/* Column 1 */}
                            <div className="space-y-[0.5rem]">
                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Price:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        $70,000
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Brand:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Patek Philippe
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] text-[0.875rem] font-medium">Strap:</span>
                                    <span className="text-[#6B7280] text-[0.875rem] mt-1">Stainless Steel Bracelet</span>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-[0.5rem]">
                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Year:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Like New
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Style:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Luxury
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Box & Papers:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Included
                                    </span>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-[0.5rem]">
                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Condition:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Like New
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Case Material:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Stainless Steel
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Warranty:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        5-Year Manufacturer Warranty
                                    </span>
                                </div>
                            </div>

                            {/* Column 4 */}
                            <div className="space-y-[0.5rem]">
                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Deal Rating:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Great Deal
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Movement Type:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Automatic
                                    </span>
                                </div>

                                <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                                    <span className="text-[#333333] font-medium">
                                        Trust Score:
                                    </span>
                                    <span className="text-[#6B7280]">
                                        Verified Seller 88/100
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                {/* <div className="w-full mt-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="min-h-[200px]"
                        >
                            {activeTab === 'product-info' && (
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-3">Product Information</h3>
                                    <p className="text-gray-600">Product details content goes here...</p>
                                </div>
                            )}
                            
                            {activeTab === 'master-data' && (
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-3">Market Data</h3>
                                    <p className="text-gray-600">Market data content goes here...</p>
                                </div>
                            )}
                            
                            {activeTab === 'seller-info' && (
                                <div className="p-4 bg-gray-50 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-3">Seller Info</h3>
                                    <p className="text-gray-600">Seller information content goes here...</p>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div> */}
            </div>
        </div>
    )
}

export default ProductInfo