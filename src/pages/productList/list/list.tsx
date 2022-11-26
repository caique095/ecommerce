import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import productList from '../productList.json';
import './list.css';

type Props = typeof productList[0];

function List(props: Props){
    const { nome, srcImg, preco, url } = props;

    return (
             <>
                <Card id="card-produto" className="m-3">
                    <Card.Img id="img-produto" variant="top" src={srcImg} />
                    <Card.Body className="" id="card-body">
                        <Card.Title id="card-title"> {nome} </Card.Title>
                        <Card.Text className="fw-bold" id="card-text">{preco}</Card.Text>
                    </Card.Body>
                    <Card.Link as={Link} to="/product" className="btn-produto fw-bold text-center" id="btn-produto">Comprar</Card.Link>
                </Card>
            </>
    )
}

export default List;