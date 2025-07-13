import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePages.jsx';
import './App.css'; 

function App() {
  return (
    <Routes>  
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<div>test the page</div>} />
    </Routes>
  );
}

export default App;
