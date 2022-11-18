import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './AllProduct.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Cards from '../../components/card/Card';
import Search from '../../components/search/Search';
import Lista from '../../pages/productList/productList';

const produtos = [
    {
        srcImg:"/IMG/Produtos/1.png",  
        nome:"Airpods",  
        preco:"R$ 99,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/3.png",  
        nome:"Headphone Preto",  
        preco:"R$ 42,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/7.png",  
        nome:"Headphone Amarelo",  
        preco:"R$ 50,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/8.png",  
        nome:"Airpods Rosa",  
        preco:"R$ 69,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/4.png",  
        nome:"Caixa de som",  
        preco:"R$ 90,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/5.png",  
        nome:"Smartwatch Vermelho",  
        preco:"R$ 59,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/6.png",  
        nome:"Fone preto",  
        preco:"R$ 99,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/2.png",  
        nome:"Headphone Branco",  
        preco:"R$ 80,00", 
        url:""
    }
]

function AllProducts() {
    const [ busca, setBusca ] = useState('');

    return (
      
        <>
            <Header />
            <Container>
            <Search busca={busca} setBusca={setBusca}/>
                    
            {/* <div className="row my-5">
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
                };
            </div> */}
            
            <Lista busca={busca} />

            </Container>

            <Footer />
        </>

    ); 
  }

  export default AllProducts;