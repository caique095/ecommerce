import './team.css';
import { useState } from "react";

// Components
import Time from '../../components/team/time/time';
import team from '../team/team.json';

// React Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Team() {
    return(

            <section className="">
                <Container>

                    <div className="row my-3">
                        {team.map((item) => (  
                            <div className="col-6 col-md-3">                     
                                <Time key={item.nome} {...item} /> 
                            </div>
                       ))};
                                
                    </div>
                    
                </Container>
            </section>

    );
}

export default Team;