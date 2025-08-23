import React, { useState } from 'react'
import { motion } from "framer-motion";

const ProductDetail = ( product:any ) => {
    console.log("product details", product)
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className='text-[#6B7280] text-[0.875rem]'>
            <div className='flex flex-row items-center gap-[3rem] pt-[2.5rem] pb-[1.25rem] px-2'>
                <div className='cursor-pointer'>
                    Home
                </div>

                <div className='cursor-pointer'>
                    Watch
                </div>

                <div className='cursor-pointer'>
                    Dress Watches
                </div>

                <div className='cursor-pointer'>
                    Patek Philippe
                </div>

                <div className='cursor-pointer'>
                    Nautilus
                </div>

                <div className='text-black'>
                    Ref #: 412515621
                </div>
            </div>

            <div className='px-2 flex flex-row gap-[1.5rem]'>
                <div className='w-[50%] pr-[2rem]'>
                    <div className='bg-white rounded-[0.5rem] relative'>
                        <img src={product?.mockProduct?.images?.[selectedImage]} alt="Product Image" className='w-[100%]' />

                        <div className="flex flex-col gap-[0.5rem] absolute top-[1rem] left-[1rem]">
                            {/* 3D Box */}
                            <motion.div
                                className="border border-[#E5E7EB] rounded-[2px] p-[0.8rem] cursor-pointer"
                            >
                                <motion.img
                                    src="/productDetails/3d-box.svg"
                                    alt="Zoom"
                                    whileTap={{ scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>

                            {/* Zoom */}
                            <motion.div
                                className="border border-[#E5E7EB] rounded-[2px] p-[0.8rem] cursor-pointer"
                            >
                                <motion.img
                                    src="/productDetails/zoom.svg"
                                    alt="Zoom"
                                    whileTap={{ scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* different images */}
                    <div className='flex flex-row gap-[1rem] mt-[1rem]'>
                        {product?.mockProduct?.images.map((img:string, index:number) => (
                            <>
                                <div className={`rounded-[0.25rem] border-4 ${selectedImage == index ? 'border-[#D1D5DB]' : 'border-transparent'}`} key={index} onClick={() => setSelectedImage(index)}>
                                    <motion.img 
                                        src={img} 
                                        alt="Product Image" 
                                        className='cursor-pointer w-[5rem] h-[5rem]'
                                        whileTap={{ scale: 0.8 }}
                                        transition={{ duration: 0.2 }} />
                                </div>
                            </>
                        ))}
                    </div>
                </div>

                <div className='w-[50%]'></div>
            </div>
        </div>
    )
}

export default ProductDetail