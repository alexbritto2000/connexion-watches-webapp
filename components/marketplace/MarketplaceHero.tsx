import Image from 'next/image';
import { HiOutlineSearch } from 'react-icons/hi';

const MarketplaceHero = () => {
  const marketplaces = [
    {
      id: 1,
      name: 'Watches',
      image: '/marketplace/marketplace-1.jpg',
      alt: 'Luxury watch marketplace'
    },
    {
      id: 2,
      name: 'Coins',
      image: '/marketplace/marketplace-2.jpg',
      alt: 'Coin and medal marketplace'
    },
    {
      id: 3,
      name: 'Trading Cards',
      image: '/marketplace/marketplace-3.jpg',
      alt: 'Trading card marketplace'
    },
    {
      id: 4,
      name: 'Jewelry',
      image: '/marketplace/marketplace-4.jpg',
      alt: 'Jewelry marketplace'
    },
    {
      id: 5,
      name: 'Fashion',
      image: '/marketplace/marketplace-5.jpg',
      alt: 'Fashion and accessories marketplace'
    },
    {
      id: 6,
      name: 'Collectibles',
      image: '/marketplace/marketplace-6.jpg',
      alt: 'General collectibles marketplace'
    }
  ];

  return (
    <section className="bg-[#EBF0F2] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className='flex flex-col items-center mb-[2rem]'>
          {/* Main Heading */}
          <h1 className="text-[4rem] md:text-5xl sm:text-[2rem] font-semibold text-black mb-4 w-[45rem] leading-[100%]">
            Discover Specialized Marketplaces
          </h1>

          {/* Description */}
          <p className="w-[29.375rem] text-[0.82rem] leading-[150%]">
            Connexion brings together passionate collectors and enthusiasts across premium categories.
            Select a marketplace to begin your journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-[20.625rem] mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Watch, Coin, Card, Jewelry..."
              className="w-full px-4 py-1 text-lg rounded-[8px] border-2 border-gray-200 focus:border-black focus:outline-none transition-colors bg-[#FFFFFF] placeholder:text-[0.82rem]"
            />
            <button className="absolute right-2 top-[5px] bg-black text-white p-[6px] rounded-[6px] hover:bg-gray-800 transition-colors cursor-pointer">
              <HiOutlineSearch size={16} />
            </button>
          </div>
        </div>
        
        <div className='grid grid-cols-4 gap-[0.5rem] items-end'>
          {/* column 1 */}
          <div className='flex flex-col gap-[0.5rem]'>
            <div className="overflow-hidden rounded-[8px] group">
              <img
                src="/marketplace/marketplace-1.jpg"
                alt="Luxury watch marketplace"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[15rem]"
              />
            </div>

            <div className="overflow-hidden rounded-[8px] group">
              <img
                src="/marketplace/marketplace-2.jpg"
                alt="Luxury watch marketplace"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[15rem]"
              />
            </div>
          </div>

          {/* column 2 */}
          <div className="overflow-hidden rounded-[8px] group">
            <img
              src="/marketplace/marketplace-3.jpg"
              alt="Luxury watch marketplace"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[15.75rem] rounded-[8px]"
            />
          </div>

          {/* column 3 */}
          <div className="overflow-hidden rounded-[8px] group">
            <img
              src="/marketplace/marketplace-4.jpg"
              alt="Luxury watch marketplace"
              className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[19.875rem] rounded-[8px]"
            />
          </div>

          {/* column 4 */}
          <div className='flex flex-col gap-[0.5rem]'>
            <div className="overflow-hidden rounded-[8px] group">
              <img
                src="/marketplace/marketplace-5.jpg"
                alt="Luxury watch marketplace"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[20rem]"
              />
            </div>

            <div className="overflow-hidden rounded-[8px] group">
              <img
                src="/marketplace/marketplace-6.jpg"
                alt="Luxury watch marketplace"
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500 h-[10rem]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketplaceHero;
