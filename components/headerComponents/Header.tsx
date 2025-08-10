"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const BuyPopover = dynamic(() => import('./BuyPopover'), { ssr: false });
const SellPopover = dynamic(() => import('./SellPopover'), { ssr: false });
const MarketTrendsPopover = dynamic(() => import('./MarketTrendsPopover'), { ssr: false });
const LanguagePopover = dynamic(() => import('./LanguagePopover'), { ssr: false });

interface HeaderProps {
  hideOptions?: {
    watch?: boolean;
    buy?: boolean;
    sell?: boolean;
    stores?: boolean;
    marketTrends?: boolean;
    deals?: boolean;
    blog?: boolean;
    authenticityDatabase?: boolean;
    faq?: boolean;
    premium?: boolean;
    language?: boolean;
    notification?: boolean;
    message?: boolean;
    user?: boolean;
  };
}

const Header: React.FC<HeaderProps> = ({ hideOptions = {} }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200 text-[#1C1F25]">  
      <div className="w-full px-8 py-4 font-medium flex items-center justify-between relative z-10 md:px-6 sm:px-4">
        {/* Desktop Navigation */}
        <div className="w-full flex justify-center items-center">
          <div className="max-w-7xl w-full flex justify-between items-center">
            <div className='flex gap-[1rem]'>
              <div className="flex gap-4">
                <div>
                  <img src="/logo.svg" className="w-[6.25rem] cursor-pointer" alt="Connexion Watches" />
                </div>
              </div>

              {!hideOptions.watch && (
                <div className='flex items-center gap-1'>
                  <img src="/header/watch.svg" alt="watch" className="w-[1rem]" />
                  <div className='text-[0.8rem] text-[#1C1F25]'>
                    Watch
                  </div>
                </div>
              )}
            </div>

            <nav className="flex items-center">
              {!hideOptions.buy && <BuyPopover />}
              {!hideOptions.sell && <SellPopover />}
              {!hideOptions.stores && (
                <a
                  href="/stores"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  Stores
                </a>
              )}
              {!hideOptions.marketTrends && <MarketTrendsPopover />}
              {!hideOptions.deals && (
                <a
                  href="/deals"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  Deals
                </a>
              )}
              {!hideOptions.blog && (
                <a
                  href="/blog"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  Blog
                </a>
              )}
              {!hideOptions.authenticityDatabase && (
                <a
                  href="/authenticity-database"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  Authenticity Database
                </a>
              )}
              {!hideOptions.faq && (
                <a
                  href="/faq"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  FAQs
                </a>
              )}
              {!hideOptions.premium && (
                <a
                  href="/premium"
                  className="text-[1rem] font-normal py-2 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[0.75rem] relative"
                >
                  Premium
                </a>
              )}
            </nav>

            <div className="flex flex-row gap-[1.5rem] items-center">
              {!hideOptions.language && <LanguagePopover />}
              {!hideOptions.notification && <img src="/header/notification.svg" alt="Notification" />}
              {!hideOptions.message && <img src="/header/message.svg" alt="Message" />}
              {!hideOptions.user && <img src="/header/user.svg" alt="User" />}
              {/* <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium transition-colors">
                Premium
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 