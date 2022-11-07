import React from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
 
function Product() {
    return (

        <section className="d-flex fs-3" id="link-pagina">
            <span className="fw-bold" id="link-pagina_txt">Produtos</span>
            <Alert.Link as={Link} to="/allproduct" className="fw-bold" id="link-pagina_produtos">Ver tudo</Alert.Link>
            
        </section>
        


    ); 
  }

export default Product;