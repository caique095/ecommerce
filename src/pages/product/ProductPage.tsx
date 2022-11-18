import './ProductPage.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Cards from '../../components/card/Card';
import Product from '../../components/product/Product';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Lista from '../../pages/productList/productList';
import { useState, useEffect } from "react";
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function ProductPage() {
  const [ busca, setBusca ] = useState('');
  return (
    <>    

    <Header />
   
    <section id="ProductPage">
        <Row>
            <Col xs={12} md={6}>
                <Carousel className="" id="carrossel-img">
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src="/IMG/Produtos/airpods/1.png"
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src="/IMG/Produtos/airpods/2.png"
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src="/IMG/Produtos/airpods/3.png"
                    alt="Third slide"
                    />

                </Carousel.Item>
                </Carousel>
            </Col>
            <Col xs={12} md={6}>
                
                <Container className="h-100 d-flex flex-column justify-content-center my-4">
                    <section className="page-product-description" id="page-product-description">
                        <div className="d-flex" id="product-description">
                                <h1 id="product-description_title" className="fw-bold">Produto 1</h1>
                                <h2 id="product-description_price" className="fw-bold">R$79,90</h2>
                        </div>

                        <div className="description">
                                <span id="product-description_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit add some words.</span>
                        </div>

                        <div className="d-flex my-4" id="btn-product-description">
                            <Button id="btn-product-description_add" className="" variant="primary"></Button>
                            <Button id="btn-product-description_buy" variant="primary">Comprar agora</Button>
                        </div>
                    </section>
                </Container>
            </Col>
        </Row>

    </section>

    <>
        <Container>
            <Product />
            <Lista busca={busca}/>
        </Container>
    </>    

    <Footer />

</>

  );
}

export default ProductPage;