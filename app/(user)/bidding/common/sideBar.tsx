'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useNavigation } from './NavigationProvider';

import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
                index < rating ? (
                    <IoStar key={index} className="text-yellow-500" />
                ) : (
                    <IoIosStarOutline key={index} className="text-gray-300" />
                )
            ))}
        </div>
    );
};

const NavItem = ({
    path,
    icon,
    label,
    badgeCount,
    pathname,
    router
}: {
    path: string;
    icon: string;
    label: string;
    badgeCount?: number;
    pathname: string;
    router: any;
}) => {
    const isActive = pathname === path;
    const { setLoading } = useNavigation();

    const handleClick = () => {
        if (!isActive) {
            setLoading(true);
        }
        router.push(path);
    };

    return (
        <div className='w-full'>
            {/* {label === 'Notifications' && (
                <div className='border-t border-[#D1D5DB] mb-4' />
            )} */}

            <div
                className={`group cursor-pointer flex flex-row gap-4 items-center justify-between 
                ${isActive ? 'text-[#111928]' : 'text-[#6B7280] hover:text-[#111928]'}`}
                onClick={handleClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleClick();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Navigate to ${label}`}
            >
                <div className="flex gap-2 text-[0.82rem]">
                    {/* Icon wrapper */}
                    <div className="relative w-5 h-5 flex items-center justify-center">
                        <img
                            src={icon}
                            className={`w-4 h-4 transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                }`}
                            style={{
                                filter: isActive
                                    ? 'brightness(0) saturate(100%) invert(8%) sepia(8%) saturate(7500%) hue-rotate(169deg) brightness(95%) contrast(96%)'
                                    : 'brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(1352%) hue-rotate(169deg) brightness(97%) contrast(90%)'
                            }}
                            alt={label}
                        />
                    </div>
                    <div>{label}</div>
                </div>

                {badgeCount && (
                    <div className={`text-[0.75rem] ${isActive ? 'bg-[#111928]' : 'bg-[#F05252] group-hover:bg-[#111928]'} 
                    text-white rounded-full w-4 h-4 flex items-center justify-center`}>
                        {badgeCount}
                    </div>
                )}
            </div>
        </div>
    );
};

const SideBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    // Navigation items configuration
    const navItems = [
        {
            path: "/bidding",
            icon: "/bidding/overview.svg",
            label: "Overview"
        },
        {
            path: "/bidding/messages",
            icon: "/bidding/messages.svg",
            label: "Messages",
            badgeCount: 2
        },
        {
            path: "/bidding/purchase-history",
            icon: "/bidding/purchase-history.svg",
            label: "Purchase History"
        },
        {
            path: "/bidding/bidding-and-offer",
            icon: "/bidding/bidding.svg",
            label: "Bidding & Offer"
        },
        {
            path: "/bidding/listing",
            icon: "/bidding/listing.svg",
            label: "Listings"
        },
        {
            path: "/bidding/favourites",
            icon: "/bidding/favourites.svg",
            label: "Favourites"
        },
        {
            path: "/bidding/whishlist",
            icon: "/bidding/whishlist.svg",
            label: "Whishlist"
        },
        {
            path: "/bidding/watch-collection",
            icon: "/bidding/watch-collection.svg",
            label: "Watch collection"
        },
        {
            path: "/bidding/authendicatuion-verification",
            icon: "/bidding/authendicatuion-verification.svg",
            label: "Authenticity Verification"
        },
        {
            path: "/bidding/community",
            icon: "/bidding/community.svg",
            label: "Community"
        },
    ];

    const bottomNavItems = [
        {
            path: "/bidding/permium",
            icon: "/bidding/permium.svg",
            label: "Permium"
        },
        {
            path: "/bidding/notifications",
            icon: "/bidding/notifications.svg",
            label: "Notifications",
            //badgeCount: 2
        },
        {
            path: "/bidding/settings",
            icon: "/bidding/settings.svg",
            label: "Settings"
        },
        {
            path: "/login",
            icon: "/bidding/logout.svg",
            label: "Logout"
        }
    ];

    return (
        <div className='min-w-[15rem]'>
            {/* Profile Section */}
            <div className='flex gap-4'>
                <div>
                    <img src="/bidding/profile-dp.svg" alt="Profile" className="w-[2.625rem] h-[2.625rem] rounded-full" />
                </div>

                <div>
                    <div className='flex items-center gap-[5px] text-black font-semibold'>
                        <div>John Stones</div>
                        <img src="/bidding/verified-badge.svg" alt="Verified" />
                        <img src="/bidding/flag.svg" alt="Flag" />
                    </div>

                    <div className='text-[#6B7280] text-[0.75rem]'>
                        johnstones@gmail.com
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className='flex items-center justify-between mt-2'>
                <div className='flex flex-col items-center justify-center'>
                    <img src="/bidding/3-stars.svg" alt="Three stars" />
                    <div className='flex flex-row'>
                        <img src="/bidding/left-bracs.svg" alt="Left bracket" />
                        <div className='text-[#1F2A37] text-[1.375rem] leading-none font-medium'>
                            88
                        </div>
                        <img src="/bidding/right-bracs.svg" alt="Right bracket" />
                    </div>
                    <div className='text-[#111928] text-[0.563rem]'>
                        Trust Score
                    </div>
                </div>

                <div className="flex flex-row gap-[6px]">
                    <div className="flex justify-center items-center bg-[#F8FDFF] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-full w-[2.125rem] h-[2.125rem]">
                        <img src="/productDetails/badge.svg" alt="badge" className='w-4 h-4' />
                    </div>

                    <div className="flex justify-center items-center bg-[#F8FDFF] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-full w-[2.125rem] h-[2.125rem]">
                        <img src="/productDetails/item-cart.svg" alt="item-cart" className='w-4 h-4' />
                    </div>

                    <div className="flex justify-center items-center bg-[#F8FDFF] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-full w-[2.125rem] h-[2.125rem]">
                        <img src="/productDetails/verified-watch.svg" alt="verified-watch" className='w-4 h-4' />
                    </div>

                    <div className="flex justify-center items-center bg-[#F8FDFF] shadow-[0px_6px_4.9px_0px_#0000000A,0px_1px_0px_0px_#0000001F] rounded-full w-[2.125rem] h-[2.125rem]">
                        <img src="/productDetails/watch-graph.svg" alt="watch-graph" className='w-4 h-4' />
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className='border-t border-[#D1D5DB] my-4' />
            <div className='flex flex-col gap-4 items-start justify-start'>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        path={item.path}
                        icon={item.icon}
                        label={item.label}
                        badgeCount={item.badgeCount}
                        pathname={pathname}
                        router={router}
                    />
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className='border-t border-[#D1D5DB] my-4' />
            <div className='flex flex-col gap-4 items-start justify-start'>
                {bottomNavItems.map((item, index) => (
                    <NavItem
                        key={index}
                        path={item.path}
                        icon={item.icon}
                        label={item.label}
                        pathname={pathname}
                        router={router}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
