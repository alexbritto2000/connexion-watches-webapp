"use client";
import React from 'react';
import BrowseByStyle from './buyComponents/BrowseByStyle';
import PopularBrands from './buyComponents/PopularBrands';
import RecommendedForYou from './buyComponents/RecommendedForYou';

const Buy = () => {
    return (
        <div>
            <BrowseByStyle />
            <PopularBrands />
            <RecommendedForYou />
        </div>
    );
};

export default Buy;