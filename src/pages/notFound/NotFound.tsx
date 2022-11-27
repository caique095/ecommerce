import './NotFound.css'
import img from './error_img.png';
import Container from 'react-bootstrap/Container';

import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'


function NotFound() {
  return (
    <Container>
        <section className="d-flex flex-column justify-content-center align-items-center my-4" id="not_found">

            <div id="not_found-img" className="mt-3">
                <img id="img-not_found" src={img} alt="" />
            </div>

            <div id="not_found-description" className="my-3 text-center">
                <h1 id="not_found-titulo" className="fw-bold">Ooops...</h1>
                <p className="not_found-404 fw-bold">Página não encontrada.</p>
                <p id="not_found-txt">A página que você procura não está por aqui.</p>    
            </div>
            <Alert.Link id="not_found-txt_link" as={Link} to="/">VOLTAR PARA O INÍCIO</Alert.Link>
            
            

        </section>
    </Container>
  );
}

export default NotFound;