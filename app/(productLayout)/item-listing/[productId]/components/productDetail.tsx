import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { GoStar } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { CiStar } from "react-icons/ci";
import RatingStars from "@/components/RatingStars";
import { useRouter } from "next/navigation";

const ProductDetail = (product: any) => {
  console.log("product details", product);
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();

  // Simple error handling - check if product data exists
  if (!product || !product.mockProduct) {
    return (
      <div className="text-[#6B7280] text-[0.875rem] p-4">
        <p>Product not found or loading...</p>
      </div>
    );
  }

  // Check if images exist and have at least one image
  const images = product.mockProduct.images || [];

  if (images.length === 0) {
    return (
      <div className="text-[#6B7280] text-[0.875rem] p-4">
        <p>No product images available</p>
      </div>
    );
  }

  // Ensure selectedImage is within bounds
  const safeSelectedImage = Math.min(selectedImage, images.length - 1);

  return (
    <div className="text-[#6B7280] text-[0.875rem]">
      <div className="flex flex-row items-center gap-[3rem] pt-[2.5rem] pb-[1.25rem] px-2">
        <div>Home</div>

        <div>Watch</div>

        <div>
          Dress Watches
        </div>

        <div>
          Patek Philippe
        </div>

        <div>Nautilus</div>

        <div className="text-black">Ref #: 412515621</div>
      </div>

      <div className="px-2 flex flex-row gap-[1.5rem]">
        <div className="w-[50%] pr-[2rem]">
          <div className="bg-white rounded-[0.5rem] relative">
            <img
              src={images[safeSelectedImage]}
              alt=""
              className="w-[100%] rounded-[6px]"
              onError={(e) => {
                e.currentTarget.src = "/productDetails/product-overview-1.png"; // fallback image
              }}
            />

            <div className="flex flex-col gap-[0.5rem] absolute top-[1rem] left-[1rem]">
              {/* 3D Box */}
              <motion.button className="border border-[#E5E7EB] rounded-[2px] p-[0.8rem] cursor-pointer">
                <motion.img
                  alt="Zoom"
                  src="/productDetails/3d-box.svg"
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              </motion.button>

              {/* Zoom */}
              <motion.button className="border border-[#E5E7EB] rounded-[2px] p-[0.8rem] cursor-pointer">
                <motion.img
                  alt="Zoom"
                  src="/productDetails/zoom.svg"
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              </motion.button>
            </div>
          </div>

          {/* different images */}
          <div className="flex flex-row gap-[1rem] mt-[1rem]">
            {images.map((img: string, index: number) => (
              <button
                className={`rounded-[0.25rem] border-4 ${safeSelectedImage === index ? "border-[#D1D5DB]" : "border-transparent"}`}
                key={index}
                onClick={() => setSelectedImage(index)}
              >
                <motion.img
                  alt=""
                  className="cursor-pointer w-[5rem] h-[5rem]"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/productDetails/product-overview-1.png"; // fallback image
                  }}
                  src={img}
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="w-[50%]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-[0.75rem]">
              <div className="text-[0.82rem] text-[#6B7280]">2023 Model</div>

              <div className="bg-white rounded-[4px] text-[0.75rem] text-[#111928] px-[0.5rem] py-[2px]">
                Like New
              </div>

              <div className="bg-[#057A55] rounded-[4px] text-[0.75rem] text-white font-semibold px-[0.5rem] py-[2px]">
                Great Deal
              </div>
            </div>

            <div className="flex flex-row gap-[0.5rem]">
              <motion.button className="border border-[#D1D5DB] rounded-[2px] px-[0.9rem] py-[0.8rem] cursor-pointer">
                <motion.img
                  alt="share-icon"
                  src="/productDetails/share-icon.svg"
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              </motion.button>

              <motion.button className="border border-[#D1D5DB] rounded-[2px] px-[0.9rem] py-[0.8rem] cursor-pointer">
                <motion.img
                  alt="share-icon"
                  src="/productDetails/fav.svg"
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              </motion.button>
            </div>
          </div>

          <div>
            <div className="text-[#6B7280] text-[0.875rem] mt-[2px]">
              Item #: <span className="underline">156846513</span>
            </div>

            <div className="text-black text-[1.25rem] leading-[150%]">
              Calatrava White Gold Watch
            </div>

            <div className="text-[#6B7280] text-[0.9rem]">
              Ref # : 412515621
            </div>

            <div className="text-black text-[0.9rem] flex flex-row items-center gap-[0.5rem] mt-[0.5rem]">
              <div>Original box</div>

              <div className="w-[5px] h-[5px] rounded-full bg-[#9CA3AF]" />

              <div>Original papers</div>
            </div>

            <div className="text-black text-[1.875rem] font-medium mt-[0.5rem]">
              $70,000
            </div>

            <div className="flex flex-row items-center gap-[6px]">
              <div className="text-[1rem] text-[#374151] font-medium">
                $1,200
              </div>

              <div className="text-[0.9rem] text-[#111928]">below market</div>

              <img src="/productDetails/info-icon.svg" alt="info-icon" />
            </div>

            <div className="flex flex-col gap-[0.5rem]">
              <Button 
                className="w-full bg-black text-white rounded-[2px] mt-[2rem] text-[0.9rem] font-semibold"
                onClick={() => router.push('/payment-selection')}
              >
                Buy
              </Button>

              <Button className="w-full bg-transparent border border-[#000000] text-black text-[0.9rem] font-semibold rounded-[2px]">
                Make an Offer
              </Button>

              <Button className="w-full bg-transparent border border-[#D1D5DB] text-black text-[0.9rem] font-semibold rounded-[2px]">
                Propose Trade-In
              </Button>
            </div>

            <div className="border-t border-[#D1D5DB] mt-[2rem] mb-[1rem]" />

            <div>
              <div className="text-[#6B7280] text-[0.75rem] uppercase">
                Shipping and Seller Information
              </div>
            </div>

            <div className="mt-[1rem] flex flex-row justify-between">
              <div className="flex">
                <div className="flex flex-col items-center mr-[1rem]">
                  <img
                    src="/productDetails/3-stars.svg"
                    alt="stars"
                    className="mb-[-10px]"
                  />

                  <div className="flex flex-row items-center">
                    <img
                      src="/productDetails/trust-score-left-bracs.svg"
                      alt="left-bracket"
                    />

                    <div className="text-[#046C4E] text-[1.875rem] font-medium">
                      88
                    </div>

                    <img
                      src="/productDetails/trust-score-left-bracs.svg"
                      className="transform scale-x-[-1]"
                      alt="right-bracket"
                    />
                  </div>

                  <div className="text-[#111928] text-[0.75rem] mt-[-8px]">
                    Trust Score
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center gap-[6px]">
                    <div className="text-black text-[1rem]">John Smith</div>

                    <div>
                      <img
                        src="/productDetails/verified-batch.svg"
                        alt="badge"
                      />
                    </div>

                    <div>
                      <img src="/productDetails/flag.svg" alt="usa-flag" />
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-1">
                    <div>
                      <RatingStars rating={5} />
                    </div>

                    <div className="text-[0.9rem] text-[#6B7280] mt-[1px] flex flex-row gap-[1px]">
                      <span className="text-black">5,0</span>(
                      <span className="underline">24</span>)
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[6px]">
                <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                  <img src="/productDetails/badge.svg" alt="badge" />
                </div>

                <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                  <img src="/productDetails/item-cart.svg" alt="item-cart" />
                </div>

                <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                  <img
                    src="/productDetails/verified-watch.svg"
                    alt="verified-watch"
                  />
                </div>

                <div className="flex justify-center items-center border border-[#D1D5DB] rounded-full w-[3.375rem] h-[3.375rem]">
                  <img
                    src="/productDetails/watch-graph.svg"
                    alt="watch-graph"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full bg-transparent border border-[#D1D5DB] text-black text-[0.9rem] font-semibold rounded-[2px] mt-[1rem]">
              <div className="flex flex-row justify-center items-center gap-[0.25rem]">
                <div>Chat with seller</div>

                <div>
                  <img src="/productDetails/message.svg" alt="chat-icon" />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
