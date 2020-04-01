import React,{Component} from 'react'
import Toolbar from '../Toolbaradm/index';
import SideDrawer from '../SideDraweradm/index';
import Backdrops from '../Backdropadm/index';


export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            sideDrawerOpen: false,
            comentarios: []
          };
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState)=>{
          
          return{sideDrawerOpen: !prevState.sideDrawerOpen}
        })
      };
      backdropClickHandler = ()=>{
        this.setState({sideDrawerOpen: false})
      }
    render() {
        
        let backdrop;
        if(this.state.sideDrawerOpen){
          
          backdrop = <Backdrops click={this.backdropClickHandler} />
        }
        return (
          < div style={{height:'100%' }} >
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          
          </ div>
        );
      }
   
    }
