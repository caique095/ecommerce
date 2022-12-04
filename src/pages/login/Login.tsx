import React, { useState } from 'react';
import './Login.css';

// React Router Dom 
import { BrowserRouter as Router, Routes, Route,  Link, useNavigate } from "react-router-dom";

// React Bootstrap
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import { FormText } from 'react-bootstrap';

// React Hook Form 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Yup
import { object, string } from "yup";
import * as yup from "yup";


// Validar Formulario (INPUTS)

interface IFormInputs {
    email: string;
    password: string;
  };

const schema = yup.object({
    email: yup.string()
        .required("Campo obrigatório"),
    password: yup.string()
        .required("Campo obrigatório")
        .min(6, "Senha precisa ter pelo menos 6 caracteres."),
})



function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
    const onSubmit = (data: IFormInputs) => console.log(data);

    function checkLogin() {

        const login = localStorage.getItem("email");
        const senha = localStorage.getItem("password");
        console.log(login);
        console.log(senha);
        
        if (email === login && password === senha) {
           return navigate('/');
        } else {
            alert('Usuário não cadastrado')
        }
    }

  return (

        <>
            <section className="d-flex" id="page-signUp">

                <aside className="img d-none d-sm-block justify-content-center align-items-center" id="img-signUp">
                        
                </aside>

                <article className="w-100 d-flex justify-content-center align-items-center" id="form-signUp">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="my-4">Olá, bem vindo!</h1>

                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" {...register("email")} 
                                onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text id="error"> {errors.email?.message} </Form.Text>
                            
                        </Form.Group>

                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" {...register("password")} 
                                onChange={(e) => setPassword(e.target.value)} />
                            <Form.Text id="error"> {errors.password?.message} </Form.Text>
                        </Form.Group>


                        <Button id="btn-signUp" className="w-100" variant="dark" type="submit"
                            onClick = {checkLogin}>
                            Entrar
                        </Button>
                        <Form.Text className="text-muted">
                            Ainda não tem uma conta? <Alert.Link as={Link} to="/signUp">Faça já seu cadastro.</Alert.Link>
                        </Form.Text>
                        <br />
                    </Form>
                </article>
            
            </section>

        </>

  );
}

export default Login;
