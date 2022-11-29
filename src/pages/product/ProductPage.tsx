import './ProductPage.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Product from '../../components/product/Product';
import { useState, useEffect } from "react";
import CardSlider from '../../components/carroussels/CardCarroussel';
import { useLocation } from 'react-router-dom';
import productList from '../productList/productList.json';


function ProductPage() {
  
    const settings = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
        clickable: true,

    },
  };

  const { state } = useLocation();
  const { produto } = state as {produto: typeof productList[0]};

  const [ busca, setBusca ] = useState('');
  return (
    <>    
    <section id="ProductPage">
        <div id="test">
        <Row>
            <Col xs={12} md={6}>
                    
                <Carousel className="" id="carrossel-img">
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src={produto.srcImg}
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src={produto.srcImgDois}
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" id="carrossel-img"
                    src={produto.srcImgTres}
                    alt="Third slide"
                    />

                </Carousel.Item>
                </Carousel> *
            </Col>
            <Col xs={12} md={6}>
                
                <Container className="h-100 d-flex flex-column justify-content-center my-4">
                    <section className="page-product-description" id="page-product-description">
                        <div className="d-flex justify-content-between" id="product-description">
                                <h1 id="product-description_title" className="fw-bold">{produto.nome}</h1>
                                <h2 id="product-description_price" className="fw-bold">{produto.preco}</h2>
                        </div>

                        <div className="description">
                                <h4 className="mt-4">Sobre o produto:</h4>
                                <span id="product-description_text">{produto.descricao}</span>
                        </div>

                        <div className="d-flex my-4 justify-content-between" id="btn-product-description">
                            <Button id="btn-product-description_add" className="" variant="primary"></Button>
                            <Button id="btn-product-description_buy" variant="primary">Comprar agora</Button>
                        </div>
                    </section>
                </Container>
            </Col>
        </Row>
        </div>
    </section>

    <>
        <Container>
            <Product />
            <div className="d-flex flex-column justify-content-center align-center text-center my-2">
              <h1 className="fw-bold">Ver também</h1>
              <span>Veja abaixo produtos selecionados para você.</span>
            </div>
            <CardSlider />
        </Container>
    </>    

</>

  );
}

export default ProductPage;