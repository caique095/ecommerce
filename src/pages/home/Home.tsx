import React from 'react';
import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Cards from '../../components/card/Card';
import Icons from '../../components/icons/Icons';
import Footer from '../../components/footer/Footer';
import Product from '../../components/product/Product';
import Header from '../../components/header/Header';

const produtos = [
    {
        srcImg:"/IMG/Produtos/1.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/3.png",  
        nome:"Produto XYZ",  
        preco:"R$ 8,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/7.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/8.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/4.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/5.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/6.png",  
        nome:"Produto XYZ",  
        preco:"R$ 9,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/2.png",  
        nome:"Produto XYZ",  
        preco:"R$ 80,00", 
        url:""
    }
]

function Home() {
  return (
    <section id="main">
        
        <Header />
        <Jumbotron />
        <Icons />
        <Container>
        <Product />
            <div className="row">
                {
                    produtos.map(p => (
                        <div className="col-sm-6 col-md-3">
                            <Cards 
                            srcImg={p.srcImg} 
                            nome={p.nome}  
                            preco={p.preco} 
                            url={p.url} />
                        </div>
                    ))
                }
            </div>
        </Container>
        <Footer />
        

    </section>
  );
}

export default Home;