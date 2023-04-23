import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import ProductUpdate from './components/ProductUpdate';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<ProductForm />} />
        <Route path="/update/:id" element={<ProductUpdate />} />
      </Routes>
    </div>
  );
}

export default Main;