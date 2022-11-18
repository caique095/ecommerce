import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Search.css';


const produtos = [
    {
        srcImg:"/IMG/Produtos/1.png",  
        nome:"Airpods",  
        preco:"R$ 99,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/3.png",  
        nome:"Headphone Preto",  
        preco:"R$ 42,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/7.png",  
        nome:"Headphone Amarelo",  
        preco:"R$ 50,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/8.png",  
        nome:"Airpods Rosa",  
        preco:"R$ 69,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/4.png",  
        nome:"Caixa de som",  
        preco:"R$ 90,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/5.png",  
        nome:"Smartwatch Vermelho",  
        preco:"R$ 59,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/6.png",  
        nome:"Fone preto",  
        preco:"R$ 99,00", 
        url:""
    },
    {
        srcImg:"/IMG/Produtos/2.png",  
        nome:"Headphone Branco",  
        preco:"R$ 80,00", 
        url:""
    }
]


const nomeProdutos = [
    'Airpods',
    'Headphone Preto',
    'Headphone Amarelo',
    'Airpods Rosa',
    'Caixa de som',
    'Smartwatch Vermelho',
    'fone preto',
    'Headphone Branco'
];

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ busca, setBusca }: Props){

    return (
        <Container>

            <section className="d-flex align-items-center mt-4" id="all-search">

                <input 
                    type="text"
                    id="search-bar"
                    className="w-100 p-3 rounded-pill"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Pesquisar..."
                />

            </section>

        </Container>
    );
}

export default Search;