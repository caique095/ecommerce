import './AboutUs.css';
import Container from 'react-bootstrap/Container';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Team from '../../components/team/team';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutUs() {
    return (
        <>
            <div className="">
                <Container>
                    <section className="d-flex justify-content-center align-center my-4">
                    <h1 className="fw-semibold">Nossa missão:</h1>  
                    </section>
                    
                    <section className="about-us d-flex justify-content-center align-center text-center">
                        <article>
                            <h1 className="fs-4">Lorem Ipsum.</h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </article>

                        <article>
                            <h1 className="fs-4">Lorem Ipsum.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </article>
                    </section>
                </Container>

                <section id="time">
                    <section id="time" className="d-flex justify-content-center align-center my-4">
                        <h1 className="fw-semibold">Nosso time:</h1>  
                    </section>
                    <section className="">
                        <Team />
                    </section>
                </section>
            </div>

</>
    ); 
  }

export default AboutUs;