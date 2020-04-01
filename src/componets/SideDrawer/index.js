import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom'
const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses='sideDrawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
    )
};

export default SideDrawer;