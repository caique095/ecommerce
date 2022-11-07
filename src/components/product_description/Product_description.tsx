import './Product_description.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function ProductDescription() {
  return (
    <Container>
        <section className="page-product-description">
            <div className="d-flex mt-4" id="product-description">
                    <h1 id="product-description_title" className="fw-bold">Produto 1</h1>
                    <h2 id="product-description_price" className="">R$79,90</h2>
            </div>

            <div className="description">
                    <span id="product-description_text">Lorem ipsum, dolor sit amet consectetur adipisicing elit add some words.</span>
            </div>

            <div className="d-flex mt-3" id="btn-product-description">
                <Button id="btn-product-description_add" className="" variant="primary"></Button>
                <Button id="btn-product-description_buy" variant="primary">Comprar agora</Button>
            </div>
        </section>

   </Container>
  );
}

export default ProductDescription;