import React from 'react';
import './Product.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
 
function Product() {
    return (

        <section className="d-flex fs-5 w-100 justify-content-between" id="link-pagina">
            <span className="" id="link-pagina_txt">Produtos</span>

            <button className="cta">
                <span className="hover-underline-animation">Ver tudo</span>
                <svg viewBox="0 0 46 16" height="10" width="28" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>

            {/* <Alert.Link as={Link} to="/allproduct" className="fw-bold" id="link-pagina_produtos">Ver tudo</Alert.Link> */}
        </section>
        


    ); 
  }

export default Product;