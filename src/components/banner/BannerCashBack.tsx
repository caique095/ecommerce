import './BannerCashBack.css';
import photo from './10.png';
import photoDois from './11.png';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import photoBanner from './banner_cashBack.png'

function BannerCashBack() {

  return (
    <>
        <section className="d-flex justify-content-around text-center align-center mb-4" id="primeiro_banner">
            <img src={photoBanner} id="banner_image"/>
            <div className="d-flex flex-column justify-content-center mx-2" id="primeiro-banner_div">
                <h1 className="primeiro-banner_titulo">GAMES</h1>
                <span id="primeiro-banner_texto" className="fw-semibold" >Lorem ipsum dolor sit.</span>
                <Alert.Link as={Link} to="/product" className="btn-produto fw-bold text-center mx-3 mt-2" id="primeiro-banner_btn">Comprar </Alert.Link>
            </div>
        </section>
    </>
  );
}

export default BannerCashBack;