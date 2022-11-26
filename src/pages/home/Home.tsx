import React, { useState } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Cards from '../../components/card/Card';
import Icons from '../../components/icons/Icons';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import Header from '../../components/header/Header';
import Lista from '../../pages/productList/productList';
import Banner from '../../components/banner/Banner';
import './Home.css';
import BannerCashBack from '../../components/banner/BannerCashBack';

function Home() {
    const [ busca, setBusca ] = useState('');
  return (
    <section id="main">
        
        <Header />
        <Jumbotron />
        <Icons />
        <Container>
        <Product />
        <Banner />
        <div className="d-flex flex-column justify-content-center align-center text-center mt-5">
          <h1 className="fw-bold">Produtos mais vendidos</h1>
          <span>Confira produtos selecionados para você.</span>
        </div>
        <Lista busca={busca}/>
        <BannerCashBack />
        </Container>
        <Footer />
        

    </section>
  );
}

export default Home;