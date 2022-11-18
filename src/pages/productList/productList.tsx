import productList from './productList.json';
import { useState, useEffect } from "react";
import React from 'react';
import List from '../../pages/productList/list/list'
import Container from 'react-bootstrap/Container';

interface Props {
    busca: string
}

function Lista(props: Props) {
    const [lista, setLista] = useState(productList);
    const {busca} = props;

function testaBusca(nome: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(nome);
}

    useEffect(() => {
        const novaLista = productList.filter(item => testaBusca(item.nome));
        setLista(novaLista);
    }, [busca]);

return (
    <Container>
        <div className="row my-5">
            {lista.map((item) => (
                <div className="col-sm-6 col-md-3">
                    <List key={item.nome} {...item} />
                </div>
            ))};
        </div>
    </Container>
)

}
export default Lista;
