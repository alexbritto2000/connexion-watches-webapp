import React from 'react';
import SideBar from './common/sideBar';
import ComingSoon from './common/ComingSoon';
import { NavigationProvider } from './common/NavigationProvider';
import ContentArea from './common/ContentArea';

export default function BiddingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <NavigationProvider>
      <div className="flex min-h-screen max-w-7xl mx-auto px-4">
        {/* Sidebar */}
        <div className="pt-[1.5rem] pr-[2rem]">
          <SideBar />
        </div>
        
        {/* Main Content */}
        <ContentArea>
          {children || (
            <ComingSoon 
              title="Dashboard Overview"
              description="Your personalized dashboard is coming soon! Track your bidding activity, watch your favorite items, and stay updated with market trends."
              icon="/bidding/overview.svg"
            />
          )}
        </ContentArea>
      </div>
    </NavigationProvider>
  );
}
