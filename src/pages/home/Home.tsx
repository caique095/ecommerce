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
        <Lista busca={busca}/>
        </Container>
        <Footer />
        

    </section>
  );
}

export default Home;