"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { IoArrowBack, IoHeart, IoBookmark, IoShare, IoStar, IoInformationCircle, IoChatbubble, IoShieldCheckmark, IoRocket, IoCard, IoCheckmarkCircle } from 'react-icons/io5';
import ProductDetail from './components/productDetail';

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
      <div className="max-w-7xl mx-auto mb-[5rem]">
        <ProductDetail mockProduct={product}/>
      </div>

      <div className="bg-white min-h-screen">
        {/* Top Navigation Bar */}
        <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Breadcrumb Navigation */}
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <button onClick={handleBack} className="hover:text-gray-900">Home</button>
                <span>/</span>
                <span className="text-gray-900">Watch</span>
                <span>/</span>
                <span className="text-gray-900">Dress Watches</span>
                <span>/</span>
                <span className="text-gray-900">Patek Philippe</span>
                <span>/</span>
                <span className="text-gray-900">Calatrava</span>
              </div>

              {/* Reference Number and Actions */}
              <div className="flex items-center space-x-6">
                <div className="text-sm text-gray-600">
                  Ref #: {product.referenceNumber}
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <IoShare size={20} />
                  </button>
                  <button
                    onClick={handleFavorite}
                    className={`p-2 transition-colors ${favorite ? 'text-red-500' : 'text-gray-600 hover:text-gray-900'
                      }`}
                  >
                    <IoHeart size={20} fill={favorite ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Product Images */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.images?.[selectedImage] || product.image}
                    alt={product.brand}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Image Controls */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <IoInformationCircle size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <IoArrowBack size={20} className="text-gray-600 rotate-90" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${product.brand} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              {/* Product Status and Model Info */}
              <div className="space-y-3">
                <div className="text-sm text-gray-500">{product.model}</div>

                <div className="flex items-center space-x-3">
                  <span className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {product.condition}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm text-white font-medium ${product.dealColor}`}>
                    {product.dealStatus}
                  </span>
                </div>

                <div className="text-sm text-gray-600">
                  Item #: {product.itemNumber}
                </div>

                <h1 className="text-3xl font-bold text-gray-900">
                  {product.brand} White Gold Watch
                </h1>

                <div className="text-sm text-gray-600">
                  Ref #: {product.referenceNumber}
                </div>

                <div className="text-sm text-gray-600">
                  {product.originalBox && "Original box"} {product.originalBox && product.originalPapers && "•"} {product.originalPapers && "Original papers"}
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">
                  {product.price}
                </div>
                <div className="flex items-center space-x-2 text-sm text-green-600">
                  <span>{product.marketDifference}</span>
                  <IoInformationCircle size={16} className="text-gray-400" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
                >
                  Buy
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Make an Offer
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Propose Trade-In
                </motion.button>
              </div>

              {/* Shipping and Seller Information */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                  Shipping and Seller Information
                </h3>

                <div className="space-y-4">
                  {/* Seller Profile */}
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                        (88)
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Trust Score</div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900">{product.seller}</span>
                        <IoCheckmarkCircle size={16} className="text-green-500" />
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <IoStar size={14} className="text-yellow-400 fill-current" />
                          <span className="ml-1">5.0</span>
                        </div>
                        <span>(24)</span>
                      </div>
                    </div>
                  </div>

                  {/* Seller Badges */}
                  <div className="flex space-x-3">
                    <div className="text-center">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <IoShieldCheckmark size={20} className="text-green-600" />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Authenticity</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <IoRocket size={20} className="text-blue-600" />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Fast Shipping</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <IoCard size={20} className="text-purple-600" />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Secure Payment</div>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <IoChatbubble size={20} className="text-orange-600" />
                      </div>
                      <div className="text-xs text-gray-600 mt-1">24/7 Support</div>
                    </div>
                  </div>

                  {/* Chat Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <IoChatbubble size={20} />
                    <span>Chat with seller</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('product-info')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'product-info'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Product Information
              </button>
              <button
                onClick={() => setActiveTab('market-data')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'market-data'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Market Data
              </button>
              <button
                onClick={() => setActiveTab('seller-info')}
                className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === 'seller-info'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
              >
                Seller Info
              </button>
            </div>

            {/* Tab Content */}
            <div className="py-8">
              {activeTab === 'product-info' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    {product.description}
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900">Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
                    {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-600">{key}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'market-data' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Market Analysis</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Average Market Price</div>
                      <div className="text-2xl font-bold text-gray-900">{product.marketPrice}</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Price Difference</div>
                      <div className="text-2xl font-bold text-green-600">{product.marketDifference}</div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="text-sm text-gray-600 mb-2">Market Trend</div>
                      <div className="text-2xl font-bold text-blue-600">Stable</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'seller-info' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Seller Details</h3>
                  <div className="bg-gray-50 p-6 rounded-lg max-w-2xl">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                        (88)
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">{product.seller}</div>
                        <div className="text-sm text-gray-600">Verified Seller</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Trust Score</div>
                        <div className="font-medium text-gray-900">88/100</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Total Sales</div>
                        <div className="font-medium text-gray-900">156</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Response Time</div>
                        <div className="font-medium text-gray-900">&lt; 2 hours</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Member Since</div>
                        <div className="font-medium text-gray-900">2020</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
