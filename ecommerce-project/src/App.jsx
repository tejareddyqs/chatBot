import { Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { HomePage } from './pages/HomePages.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import {OrdersPage} from './pages/OrdersPage.jsx'
import './App.css'; 

function App() {
  const[cart,setCart]=useState([])
   useEffect(()=>{
    axios.get('/api/cart-Items?expand=product')
  .then((response)=>{
   setCart(response.data);
   })
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
