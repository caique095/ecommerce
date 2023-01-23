
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="sticky-top" id="header" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to="/"> 
        <img
              src="/IMG/Logo.svg"
              height="50"
              className="d-inline-block align-top"
              alt="Logo loja bezt."
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link id="header-inicio" as={Link} to="/">Início</Nav.Link>
            <Nav.Link id="header-somos" as={Link} to="/aboutus">Quem somos?</Nav.Link>
            <Nav.Link id="header-produtos" as={Link} to="/allproduct">Produtos</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/signUp" className="header-login" id="header-signup">Faça seu cadastro!</Nav.Link>
            <Nav.Link as={Link} to="/login" className="header-login fw-bold" id="header-login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;