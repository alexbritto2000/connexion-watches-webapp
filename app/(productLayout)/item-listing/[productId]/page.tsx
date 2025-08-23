"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoArrowBack, IoHeart, IoBookmark, IoShare, IoStar, IoInformationCircle, IoChatbubble, IoShieldCheckmark, IoRocket, IoCard, IoCheckmarkCircle } from 'react-icons/io5';
import ProductDetail from './components/productDetail';
import ProductInfo from './components/productInfo';

interface Product {
  id: number;
  image: string;
  model: string;
  brand: string;
  price: string;
  dealStatus: string;
  dealColor: string;
  seller: string;
  condition: string;
  description?: string;
  specifications?: Record<string, string>;
  images?: string[];
  referenceNumber?: string;
  itemNumber?: string;
  marketPrice?: string;
  marketDifference?: string;
  originalBox?: boolean;
  originalPapers?: boolean;
}

const ProductDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('product-info');

  useEffect(() => {
    // Simulate API call to fetch product details
    const fetchProduct = async () => {
      setLoading(true);
      // In a real app, you would fetch from your API
      // const response = await fetch(`/api/products/${productId}`);
      // const data = await response.json();

      // Mock data for now
      const mockProduct: Product = {
        id: parseInt(productId),
        image: "/watchLanding/recommend-1.png",
        model: "2023 Model",
        brand: "Patek Philippe Calatrava",
        price: "$70,000",
        dealStatus: "Great Deal",
        dealColor: "bg-[#057A55]",
        seller: "John Smith",
        condition: "Like New",
        referenceNumber: "412515621",
        itemNumber: "156846513",
        marketPrice: "$71,200",
        marketDifference: "$1,200 below market",
        originalBox: true,
        originalPapers: true,
        description: "This exceptional Patek Philippe Calatrava represents the pinnacle of luxury watchmaking. Crafted with precision and attention to detail, this timepiece features a sophisticated design that combines elegance with functionality.",
        specifications: {
          "Case Material": "White Gold",
          "Case Size": "39mm",
          "Movement": "Automatic",
          "Water Resistance": "30m",
          "Crystal": "Sapphire",
          "Bracelet": "Leather Strap",
          "Year": "2023"
        },
        images: [
          "/productDetails/product-overview-1.png",
          "/productDetails/product-overview-2.png",
          "/productDetails/product-overview-3.png",
          "/productDetails/product-overview-4.png"
        ]
      };

      setProduct(mockProduct);
      setLoading(false);
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleBack = () => {
    router.back();
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.brand,
        text: `Check out this ${product?.brand} - ${product?.price}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#EBF0F2]'>
      <div className="max-w-7xl mx-auto pb-[5rem]">
        <ProductDetail mockProduct={product}/>
        <ProductInfo mockProduct={product}/>
      </div>
    </div>
  );
};

export default ProductDetailPage;
