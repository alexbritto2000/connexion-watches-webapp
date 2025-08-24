import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { IoIosStarOutline } from "react-icons/io";
import { CiStar } from "react-icons/ci";

const ProductInfo = (product: any) => {
  console.log("product details", product);

  const [activeTab, setActiveTab] = useState("product-info");

  const tabs = [
    { key: "product-info", title: "Product Information" },
    { key: "master-data", title: "Market Data" },
    { key: "seller-info", title: "Seller Info" },
  ];

  const reviews = [
    {
      name: 'Mike Tyson',
      date: '10-Jan-25',
      review: 'The watch was exactly as described and arrived earlier than expected. Excellent communication and packaging. Highly recommended!',
      rating: 4
    },
    {
      name: 'John Doe',
      date: '10-Jan-25',
      review: 'Great experience overall, but the shipping took a bit longer than expected. The seller was responsive and helpful, though!',
      rating: 5
    },
    {
      name: 'Mike Tyson',
      date: '10-Jan-25',
      review: 'Good product, but there was a minor scratch not mentioned in the description. Still satisfied with the purchase.',
      rating: 5
    },
  ]

  const RatingStars = (data: any) => {
    console.log("rate", data.rating);

    return (
      <div className="flex items-center gap-[0.25rem]">
        {[...Array(5)].map((_, index) =>
          index < data.rating ? (
            <div>
              <img src="/productDetails/gold-star.svg" alt="gold-star" />
            </div>
          ) : (
            <div>
              <img src="/productDetails/gray-star.svg" alt="gray-star" />
            </div>
          ),
        )}
        <div className="text-[#264F75] font-semibold pt-[2px]">
          {data.rating}/5
        </div>
      </div>
    );
  };

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
                  ? "text-black"
                  : "text-[#9CA3AF] hover:text-black"
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
        {activeTab == 'product-info' &&
          <div className="w-full mt-[2rem]">
            <div className="text-[1.25rem] text-[#333333]">Description</div>

            <div className="text-[0.875rem] text-[#4B5563] mt-4 leading-[1.6]">
              Ref. 126300 is the simplest version of the Datejust 41. With a
              classic smooth steel bezel, it can fly under the radar more easily
              than variants with fluted bezels. The bracelet and case are made of
              Oystersteel, Rolex’s brand name for their 904L stainless steel. The
              Datejust 41 is offered in a variety of dial colors, and it remains
              one of the most consistently popular men’s Rolex watches. Its
              caliber 3235 movement guarantees accuracy within 2 seconds per day,
              with 70 hours of power reserve.
            </div>

            <>
              <div className="text-[1.25rem] text-[#333333] mt-[2rem] mb-[0.5rem]">
                Watch Details
              </div>

              {/* Watch Details Grid */}
              <div className="grid grid-cols-4 gap-[0.5rem]">
                {/* Column 1 */}
                <div className="space-y-[0.5rem]">
                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Price:</span>
                    <span className="text-[#6B7280]">$70,000</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Brand:</span>
                    <span className="text-[#6B7280]">Patek Philippe</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] text-[0.875rem] font-medium">
                      Strap:
                    </span>
                    <span className="text-[#6B7280] text-[0.875rem] mt-1">
                      Stainless Steel Bracelet
                    </span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-[0.5rem]">
                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Year:</span>
                    <span className="text-[#6B7280]">Like New</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Style:</span>
                    <span className="text-[#6B7280]">Luxury</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">
                      Box & Papers:
                    </span>
                    <span className="text-[#6B7280]">Included</span>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="space-y-[0.5rem]">
                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Condition:</span>
                    <span className="text-[#6B7280]">Like New</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">
                      Case Material:
                    </span>
                    <span className="text-[#6B7280]">Stainless Steel</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">Warranty:</span>
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
                    <span className="text-[#6B7280]">Great Deal</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">
                      Movement Type:
                    </span>
                    <span className="text-[#6B7280]">Automatic</span>
                  </div>

                  <div className="flex flex-row items-center gap-[6px] text-[0.875rem]">
                    <span className="text-[#333333] font-medium">
                      Trust Score:
                    </span>
                    <span className="text-[#6B7280]">Verified Seller 88/100</span>
                  </div>
                </div>
              </div>
            </>
          </div>
        }

        {activeTab == 'seller-info' &&
          <div className="flex flex-row gap-[1.5rem] w-full mt-[2rem]">
            <div className="w-[25.938rem]">
              <div>
                <h1 className="text-[1.25rem] text-[#333333] font-medium">
                  Info
                </h1>
              </div>

              <div className="mt-[0.75rem] backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A] border border-white rounded-[0.5rem] bg-white">
                <div className="p-[1rem] flex flex-col items-center">

                  <div className="flex flex-col items-center relative">
                    <img src="/productDetails/sun.svg" alt="sun-image" />

                    <div className="bg-[#1C1F25] text-white font-medium py-[0.25rem] px-[1.25rem] rounded-[5px] mt-[-13px]">
                      Top Seller
                    </div>
                  </div>

                  <div className="text-[#333333B2] mt-[1rem]">
                    Seller Name
                  </div>

                  <div className="flex flex-row items-center">
                    <div className="text-[1.5rem] font-semibold text-[#333333]">
                      John Smith
                    </div>

                    <img src="/productDetails/verified-batch.svg" alt="green-badge" className="w-[1.5rem] ml-[0.5rem]" />
                  </div>

                  <div className="border-t border-[#333333]/15 my-[1rem] w-full" />

                  <div className="text-[#333333]/70">
                    Trust Score
                  </div>

                  <div className="flex flex-row items-end gap-[3px]">
                    <div className="text-[#046C4E] text-[1.5rem] font-semibold">
                      88/100
                    </div>

                    <div className="text-[#333333]/70 text-[1rem] pb-[3px]">
                      (532  sold)
                    </div>
                  </div>

                  <div className="border-t border-[#333333]/15 my-[1rem] w-full" />

                  <div className="flex flex-col w-full gap-[0.5rem] text-black">
                    <div className="flex flex-row text-[0.9rem] items-center justify-between">
                      <div className="font-semibold">
                        Phone Number:
                      </div>

                      <div className="text-[#333333]">
                        +1 929 304 8844
                      </div>
                    </div>

                    <div className="flex flex-row text-[0.9rem] items-center justify-between">
                      <div className="font-semibold">
                        Store Page:
                      </div>

                      <div className="flex flex-row gap-[0.25rem] items-center cursor-pointer">
                        <div className="text-[#5486C8] underline underline-offset-3">
                          Visit store
                        </div>

                        <div>
                          <img src="/productDetails/blue-share.svg" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row text-[0.9rem] items-center justify-between">
                      <div className="font-semibold">
                        Address:
                      </div>

                      <div className="w-[10rem] text-[#333333]">
                        123 Luxury Lane, Suite 456 Geneva, Switzerland 1200
                      </div>
                    </div>

                  </div>

                  <div className="border-t border-[#333333]/15 my-[1rem] w-full" />

                  <Button className="w-full bg-transparent border border-[#D1D5DB] text-black text-[0.9rem] font-semibold rounded-[2px]">
                    Chat with seller
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div>
                <h1 className="text-[1.25rem] text-[#333333] font-medium">
                  Reviews (24)
                </h1>
              </div>

              {reviews.map((review:any)=>(
                <div className="mt-[0.75rem] backdrop-blur-[30px] shadow-[0px_6px_4.9px_0px_#0000000A] border border-white rounded-[0.5rem] bg-white p-[1rem]">
                  <div className="flex flex-row justify-between">
                    <div className="font-semibold text-[#333333]">
                      {review.name}
                    </div>

                    <div className="text-[0.75rem] text-[#333333B2]">
                      {review.date}
                    </div>
                  </div>

                  <div className="mt-[6px]">
                    <RatingStars rating={review.rating} />
                  </div>

                  <div className="text-[#333333] mt-[1rem]">
                    {review.review}
                  </div>
                </div>
              ))}
            </div>

          </div>
        }
      </div>
    </div>
  );
};

export default ProductInfo;
