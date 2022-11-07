import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import { FormText } from 'react-bootstrap';



function Login() {
  return (

        <>
            <Header />
            <section className="d-flex" id="page-signUp">

                <aside className="img d-none d-sm-block justify-content-center align-items-center" id="img-signUp">
                        
                </aside>

                <article className="w-100 d-flex justify-content-center align-items-center" id="form-signUp">
                    <Form>
                        <h1 className="my-4">Olá, bem vindo!</h1>

                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                        </Form.Group>


                        <Button id="btn-signUp" className="w-100" variant="dark" type="submit">
                            Entrar
                        </Button>
                        <Form.Text className="text-muted">
                            Ainda não tem uma conta? <Alert.Link as={Link} to="/signUp">Faça já seu cadastro.</Alert.Link>
                        </Form.Text>

                    </Form>
                </article>
            
            </section>
            <Footer />

        </>

  );
}

export default Login;
