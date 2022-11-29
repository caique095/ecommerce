import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './AllProduct.css';
import Footer from '../../components/footer/Footer';
import Cards from '../../components/card/Card';
import Search from '../../components/search/Search';
import Lista from '../../pages/productList/productList';

function AllProducts() {
    const [ busca, setBusca ] = useState('');

    return (
      
        <>
            <Container>
                <Search busca={busca} setBusca={setBusca}/>
                <Lista busca={busca} />
            </Container>
        </>

    ); 
  }

  export default AllProducts;