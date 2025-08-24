import Image from 'next/image'
import React from 'react'

const PatekPhilippe = () => {
    return (
        <div className='max-w-7xl mx-auto text-black pb-[4rem]'>

            <div className='pt-[4rem] pb-[3.125rem]'>
                <div className='flex flex-col gap-[0.5rem]'>
                    <div className='font-medium'>
                        Patek Philippe
                    </div>

                    <div className='text-[1.25rem] text-[#111928]'>
                        A Legacy of Excellence
                    </div>
                </div>

                <div className='pt-[3.125rem] flex flex-row gap-[2rem]'>
                    <div>
                        <Image
                            src="/productDetails/patek-philippe.png"
                            alt="Patek Philippe Watch"
                            className="rounded-[6px]"
                            width={467}
                            height={333}
                            priority
                            placeholder="blur"
                            blurDataURL="/productDetails/patek-philippe.png" // can be same image or a tiny preview
                        />
                    </div>

                    <div className='flex-1 flex flex-col gap-[2rem]'>
                        <div>
                            Patek Philippe is more than just a watch brand — it represents the pinnacle of Swiss horology. Known for its timeless elegance, precision, and craftsmanship, each Patek Philippe timepiece is a masterpiece that blends tradition with innovation.
                        </div>

                        <div>
                            {/* Heading */}
                            <h2 className="font-semibold text-black text-[1rem] mb-[1rem]">
                                Why Patek Philippe?
                            </h2>

                            {/* List */}
                            <div className="list-disc list-inside space-y-[1rem] text-black text-[1rem] leading-relaxed">
                                <div className='flex flex-row items-start'>
                                    <div className='pt-[10px] px-[7px]'>
                                        <div className='w-[6px] h-[6px] bg-black rounded-full' />
                                    </div>

                                    <div>
                                        Heritage & Prestige – Established in 1839,
                                        Patek Philippe has remained an independent family-owned brand, ensuring
                                        unparalleled quality and exclusivity.
                                    </div>
                                </div>

                                <div className='flex flex-row items-start'>
                                    <div className='pt-[10px] px-[7px]'>
                                        <div className='w-[6px] h-[6px] bg-black rounded-full' />
                                    </div>

                                    <div>
                                        Exceptional Craftsmanship – Every watch is meticulously handcrafted
                                        by master watchmakers, incorporating intricate complications and the finest materials.
                                    </div>
                                </div>

                                <div className='flex flex-row items-start'>
                                    <div className='pt-[10px] px-[7px]'>
                                        <div className='w-[6px] h-[6px] bg-black rounded-full' />
                                    </div>

                                    <div>
                                        Investment Value – Patek Philippe watches are known for their lasting value,
                                        often appreciating over time and becoming treasured heirlooms.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[3.125rem]'>
                <div className='text-[#111928] text-[1.25rem]'>
                    Iconic Collections
                </div>

                <div className='mt-[1rem] grid grid-cols-3 gap-[2rem]'>
                    {/* Collection 1 */}
                    <div className='cursor-pointer'>
                        <img
                            src="/productDetails/iconic-collection-1.png" alt="iconic-collection-1"
                            className='w-full h-[14.25rem] rounded-[6px] object-cover' />

                        <div className='mt-[2rem]'>
                            <div className='mb-[0.5rem] text-[1.5rem]'>
                                Nautilus
                            </div>

                            <div className='leading-[150%]'>
                                The ultimate luxury sports watch, combining elegance with a bold design.
                            </div>
                        </div>
                    </div>

                    {/* Collection 2 */}
                    <div className='cursor-pointer'>
                        <img
                            src="/productDetails/iconic-collection-2.png" alt="iconic-collection-2"
                            className='w-full h-[14.25rem] rounded-[6px] object-cover' />

                        <div className='mt-[2rem]'>
                            <div className='mb-[0.5rem] text-[1.5rem]'>
                                Calatrava
                            </div>

                            <div className='leading-[150%]'>
                                A timeless dress watch, epitomizing classic sophistication.
                            </div>
                        </div>
                    </div>

                    {/* Collection 3 */}
                    <div className='cursor-pointer'>
                        <img
                            src="/productDetails/iconic-collection-3.png" alt="iconic-collection-3"
                            className='w-full h-[14.25rem] rounded-[6px] object-cover' />

                        <div className='mt-[2rem]'>
                            <div className='mb-[0.5rem] text-[1.5rem]'>
                                Grand Complications
                            </div>

                            <div className='leading-[150%]'>
                                Masterpieces of horological innovation, featuring perpetual calendars, minute repeaters, and tourbillons.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-[3.125rem] flex flex-row items-center gap-[5.875rem]'>
                <div>
                    <img
                        src="/productDetails/patek-philippe-logo.png"
                        className='w-[31.625rem]'
                        alt="patek-philippe-logo" />

                    <div className='w-[31.625rem] mt-[4rem] flex flex-col gap-[1.5rem] leading-[150%]'>
                        <div>
                            Owning a Patek Philippe means more than just wearing a luxury watch—it’s about being part of a legacy.
                        </div>

                        <div>
                            As their iconic slogan says:
                        </div>

                        <div className='font-semibold'>
                            <div>
                                “You never actually own a Patek Philippe.
                            </div>

                            <div className='pl-[3rem]'>
                                You merely look after it for the next generation.”
                            </div>
                        </div>

                        <div>
                            Explore the world of Patek Philippe and experience the art of fine watchmaking.
                        </div>
                    </div>
                </div>

                <div>
                    <img
                        src="/productDetails/patek-philippe-image.png"
                        alt="patek-philippe-image" />
                </div>
            </div>
        </div>
    )
}

export default PatekPhilippe