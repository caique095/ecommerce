import './Banner.css';
import photo from './10.png';
import photoDois from './11.png';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

function Banner() {

  return (
    <>
        <section className="d-flex justify-content-around text-center align-center" id="primeiro_banner">
            <div className="d-flex flex-column justify-content-center align-center mx-4" id="primeiro-banner_div">
                <h1 className="primeiro-banner_titulo">PROMOÇÃO</h1>
                <span id="primeiro-banner_texto" className="fw-semibold" >Lorem ipsum dolor.</span>
                <Alert.Link as={Link} to="/product" className="btn-produto fw-bold text-center mx-3 mt-2" id="primeiro-banner_btn">Comprar </Alert.Link>
            </div>
            <div>
                <img src={photoDois} id="primeiro-banner_image"/>
            </div>
        </section>
</>
  );
}

export default Banner;