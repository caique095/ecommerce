import React from 'react';
import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { Link } from 'react-router-dom';

export interface Produto {
    srcImg: string;
    nome: string;
    preco: string;
    url: string;
}

function Cards(props:Produto) {
  return (
    <>

        <Card id="card-produto" className="m-3">
            <Card.Img id="img-produto" variant="top" src={props.srcImg} />
            <Card.Body className="" id="card-body">
                <Card.Title id="card-title">{props.nome}</Card.Title>
                <Card.Text className="fw-bold" id="card-text">{props.preco}</Card.Text>
               
            </Card.Body>
            <Card.Link as={Link} to="/product" className="btn-produto fw-bold text-center" id="btn-produto">Comprar</Card.Link>
        </Card>


    </>
  );
}

export default Cards;