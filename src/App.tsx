import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import ProductPage from './pages/product/ProductPage';
import AllProducts from './pages/allProduct/AllProduct';
import AboutUs from './pages/aboutUs/AboutUs';
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path ='allproduct/:id' element={<ProductPage />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/login"element={<Login />} />
          <Route path="/signUp"element={<SignUp />} />
          <Route path="/aboutus"element={<AboutUs/>} />
          <Route path="/product"element={<ProductPage/>} />
          <Route path="/allproduct" element={<AllProducts/>} />
          <Route path="/quemsomos" element={<ProductPage/>} />
          <Route path="/" element={<Home/>} />
       </Routes>
       <Footer />
  </Router>
  );
}

export default App;
