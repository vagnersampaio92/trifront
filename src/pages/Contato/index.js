import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../../componets/menu/index'
import { Container, Img, Card, Card2} from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Textarea } from '@material-ui/core';
import api from '../../services/api'


export default class Contato extends Component {
    constructor() {
        super();
     
        this.state = {
            nome:'',
            email:'',
            assunto:'',
            mensagem:''
        }
        this.baseState = this.state 
    }

    render() {
        
        
        return (
            <div style={{ width: '100%' }}>
            <Menu />

            <Container >
                <Card>
                    <header>
                    <Img src={logo} />
                </header>
                <Card2>
                            <h1>Contato</h1>
                            <TextField id="standard-basic" color="primary" onChange={ e => {this.setState({email: e.target.value})} } value={this.state.email} label="Email" />
                            <TextField id="standard-basic" color="primary" onChange={ e => {this.setState({nome: e.target.value})} } value={this.state.nome}  label="Nome"/>
                            <TextField id="standard-basic"  color="primary" onChange={ e => {this.setState({assunto: e.target.value})} } value={this.state.assunto} label="Assunto" />
                            <TextField id="standard-basic"  color="primary" onChange={ e => {this.setState({mensagem: e.target.value})} } value={this.state.mensagem} multiline="true" label="mensagem" style={{ marginBottom: 30 }}/>
                            <Button variant="outlined" color="primary" style={{ marginBottom: 50 }} onClick={() => this.buscar()}>
                            Enviar
            </Button>
                </Card2>
            </Card>
            </ Container>

            </div>

        );
      }

      async  buscar() {
        console.log()
        

        this.setState(this.baseState)
        // this.props.comentar(this.state.imos);
        // this.setState({imos});
        
        let data = {}
        data.nome=(this.state.nome)
        data.email=(this.state.email)
        data.assunto=(this.state.assunto)
        data.mensagem=(this.state.mensagem)
       
       
        console.log(data)

        try {
            const response = await api.post('menssagem', data  )
            console.log(response)
            alert("menssagem enviada")
        } catch (err) {

        }
    }
   
    }
