"use client";
import React from 'react';
import BrowseByStyle from './buyComponents/BrowseByStyle';
import PopularBrands from './buyComponents/PopularBrands';
import RecommendedForYou from './buyComponents/RecommendedForYou';
import WhyRetailersLove from './buyComponents/WhyRetailersLove';
import ThisWeeksHighlights from './buyComponents/ThisWeeksHighlights';
import BecomeConnectionCertifier from './buyComponents/BecomeConnectionCertifier';
import TrustFeatures from './buyComponents/TrustFeatures';

const Buy = () => {
    return (
        <div>
            <BrowseByStyle />
            <PopularBrands />
            <RecommendedForYou />
            <WhyRetailersLove />
            <ThisWeeksHighlights />
            <BecomeConnectionCertifier />
            <TrustFeatures />
        </div>
    );
};

export default Buy;