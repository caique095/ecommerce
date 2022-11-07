import React from 'react';
import Container from 'react-bootstrap/Container';
import './AllProduct.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Cards from '../../components/card/Card';


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

function AllProducts() {
    return (
      
        <>
            <Header />

            <Container>

                <div className="row my-5">
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
        </>

    ); 
  }

  export default AllProducts;