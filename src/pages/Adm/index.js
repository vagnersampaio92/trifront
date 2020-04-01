import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from '../../componets/menuadm/index'
import { Container, Img, Card, Card2} from './style.js';
import logo from '../../assets/logo.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import Menssagem from '../../componets/menssagem/index'


export default class Adm extends Component {
   

    constructor() {
        super();
     
        this.state = {
    
            menssagem: [
               
            ]
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
                        
                       {/* <h1>{sessionStorage.getItem('token')}</h1> */}
                            <Button variant="outlined" color="primary" style={{ marginBottom: 50 }} onClick={() => this.carrega()}>
                    Buscar Mensagens
            </Button>


            <Menssagem menssagem={this.state.menssagem}/>

                </Card2>
            </Card>
            </ Container>
        </div>



        );
      }
   

      async  buscar() {
        localStorage.clear();

    }
    async carrega(){
        this.setState(this.baseState)
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };
        

        try {
            const response = await api.get('menssagem',config   )
            
            this.setState({
                menssagem: response.data
            })
            
            console.log(this.state.menssagem)

        } catch (err) {

        }
    }
}