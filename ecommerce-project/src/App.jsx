import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePages.jsx';
import { CheckoutPage } from './pages/CheckoutPage.jsx';
import {OrdersPage} from './pages/OrdersPage.jsx'
import './App.css'; 

function App() {
  return (
    <Routes>  
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path='Orders' element={<OrdersPage/>}/>
    </Routes>
  );
}

export default App;
