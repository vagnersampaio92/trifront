import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Main from '../pages/Main/index'
import Sobre from '../pages/Sobre/index'
import Contato from '../pages/Contato/index'
import Login from '../pages/Login/index'
import Adm from '../pages/Adm/index'
import { isAuthenticated } from "../auth";
import Imobiliaria from "../pages/Imobiliaria/index"
import User from "../pages/User/index"


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );




const Routes = () =>(
    <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Main} />
        <Route  path="/sobre" component={Sobre} />
        <Route  path="/contato" component={Contato} />
        <Route  path="/login" component={Login} />
        <PrivateRoute  path="/admin" component={Adm} />
        <PrivateRoute  path="/imobiliaria" component={Imobiliaria} />
        <PrivateRoute  path="/user" component={User} />
    </Switch>
    </BrowserRouter>
   
);
export default Routes