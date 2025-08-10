import Footer from "@/components/Footer";
import Header from "@/components/headerComponents/Header";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";

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
      </main>

      <Footer />
    </div>
  );
}
