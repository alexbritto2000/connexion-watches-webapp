'use client';
import React, { useState } from 'react'
import AddressForms from './components/AddressForms';
import ShippingAndInsurance from './components/ShippingAndInsurance';
import PaymentSection from './components/PaymentSection';
import Summary from './components/Summary';
import Seller from './components/Seller';

const BuyComponent = () => {
  const [billingAddress, setBillingAddress] = React.useState("same");
  const [shippingMethod, setShippingMethod] = useState("DHL");
  const [insuranceMethod, setInsuranceMethod] = useState("CARRIER");
  const [paymentType, setPaymentType] = useState("local");

  //const [country, setCountry] = useState(options.find((o) => o.value === "FR"));

  return (
    <div className="text-black flex justify-center w-full">
      <div className='flex flex-row w-full'>
        <div className='w-[50%] bg-white pr-[4.375rem] px-4 py-[4.375rem] flex justify-end'>
          <div className='max-w-[580px]'>
            <div>
              <AddressForms 
                billingAddress={billingAddress}
                setBillingAddress={setBillingAddress}
              />
              
              <ShippingAndInsurance 
                shippingMethod={shippingMethod}
                setShippingMethod={setShippingMethod}
                insuranceMethod={insuranceMethod}
                setInsuranceMethod={setInsuranceMethod}
              />
              
              <PaymentSection 
                paymentType={paymentType}
                setPaymentType={setPaymentType}
              />
            </div>
          </div>
        </div>

        <div className='w-[50%] bg-[#EBF0F2] pl-[4.375rem] px-4 py-[4.375rem]'>
          <div className='max-w-[720px]'>
            <Summary />
            <Seller />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyComponent
