import React from 'react';
import './styles.css'
import DrawerToggleButton from '../SideDraweradm/DrawerToggleButton';
import logo from '../../assets/logo.png'

import Button from '@material-ui/core/Button'
import { Link, withRouter } from "react-router-dom"; 


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navegation">
            <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo "><img src={logo} /></div>
            <div className="spacer"></div>
            <div className="toolbar_navegation-itens "> 
                <ul>
                <li><Link to="/">Site</Link></li>
                <li><Link to="/admin">Mensagens</Link></li>
                <li><Link to="/imobiliaria">Imobiliaria</Link></li>
                <li><Link to="/user">Usuario</Link></li>
                <li>   <Button variant="outlined" color="primary"  onClick={ ()=>{sessionStorage.clear();  window.location.reload();;}  }>
                    sair
            </Button></li>
                </ul>
            </div>
        </nav>
    
    </header>
    
);

export default Toolbar;