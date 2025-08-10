"use client";
import React from 'react';
import BrowseByStyle from './buyComponents/BrowseByStyle';
import PopularBrands from './buyComponents/PopularBrands';
import RecommendedForYou from './buyComponents/RecommendedForYou';
import WhyRetailersLove from './buyComponents/WhyRetailersLove';
import ThisWeeksHighlights from './buyComponents/ThisWeeksHighlights';

const Buy = () => {
    return (
        <div>
            <BrowseByStyle />
            <PopularBrands />
            <RecommendedForYou />
            <WhyRetailersLove />
            <RecommendedForYou />
            <ThisWeeksHighlights />
        </div>
    );
};

export default Buy;