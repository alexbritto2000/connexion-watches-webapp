import Footer from "@/components/Footer";
import Header from "@/components/headerComponents/Header";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import ExploreMarketPlace from "@/components/marketplace/ExploreMarketPlace";
import BecomeConnectionCertifier from "./watch-landing/buyComponents/BecomeConnectionCertifier";
import WhyRetailersLove from "./watch-landing/buyComponents/WhyRetailersLove";
import TrustFeatures from "./watch-landing/buyComponents/TrustFeatures";

export default function Home() {
  return (
    <div>
      <Header hideOptions={{
        watch: true,
        sell: true,
        buy: true,
        stores: true,
        marketTrends: true,
        deals: true,
        blog: true,
        authenticityDatabase: true,
        faq: true
      }} />

      <main className="bg-[#EBF0F2] text-black">
        <MarketplaceHero />
        <ExploreMarketPlace />
        <BecomeConnectionCertifier />
        <WhyRetailersLove />
        <TrustFeatures />
      </main>

      <Footer showPoweredBy={true} />
    </div>
  );
}
