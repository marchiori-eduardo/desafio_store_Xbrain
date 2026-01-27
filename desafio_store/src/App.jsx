import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material'; 
import ProductList from './pages/ProductList';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline /> {}
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;