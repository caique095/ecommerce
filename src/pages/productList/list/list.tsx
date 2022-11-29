import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import productList from '../productList.json';
import './list.css';

type Props = typeof productList[0];

function List(props: Props){
    const { nome, srcImg, srcImgDois, srcImgTres, preco } = props;


    const navigate = useNavigate();
function ComprarProduto(produto: typeof productList[0]) {
    navigate(`/allproduct/${produto.nome}`, { state: { produto } });
}

    return (
             <>
                <Card id="card-produto" className="m-3">
                    <Card.Img id="img-produto" variant="top" src={srcImg} />
                    <Card.Body className="" id="card-body">
                        <Card.Title id="card-title"> {nome} </Card.Title>
                        <Card.Text className="fw-bold" id="card-text">{preco}</Card.Text>
                    </Card.Body>
                    <Button className="btn-produto fw-bold text-center" id="btn-produto" onClick={() => ComprarProduto(props)}>Comprar </Button>
                </Card>
            </>
    )
}

export default List;