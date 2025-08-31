import Footer from "@/components/Footer";
import Header from "@/components/headerComponents/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header
                hideOptions={{
                    watch: true,
                    sell: true,
                    buy: true,
                    stores: true,
                    marketTrends: true,
                    deals: true,
                    blog: true,
                    authenticityDatabase: true,
                    faq: true,
                }}
            />

            <main>{children}</main>

            <Footer showPoweredBy={false} />
        </div>
    );
}