import React, { useState } from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Cards from '../../components/card/Card';
import Product from '../../components/product/Product';
import Lista from '../../pages/productList/productList';
import Banner from '../../components/banner/Banner';
import BannerCashBack from '../../components/banner/BannerCashBack';
import './Home.css';

function Home() {
    const [ busca, setBusca ] = useState('');
    const [filtro, setFiltro] = useState<number | null>(null);
  return (
    <section id="main mb-4">
        <Jumbotron />
        <Container>
            <Product />
            <Banner />
            <div className="d-flex flex-column justify-content-center align-center text-center mt-5">
              <h1 className="fw-bold">Produtos mais vendidos</h1>
              <span>Confira produtos selecionados para você.</span>
            </div>
            <Lista busca={busca}/>
        </Container>
    </section>
  );
}

export default Home;