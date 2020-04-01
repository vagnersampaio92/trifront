import React, { Component } from 'react';
import Toolbar from '../../componets/Toolbar/index';
import SideDrawer from '../../componets/SideDrawer/index';
import Backdrops from '../../componets/Backdrop/index';
import { Container } from './style.js';
import Seletor from '../../componets/seletor/index'
import Imoveis from '../../componets/Imoveis/index'
import Menu from '../../componets/menu/index'



export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            sideDrawerOpen: false,
            comentarios: [
                
            ]
          };
    }
    comentar(comentario) {
        console.log("\/")
        console.log(comentario)
        
        this.setState({comentarios: comentario});
        
    }
      
      render() {
        
      
        return (
          < div style={{height:'100%' }} >
          <Menu/>
          <main>
            <Container>

               <Seletor comentar={this.comentar.bind(this)}/>
               <Imoveis imos={this.state.comentarios}/>

            </Container>

          </main>
    
          </div >
        );
      }
    }

