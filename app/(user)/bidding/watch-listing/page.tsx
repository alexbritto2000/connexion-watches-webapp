import React from 'react';
import SideBar from '../common/sideBar';
import ComingSoon from '../common/ComingSoon';

export default function WatchListingPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6">
        <SideBar />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <ComingSoon 
          title="Watch Listing"
          description="List your watches for auction! Our listing management system is coming soon with advanced tools for sellers."
          icon="/bidding/watch-listing.svg"
        />
      </div>
    </div>
  );
}
