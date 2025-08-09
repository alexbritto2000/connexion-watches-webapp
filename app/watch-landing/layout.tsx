import React from 'react';
import Header from '@/components/headerComponents/Header';

export default function WatchLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}