import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';


import imgPhone from './contato/phone.svg';
import imgMail from './contato/mail.svg';
import imgAddress from './contato/address.svg';

import imgWhatsapp from './social/whatsapp.svg';
import imgInstagram from './social/insta.svg';
import imgYoutube from './social/youtube.svg';


function Footer() {
    return (

        <section className="mt-5 text-center" id='footer'>
            
                <img
                src="/IMG/Logo.svg"
                height="60"
                className="d-inline-block align-top mt-3"
                alt="logo da bezt."
                />

                <article className="" id="social-media_link">
                    <span><img 
                    src={imgWhatsapp}
                    alt="Logo whatsapp"
                    height="30"
                    /> </span>

                    <span><img 
                    src={imgInstagram} 
                    alt="Logo instagram"
                    height="30"
                    /> </span>

                    <span><img 
                    src={imgYoutube}
                    alt="Logo youtube" 
                    height="30"
                    /> </span>
                </article>

                <aside className="d-flex flex-column text-center align-items-center" id="link-footer">
                    <p className="my-2 mt-4" id="footer-contato_titulo">CONTATO:</p>

                        <p><span className="">                
                        <img
                        src={imgMail}
                        height="20"
                        className="d-inline-block align-center"
                        alt="logo bezt."
                        /> </span><a href="mailto:contato@lojabezt.com" id="contato-footer">contato@lojabezt.com </a></p>
                        
                        <p id="contato-footer"><span className="">                
                        <img
                        src={imgAddress}
                        height="20"
                        className="d-inline-block align-center"
                        alt="logo bezt."
                        />
                        </span> Rua Três, Rio de janeiro - RJ</p>

                        <p><span className="">                
                        <img
                        src={imgPhone}
                        height="20"
                        className="d-inline-block align-center"
                        alt="logo bezt."
                        /> </span><a href="tel:+5521912345678" id="contato-footer">(21) 91234-5678</a></p>

                </aside>

                <div className="d-flex dev">
                    <span className="signature">© 2022 - Desenvolvido por: Caíque Américo.</span>
                </div>
        
        </section>
    

    ); 
  }

export default Footer;