"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RecommendedForYou = () => {
    const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});
    const [bookmarks, setBookmarks] = useState<{ [key: number]: boolean }>({});

    const handleFavoriteClick = (watchId: number) => {
        setFavorites(prev => ({
            ...prev,
            [watchId]: !prev[watchId]
        }));
    };

    const handleBookmarkClick = (watchId: number) => {
        setBookmarks(prev => ({
            ...prev,
            [watchId]: !prev[watchId]
        }));
    };
    const recommendedWatches = [
        {
            id: 1,
            image: "watchLanding/recommend-1.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "Great Deal",
            dealColor: "bg-[#057A55]",
            seller: "LUX Store",
            condition: "Like New"
        },
        {
            id: 2,
            image: "watchLanding/recommend-2.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "Good deal",
            dealColor: "bg-[#31C48D]",
            seller: "LUX Store",
            condition: "Like New"
        },
        {
            id: 3,
            image: "watchLanding/recommend-3.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "Fair deal",
            dealColor: "bg-[#E3A008]",
            seller: "LUX Store",
            condition: "Like New"
        },
        {
            id: 4,
            image: "watchLanding/recommend-4.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "High priced",
            dealColor: "bg-[#F05252]",
            seller: "LUX Store",
            condition: "Like New"
        },
        {
            id: 5,
            image: "watchLanding/recommend-5.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "Uncertain",
            dealColor: "bg-[#9CA3AF]",
            seller: "LUX Store",
            condition: "Like New"
        },
        {
            id: 6,
            image: "watchLanding/recommend-6.png",
            model: "2023 Model",
            brand: "Patek Philippe Nautilus",
            price: "$12,999",
            dealStatus: "Fair deal",
            dealColor: "bg-[#E3A008]",
            seller: "LUX Store",
            condition: "Like New"
        }
    ];

    return (
        <div className="bg-[#EBF0F2] py-[3.25rem] px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-[1.5rem]">
                    <h2 className="text-[1.25rem] font-bold text-black">
                        Recommended For You
                    </h2>
                    <a href="#" className="text-[#6B7280] text-sm hover:text-black transition-colors">
                        View all &gt;
                    </a>
                </div>

                <div className="flex gap-4 flex-row flex-wrap pb-4">
                    {recommendedWatches.map((watch) => (
                        <div
                            key={watch.id}
                            className="flex-shrink-0 w-[12.5rem] bg-white rounded-lg shadow-md border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-200"
                        >
                            {/* Card Header with Condition Tag and Icons */}
                            <div className="relative p-[1rem]">
                                <div className="">
                                    <span className="bg-[#E5E7EB] text-[#111928] text-[0.75rem] px-2 py-1 rounded-[3px] rounded-tl-[6px]">
                                        {watch.condition}
                                    </span>
                                </div>

                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        onClick={() => handleFavoriteClick(watch.id)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src="watchLanding/heart.svg"
                                            alt="Heart"
                                            className={`w-4 h-4 transition-colors ${favorites[watch.id] ? 'opacity-100' : 'opacity-60'}`}
                                        />
                                    </motion.div>
                                    <motion.div
                                        whileTap={{ scale: 0.8 }}
                                        transition={{ duration: 0.1 }}
                                        onClick={() => handleBookmarkClick(watch.id)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src="watchLanding/bookmark.svg"
                                            alt="Bookmark"
                                            className={`w-4 h-4 transition-colors ${bookmarks[watch.id] ? 'opacity-100' : 'opacity-60'}`}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Watch Image */}
                            <div className="px-4 pb-4">
                                <div className="w-full h-[11.5rem] bg-[#EBF0F2] rounded-lg flex items-center justify-center">
                                    <img
                                        src={watch.image}
                                        alt={watch.brand}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>

                            {/* Watch Details */}
                            <div className="px-4 pb-4">
                                <p className="text-[#9CA3AF] text-[0.75rem] mb-2">
                                    {watch.model}
                                </p>

                                <h3 className="text-[#111928] text-[0.875rem] mb-2">
                                    {watch.brand}
                                </h3>

                                <div className='flex flex-row items-center gap-1'>
                                    <p className="text-black font-bold text-lg mb-3">
                                        {watch.price}
                                    </p>

                                    {/* Deal Status */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span className={`px-2 py-[2px] rounded text-[0.75rem] text-white font-medium ${watch.dealColor}`}>
                                            {watch.dealStatus}
                                        </span>
                                    </div>
                                </div>


                                {/* Seller Info */}
                                <div className="flex items-center gap-2">
                                    <img src='watchLanding/lux-store.png' />

                                    <div className='flex flex-row items-center gap-1 pb-[1px]'>
                                        <span className="text-[#2F3033] text-[0.75rem] font-semibold">
                                            {watch.seller}
                                        </span>

                                        <div className='flex flex-row items-center'>
                                            <img src='review-left.svg' />
                                            <span className="text-[#2F3033] text-[0.75rem] font-semibold">
                                                88
                                            </span>
                                            <img src='review-right.svg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendedForYou;
