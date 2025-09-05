'use client';

import React from 'react';
import { useNavigation } from './NavigationProvider';
import LoadingSpinner from './LoadingSpinner';

interface ContentAreaProps {
  children: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = ({ children }) => {
  const { isLoading } = useNavigation();

  return (
    <div className="flex-1">
      {isLoading ? <LoadingSpinner /> : children}
    </div>
  );
};

export default ContentArea;
