import { Link } from 'react-router-dom';
import productList from '../../pages/productList/productList.json';
import './seeMore.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function SeeMore(){
    let produtosRecomendados = [...productList];
    produtosRecomendados = produtosRecomendados.sort(() => 0.5 - Math.random()).splice(0,4);

    return (
        <>
            <Container>
                <h1 className="mx-4 fs-4 mt-5">Produtos Relacionados:</h1>
                            <section className="d-md-flex">
                                {produtosRecomendados.map(item => (
                                <Card id="card-produto" className="m-3">
                                    <Card.Img id="img-produto" variant="top" src={item.srcImg} />
                                        <Card.Body className="" id="card-body">
                                            <Card.Title id="card-title"> {item.nome} </Card.Title>
                                            <Card.Text className="fw-bold" id="card-text">{item.preco}</Card.Text>
                                        </Card.Body>
                                        <Card.Link as={Link} to="/product" className="btn-produto fw-bold text-center mb-5" id="btn-produto">Comprar</Card.Link>
                                </Card>
                                ))};
                            </section>
            </Container>
        </>
    )
}

export default SeeMore;