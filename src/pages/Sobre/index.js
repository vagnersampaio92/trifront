import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../../componets/menu/index'
import { Container, Img, Card } from './style.js';
import logo from '../../assets/logo.png'


export default class Sobre extends Component {

    render() {


        return (
            <div style={{ width: '100%', alignItems: "center" }}>
                <Menu />

                <Container >
                    <Card>
                        <header>
                        <Img src={logo} />
                    </header>
                            <p>Com um mundo que cada dia surge uma inovação nova que facilita nossas vidas cada dia mais, uma área que está um pouco deixada de lado é a área imobiliária, com base nisso surgiu a ideia da startup Imóveis TRI, o qual tem o intuito de facilitar e agilizar a busca por imóveis, e baratear os custos de marketing para imobiliárias e aumentar a abrangência. </p>
                            <h3>O problema:</h3>
                            <p>Em Pelotas para seguir como exemplo, fazendo uma busca rápida no google constatei que possui 73 sites de imobiliárias, os quais constam milhares de imóveis, com isso para um usuário encontrar o imóvel perfeito é muito demorado, desgastante e um tanto quanto difícil, porque são muitos sites e a grande maioria são desconhecidos, porem mesmo os sites pequenos e um tanto quanto desconhecidos podem conter o imóvel perfeito para quem estava procurando.
</p>
                            <p>Olhando pelo lado das imobiliárias, as quais possui um problema, que é captar clientes com grande capacidade de aquisição com um baixo custo de investimento em marketing, esse problema se torna mais grave para as imobiliárias menores. Ao seguir como exemplo a cidade de Pelotas existe grandes imobiliárias como Casarão, Fuhro souto, Petry entre outras, e existe imobiliárias pequenas com JWS, Eduardo dias entre outras. Para imobiliárias menores é ainda mais difícil a competição tendo que investir ainda mais em marketing para competir em pé de igualdade.</p>
                           <p>O marketing imobiliária hoje é um tanto quanto retrógado, eles ainda usam panfletagem na rua, anuncio em jornal impresso os quais além de não ser  bom para o meio ambiente, pelo fato de que a grande maioria ser  descartado de forma inadequada, também muitas vezes é entregue para pessoas que não teria muito interesse adquirir ou alugar um imóvel, além disso ainda tem um custo elevado para as imobiliárias, visto que tem o custo dos planfletos, e custo humano para a entrega destes panfletos, outro problema é a abrangência deste método de propaganda a qual é muito restrita aos locais onde é entregue os panfletos, este método necessita que o cliente esteja no lugar certo na hora certa. O jornal sofre menos com os problemas ambientais por que só compra quem quer ler, porem ele tem o problema que geralmente quem gosta de lê-lo tem uma faixa etária maior, e com isso ele acaba não atingindo todas as faixas etárias e não tornado tão eficiente.
</p>    
                            <p>O marketing imobiliário digital, está abordagem é mais eficiente, visto que atinge as pessoas que realmente estão procurando imóveis, porem o problema deste método é o custo, quanto maior a abrangência maior o custo, e é nesta área que a imóveis TRI quer ajudar as imobiliárias.
</p>
                            <h3>A solução</h3>
                           <p>A  Imóveis TRI, em poucas palavras vai ser um buscador de imóveis existentes em sites de imobiliárias. Ele vai ser um site o qual os usuários iram colocar em um filtro exatamente oque está procurando em um imóvel e o site ira buscar de forma automática nos sites das imobiliárias, com isso ira facilitar muito as pesquisas por imóveis, de forma que o usuário não precisará acessar vários sites e ver milhares de imóveis para achar seu imóvel perfeito.</p>
                           <p>Pelo lado das imobiliárias, iremos fornecer as imobiliárias clientes com grande intenção de adquirir ou alugar um imóvel e com um custo baixo.  De forma simples ele ira diluir os custos de com o marketing entre as imobiliárias que estiverem no Imóveis TRI, outra ponto que iremos ajudar as imobiliárias que as imobiliárias menores terão as mesmas chances que as imobiliárias, por que quando o usuário fizer as buscas estas imobiliárias menores também serão pesquisadas e listadas junto com as grandes.
</p>
                           <h3>O sistema</h3>
                           <p>A Imóveis TRI utilizará um crawler, o qual irá ler os sites das imobiliárias a procura dos interesses que o usuário, e listar para o usuário apenas os imóveis que o interessa, com isso o usuário só precisa acessar um site ao invés de 73 como no exemplo de pelotas.</p>
                           <p>O sistema irá ser feito em Node.js no back-end , baseando o crawler na biblioteca cheerio, e o front-end irá ser usado react.</p>
                           
                           
                           <p>Esse projeto é um trabalho de conclusão de curso, de Sistemas para internet do Ifsul Pelotas do aluno Vagner Sampaio </p>
                    </Card>
                </ Container>
            </div>



        );
    }

}
