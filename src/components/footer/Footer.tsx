import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

function Footer() {
    return (

        <section className="d-flex mt-5 align-items-center text-center" id='footer'>
            <Container> 
                <img
                src="/IMG/Logo.svg"
                height="60"
                className="d-inline-block align-top mt-3"
                alt="logo bezt."
                />

                <article className="d-flex flex-column text-center align-items-center fw-semibold" id="link-footer">
                    <ul className="d-flex flex-column">
                        <li id="footer-list"><Alert.Link as={Link} to="/aboutus" className="mt-3">Quem somos?</Alert.Link></li>
                        <li id="footer-list"><Alert.Link as={Link} to="/allproduct" className="mt-3">Produtos</Alert.Link></li>
                        <li id="footer-list"><Alert.Link as={Link} to="/allproduct" className="mt-3">Contato</Alert.Link></li>
                    </ul>
                </article>

                <article className="" id="social-media_link">
                    <span><img src="/IMG/whatsapp.svg" alt="Logo whatsapp"/> </span>
                    <span><img src="/IMG/instagram.svg" alt="Logo instagram"/> </span>
                    <span><img src="/IMG/youtube.svg" alt="Logo youtube" /> </span>
                </article>
                <div className="d-flex dev">
                    <span className="signature">© 2022 - Desenvolvido por: Caíque Américo.</span>
                </div>
            </Container>
            
        </section>
    

    ); 
  }

export default Footer;