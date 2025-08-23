import React from 'react'
import { Tabs, Tab } from "@heroui/react";

const ProductInfo = (product: any) => {
    console.log("product details", product)

    return (
        <div>
            <div className="flex flex-wrap gap-4">
                <Tabs variant='underlined'>
                    <Tab key="product-info" title="Product Information" />
                    <Tab key="master-data" title="Market Data" />
                    <Tab key="seller-info" title="Seller Info" />
                </Tabs>
            </div>
        </div>
    )
}

export default ProductInfo