 import axios from 'axios';
 import {useEffect,useState} from 'react';
 import './checkout-header.css'
 import './CheckoutPage.css'
 import { PaymentSummary } from './PaymentSummary';
 import { OrderSummary } from './OrderSummary';
 export function CheckoutPage({cart,loadCart}){
const[deliveryOptions,setDeliveryOptions]=useState([])
const[paymentSummary,setPaymentSummary]=useState(null)
useEffect(() => {
  const fetchCheckOutData = async () => {
    let response = await axios.get('/api/delivery-options?estimatedDeliveryTime');
    setDeliveryOptions(response.data);

    response = await axios.get('/api/payment-summary');
    setPaymentSummary(response.data);
  };
  fetchCheckOutData();
}, [cart]);

  return(
    <>
    <title>checkout</title>
     <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <div className="log">krishna</div>
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link"
            href="/">3 items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>

    <div className="checkout-page">
      <div className="page-title">Review your order</div>
     
      <div className="checkout-grid">
       <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

       <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
      </div>
    </div>
    </>
  );
}