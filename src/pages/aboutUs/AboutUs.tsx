import React from 'react';
import './AboutUs.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function AboutUs() {
    return (
        <div className="about-us">

            <Header />
            <Container>
                <div id="" className="my-5 d-flex justify-content-center">
                    <h1 className=""> Nossa cultura </h1>
                </div>                       
                <div className="d-flex justify-content-center align-items-md-stretch text-center">
                    <div className="w-100" id="our-culture-one">                                
                        <h3> Lorem Ipsum. </h3>                                        
                        <p> Dolor sit amet consectetur elit. Voluptatum reprehenderit temporibus nobis.</p>
                    </div>                                
                    <div className="w-100" id="our-culture-two">
                        <h3> Lorem Ipsum.</h3>                            
                        <p> Dolor sit amet consectetur elit. Voluptatum reprehenderit temporibus nobis.</p>
                    </div>
                </div>
            </Container>

                <section className="my-4 text-center justify-content-center d-md-flex" id="our-team">
                    <img
                    className="img-our-team" 
                    src="/IMG/team.jpg"
                    alt="our team"
                    />

                    <div className="d-md-flex flex-md-column justify-content-center text-center">
                        <h1 className="mt-3">Nosso time</h1>
                        <p>Dolor sit amet consectetur elit. Voluptatum reprehenderit temporibus nobis.</p>
                    </div>
                </section>

                <section className="d-flex flex-column justify-content-center text-center" id="our-mission">
                    <h1>Nossa missão</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus deserunt ducimus magni sequi, ad laborum at placeat inventore, aliquam explicabo odit ipsum rerum recusandae dolore temporibus nobis, repellat quasi!
                    </p>
                </section>

            <Footer />      

        </div>


    ); 
  }

export default AboutUs;