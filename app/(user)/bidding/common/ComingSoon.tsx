'use client';

import React from 'react';

interface ComingSoonProps {
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title = "Coming Soon",
  description = "This feature is currently under development. We're working hard to bring you something amazing!",
  icon = "/bidding/authendicatuion-verification.svg",
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[400px] p-8 text-center ${className}`}>
      {/* Icon */}
      <div className="mb-6">
        <img 
          src={icon} 
          alt="Coming Soon" 
          className="w-16 h-16 opacity-50"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md leading-relaxed">
        {description}
      </p>

      {/* Decorative elements */}
      <div className="mt-8 flex space-x-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export default ComingSoon;
