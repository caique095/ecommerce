import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Icons.css';

function Icons() {
    return (
      <section id="link-inicial" className="mb-2 link-inicial d-flex">
            <Button className="fw-bold m-3 px-0 link-inicial" id="link-produtos" variant="link">Headphones</Button>
            <Button className="fw-bold m-3 px-0 link-inicial" id="link-produtos" variant="link">Smartwatch</Button>
            <Button className="fw-bold m-3 px-0 link-inicial" id="link-produtos" variant="link">Speaker</Button>
      </section>

    ); 
  }

export default Icons;