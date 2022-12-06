import React, { useState } from 'react';
import './AllProduct.css';

// React Bootstrap
import Container from 'react-bootstrap/Container';

// Components e Pages
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