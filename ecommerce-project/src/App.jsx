import { Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/Home/HomePages.jsx';
import { CheckoutPage } from './pages/checkout/CheckoutPage.jsx';
import {OrdersPage} from './pages/Orders/OrdersPage.jsx'
import './App.css'; 

function App() {
  const[cart,setCart]=useState([])
   useEffect(()=>{
    const getHomeData = async () => {
  const response =await axios.get('/api/cart-Items?expand=product')
   setCart(response.data);
    }
   getHomeData();
  },[]);
  return (
    <Routes>  
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path='Orders' element={<OrdersPage cart={cart}/>}/>
    </Routes>
  );
}

export default App;
