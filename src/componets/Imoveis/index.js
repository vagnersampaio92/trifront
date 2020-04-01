import React from 'react'
import { Container, Imovel } from "./style"

const Imoveis = ({imos}) =>(
    <Container>
        { imos.map(imos => (
            <Imovel>
            <header>
                <img src={imos.img} />
                <strong>{imos.imobiliaria}</strong>
            </header>
            <ul>
                <li>Quartos:{imos.bedroom}</li>
                <li>Suítes:{imos.suit}</li>
                <li>Banheiros:{imos.wc}</li>
                <li>Garagem:{imos.garage}</li>
                <li>Valor:{imos.valor}</li>
                <li>Código:{imos.cod}</li>
            </ul>
            <a href={imos.url}>Acessar</a>
            </Imovel>
        ))}
        
      
     
    </Container>
);

export default Imoveis