import React from 'react';
import { Alert } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './Jumbotron.css';
import { Link } from 'react-router-dom';

function Jumbotron() {
    return (
      
        <div className="jumbotron" id="jumbotron">
        <Container>
            <div className="fw-bold" id="jumbotron-txt">
                <h1 className="jumbotron-tittle display-4 fw-bold fs-1">Lorem ipsum.</h1>
                <p className="jumbotron-sub fw-bold">Lorem ipsum dolor sit, amet consectetur.</p>
                <Alert.Link as={Link} to="/allproduct" className="btn btn-primary btn-lg fw-semibold" id="btn-jumbotron" role="button">Comprar agora</Alert.Link>
            </div>
      </Container>
      </div>
    ); 
  }

  export default Jumbotron;