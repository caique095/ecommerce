import team from '../team.json';
import './time.css';
import Container from 'react-bootstrap/Container';

type Props = typeof team[0];

function Time(props: Props){
    const { nome, srcImg, cargo, descricao } = props;
    return (
             <>
                {/* <Card id="card-produto" className="m-3">
                    <Card.Img id="img-produto" variant="top" src={srcImg} />
                    <Card.Body className="" id="card-body">
                        <Card.Title id="card-title"> {nome} </Card.Title>
                        <Card.Text className="fw-bold" id="card-text">{cargo}</Card.Text>
                    </Card.Body>
                    <Card.Link as={Link} to="/product" className="btn-produto fw-bold text-center" id="btn-produto">Comprar</Card.Link>
                </Card> */}
                <Container>

                        <section className="time text-center">
                            <img id="time-img" src={srcImg} alt="Foto do colaborador" />
                            <div className="d-flex flex-column justify-content-center">
                                <h1 className="time-titulo mt-2 fw-bold">{nome}</h1>
                                <p className="time-texto">{cargo}</p>
                            </div>
                        </section>

                </Container>
            </>
    )
}

export default Time;