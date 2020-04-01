import React from 'react';
import './sideDrawer.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
const SideDrawer = props => {
    let drawerClasses = 'sideDrawer';
    if(props.show){
        drawerClasses='sideDrawer open';
    }
    return (
        <nav className={drawerClasses}>
         <ul>
                <li><Link to="/">Site</Link></li>
                <li><Link to="/admin">Mnsagens</Link></li>
                <li><Link to="/imobiliaria">Imobiliaria</Link></li>
                <li><Link to="/user">Usuario</Link></li>
                <li>   <Button variant="outlined" color="primary"  onClick={ ()=>{sessionStorage.clear();  window.location.reload();;}  }>
                    sair
            </Button></li>
                </ul>
        </nav>
    )
};

export default SideDrawer;