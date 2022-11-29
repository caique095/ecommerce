import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './Search.css';


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
                    className="w-100 p-3"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Pesquisar..."
                />

            </section>

        </Container>
    );
}

export default Search;