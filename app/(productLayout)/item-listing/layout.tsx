import Footer from '@/components/Footer'
import Header from '@/components/headerComponents/Header'
import React from 'react'

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header hideOptions={{
                about: true,
                howItWorks: true,
                support: true
            }} />

            <main>
                {children}
            </main>

            <Footer showPoweredBy={true} />
        </div>
    )
}