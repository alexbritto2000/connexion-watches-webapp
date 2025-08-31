import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import ExploreMarketPlace from "@/components/marketplace/ExploreMarketPlace";
import BecomeConnectionCertifier from "../watch-landing/buyComponents/BecomeConnectionCertifier";
import WhyRetailersLove from "../watch-landing/buyComponents/WhyRetailersLove";
import TrustFeatures from "../watch-landing/buyComponents/TrustFeatures";

export default function Home() {
    return (
        <div>
            <main className="bg-[#EBF0F2] text-black">
                <MarketplaceHero />
                <ExploreMarketPlace />
                <BecomeConnectionCertifier />
                <WhyRetailersLove />
                <TrustFeatures />
            </main>
        </div>
    );
}
