import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import MainHeaderAlibaba from './components/layout/MainHeaderAlibaba';
import FooterAlibaba from './components/layout/FooterAlibaba';
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
          </Routes>
        </div>

        <FooterAlibaba />
      </Router>
    );
  }
}

export default App;
