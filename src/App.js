import React from 'react';
// router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="overflow-hidden">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
                <Sidebar />
            </Router>
            <Footer />
        </div>
    );
};

export default App;
