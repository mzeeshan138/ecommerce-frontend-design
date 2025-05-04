import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MainHeaderAlibaba from './components/layout/MainHeaderAlibaba';
import FooterAlibaba from './components/layout/FooterAlibaba';
import ProductListView from './components/pages/ProductListView';
import ProductGirdView from './components/pages/ProductGirdView';
import ProductDetail from './components/pages/ProductDetail';
import ProductCart from './components/pages/ProductCart';
import HeaderAlibaba from './components/layout/HeaderAlibaba';

class App extends Component {
  render() {
    return (
      <Router>
        <MainHeaderAlibaba />
        <HeaderAlibaba />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/listview" element={<ProductListView />} />
            <Route path="/product/gridview" element={<ProductGirdView />} />
            <Route path="/product/detail" element={<ProductDetail />} />
            <Route path="/product/cart" element={<ProductCart />} />
          </Routes>
        </div>

        <FooterAlibaba />
      </Router>
    );
  }
}

export default App;
