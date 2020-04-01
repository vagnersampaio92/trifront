import React from 'react';
import './styles.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    
    </header>
);
export default Toolbar;