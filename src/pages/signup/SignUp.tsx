import React, { useState } from 'react';
import './SignUp.css';


// React Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormText } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'
import InputGroup from 'react-bootstrap/InputGroup';

// React Router Dom
import { BrowserRouter as Router, Routes, Route,  Link, useNavigate } from "react-router-dom";

// React Hook Form 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// Yup
import { object, string } from "yup";
import * as yup from "yup";

interface IFormInputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

const schema = yup.object({
    name: yup.string()
        .required("Campo obrigatório")
        .min(3, "Nome deve conter pelo menos 3 caracteres."),
    email: yup.string()
        .required("Campo obrigatório"),
    password: yup.string()
        .required("Campo obrigatório")
        .min(6, "Senha precisa ter pelo menos 6 caracteres."),
    confirmPassword: yup.string()
        .required("Campo obrigatório")
        .oneOf([yup.ref('password'), null], 'Senhas não correspondem.'),
})


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
      });
    const onSubmit = (data: IFormInputs) => console.log(data);
    
    console.log(errors)    

function armazenar() {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    
    }

  return (

        <>
            <section className="d-flex" id="page-signUp">

                <aside className="img d-none d-sm-block justify-content-center align-items-center" id="img-signUp">
                    
                </aside>

                <article className="w-100 d-flex justify-content-center align-items-center m-4" id="form-signUp">

                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <h1 className="my-4">Cadastre-se agora!</h1>
                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Digite seu nome" {...register("name")} />
                            <Form.Text id="error"> {errors.name?.message} </Form.Text>
                        </Form.Group>

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

                        <Form.Group className="mb-3 fw-semibold" controlId="formBasicPassword">
                            <Form.Label>Confirme sua senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" {...register("confirmPassword")}/>
                            <Form.Text id="error"> {errors.confirmPassword?.message} </Form.Text>
                        </Form.Group>

                        <Button id="btn-signUp" className="w-100 mb-1" variant="dark" 
                        type="submit"
                        onClick = {armazenar}
                        >
                            Cadastro
                        </Button>
                        <Form.Text className="text-muted">
                            Já tem uma conta? <Alert.Link as={Link} to="/login">Entre agora.</Alert.Link>
                        </Form.Text>
                        
                    </Form>
    
                </article>

            </section>
        </>

  );
}

export default SignUp;
