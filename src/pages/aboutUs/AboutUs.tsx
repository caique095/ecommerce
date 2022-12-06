import './AboutUs.css';

// React Bootstrap
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// React router dom 
import { Link } from 'react-router-dom';

// Components
import Team from '../../components/team/team';


function AboutUs() {
    return (
        <>
            <div className="">
                <Container>
                    <section className="d-flex justify-content-center align-center my-4">

                        <h1 className="text-center mt-4" id="nossa_missao"> Nossa missão é levar até sua casa tecnologia, estilo e <span id="nossa_missao-span" className="">muita diversão!</span></h1>
                    </section>
                

                    <section id="time">
                        <section id="time" className="d-flex justify-content-center align-center my-4">
                            <h1 className="fw-semibold my-4" id="time-titulo">Nosso time:</h1>  
                        </section>
                        <section className="">
                            <Team />
                        </section>
                    </section>
                </Container>
                
                <section id="contato" className="">
                    <section className="d-flex justify-content-center align-center my-2">
                        <h1 className="fw-semibold mt-3">Contato:</h1> 
                    </section>
                        
                    <section className="d-md-flex justify-content-around align-items-center">
                        <img className="mb-4 d-none d-md-block" src="IMG/contato-img.png" id="contato-img" alt="Foto de contato" />
                            <div className="d-flex flex-column justify-content-center align-items-center" id="contato-textos">
                                <Container>
                                    <h1 className="fs-3 fw-bold mb-2">É sempre bom falar com você!</h1>
                                    <p><span className="fw-semibold">Telefone: </span><a href="tel:+5521912345678" id="contato-msg">(21) 91234-5678</a></p>
                                    <p><span className="fw-semibold">Email: </span><a href="mailto:contato@lojabezt.com" id="contato-msg">contato@lojabezt.com </a></p>
                                    <p><span className="fw-semibold">Endereço: </span> Rua Três, Rio de janeiro - RJ</p>
                                </Container>
                            </div>
                    </section>
                </section>
    
            </div>

</>
    ); 
  }

export default AboutUs;