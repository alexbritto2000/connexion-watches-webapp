import React from 'react'

const ExploreMarketPlace = () => {
    const marketplaceData = [
        {
            title: "Watches",
            image: "/marketplace/explore-marketplace-1.jpg",
            alt: "Watches"
        },
        {
            title: "Jewelry",
            image: "/marketplace/explore-marketplace-2.jpg",
            alt: "Jewelry"
        },
        {
            title: "Trading Cards",
            image: "/marketplace/explore-marketplace-3.jpg",
            alt: "Trading Cards"
        },
        {
            title: "Coins",
            image: "/marketplace/explore-marketplace-4.jpg",
            alt: "Coins"
        }
    ];

    return (
        <section className="bg-[#EBF0F2] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className='font-medium text-[1.25rem] text-black mb-8'>
                    Explore the marketplaces
                </div>

                {/* Marketplace Cards */}
                <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {marketplaceData.map((item, index) => (
                        <div key={index}>
                            {/* Marketplace Card */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="relative h-[23.125rem] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="py-[2rem] items-center flex justify-center">
                                    <h3 className="text-[1.25rem] text-[#1F2A37]">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExploreMarketPlace