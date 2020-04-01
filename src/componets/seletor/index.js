import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Form, Container } from './style'
import api from '../../services/api'


       
    



export default class GroupedSelect extends Component {
    constructor() {
        super();
      
       
       
        this.state = {
            imoveltipo:'',
            acao: '',
            bairros: '',
            quartos: '',
            suite: '',
            banheiro: '',
            garagem: '',
            valormin: '',
            valormax: '',
            imos: [



            ],
          


        }
        
        this.baseState = this.state 
    }

   
    
  
  
    render() {
        
      
           
        
    

        
        
        return  (
           
            <Container>
                
                <FormControl style={{ marginRight: 10, minWidth: 130 }}>
                    <InputLabel htmlFor="grouped-select">Tipo</InputLabel>
                    <Select onChange={ e => {this.setState({imoveltipo: e.target.value})} }defaultValue="" input={<Input id="grouped-select" />}>
                        <MenuItem value="apartamento">apartamento</MenuItem>
                        <MenuItem value="apartamentoaltopadrão">Apartamento alto padrão</MenuItem>
                        <MenuItem value="casa">Casa</MenuItem>
                        <MenuItem value="casaaltopadrão">Casa alto padrão</MenuItem>
                        <MenuItem value="casacomercial">Casa Comercial</MenuItem>
                        <MenuItem value="casaduplex">Casa Duplex</MenuItem>
                        <MenuItem value="casacondominio">Casa Condominio</MenuItem>
                        <MenuItem value="cobertura"> Cobertura</MenuItem>
                        <MenuItem value="loft">Loft</MenuItem>
                        <MenuItem value="loja">Loja</MenuItem>
                        <MenuItem value="predio">Prédio</MenuItem>
                        <MenuItem value="salacomercial">Sala comercial</MenuItem>
                        <MenuItem value="sobrado">Sobrado</MenuItem>
                        <MenuItem value="terreno">Terreno</MenuItem>
                        <MenuItem value="terrenoemcondominio">Terreno em condominio</MenuItem>

                    </Select>
                </FormControl>
                <FormControl style={{ marginRight: 10, minWidth: 130 }}>
                    <InputLabel htmlFor="grouped-select">Alugar</InputLabel>
                    <Select onChange={ e => {this.setState({acao: e.target.value})} } defaultValue="" input={<Input id="grouped-select" />}>
                        <MenuItem value="alugar">Alugar</MenuItem>
                        <MenuItem value="venda">Comprar</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{ marginRight: 10, minWidth: 130 }}>
                    <InputLabel htmlFor="grouped-select">Bairro</InputLabel>
                    <Select onChange={ e => {this.setState({bairros: e.target.value})} }defaultValue="" input={<Input id="grouped-select" />}>
                        <MenuItem value="arco-iris">Arco-iris</MenuItem>
                        <MenuItem value="areal">Areal</MenuItem>
                        <MenuItem value="bairro-liberdade">Bairro Liberdade</MenuItem>
                        <MenuItem value="centro">Centro</MenuItem>
                        <MenuItem value="cohabpel">Cohabpel</MenuItem>
                        <MenuItem value="colina-do-sol">Colina do sol</MenuItem>
                        <MenuItem value="Fragata">Fragata</MenuItem>
                        <MenuItem value="guabiroba">Guabiroba</MenuItem>
                        <MenuItem value="laranjal">Laranjal</MenuItem>
                        <MenuItem value="lasacacias">Las acacias</MenuItem>
                        <MenuItem value="liberdade">Liberdade</MenuItem>
                        <MenuItem value="lindoia">Lindoia</MenuItem>
                        <MenuItem value="obelisco">Obelisco</MenuItem>
                        <MenuItem value="porto">Porto</MenuItem>
                        <MenuItem value="recanto-portugal">Recanto portugal</MenuItem>
                        <MenuItem value="residencial-15-de-julho">Residencial 15 de julho</MenuItem>
                        <MenuItem value="residencial-nova-tablada">Residencial nova tablada</MenuItem>
                        <MenuItem value="tres-vendas">Três vendas</MenuItem>
                        <MenuItem value="Umuarama">Umuarama</MenuItem>
                        <MenuItem value="zona-norte">Zona Norte</MenuItem>
                    </Select>
                </FormControl>
                <div>


                    <Form noValidate autoComplete="off">
                        <div>
                            <TextField id="standard-basic"  style={{ marginRight: 10, minWidth: 130 }}onChange={ e => {this.setState({quartos: e.target.value})} } value={this.state.quartos} label="Quartos" />
                            <TextField id="standard-basic"  style={{ marginRight: 10, minWidth: 130 }}onChange={ e => {this.setState({suite: e.target.value})} } value={this.state.suite} label="Suítes" />
                            <TextField id="standard-basic"  onChange={ e => {this.setState({banheiro: e.target.value})} } value={this.state.banheiro}label="Banheiros" />
                        </div>
                        <div>
                            <TextField id="standard-basic" style={{ marginRight: 10, minWidth: 130 }} onChange={ e => {this.setState({garagem: e.target.value})} } value={this.state.garagem} label="Vagas" />
                            <TextField id="standard-basic" style={{ marginRight: 10, minWidth: 130 }} onChange={ e => {this.setState({valormin: e.target.value})} } value={this.state.valormin} label="Valor Min" />
                            <TextField id="standard-basic"  onChange={ e => {this.setState({valormax: e.target.value})} } value={this.state.valormax} label="Valor Max" />
                        </div>

                    </Form>
                </div>
                <Button variant="outlined" color="primary" onClick={() => this.buscar(this.state.imos)}style={{ marginTop: 15,  }}>
                    Buscar
            </Button>


            </Container>
        )
    }
    


    
  
    async  buscar(imos) {
        console.log(imos)
        

        this.setState(this.baseState)
        // this.props.comentar(this.state.imos);
        // this.setState({imos});
        
        let data = {}
        data.bairros=[]
        data.acao= (this.state.acao)
        data.imoveltipo=(this.state.imoveltipo)
        data.bairros= data.bairros.concat(this.state.bairros)
        data.quartos=(this.state.quartos)
        data.suite=(this.state.suite)
        data.banheiro=(this.state.banheiro)
        data.garagem=(this.state.garagem)
        data.valormin=(this.state.valormin)  
        data.valormax=(this.state.valormax)
       
        console.log(data)

        try {
            const response = await api.post('crawlerController', data  )

            this.setState({
                imos: '',
                imos: [... this.state.imos, response.data]
            })
            console.log("resposta")
            console.log(response)
            this.props.comentar(this.state.imos[0]);
            //   this.setState({imos});

        } catch (err) {

        }
    }
}










// export default function GroupedSelect() {
//     const classes = useStyles();
// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         // light: will be calculated from palette.primary.main,
//         main: '#4397d0',
//         // dark: will be calculated from palette.primary.main,
//         // contrastText: will be calculated to contrast with palette.primary.main
//       },
//       secondary: {
//         light: '#0066ff',
//         main: '#0044ff',
//         // dark: will be calculated from palette.secondary.main,
//         contrastText: '#ffcc00',
//       },
//       // Used by `getContrastText()` to maximize the contrast between
//       // the background and the text.
//       contrastThreshold: 3,
//       // Used by the functions below to shift a color's luminance by approximately
//       // two indexes within its tonal palette.
//       // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
//       tonalOffset: 0.2,
//     },
//   });
  
  
//   const useStyles = makeStyles(theme => ({
//       formControl: {
//           margin: theme.spacing(1),
//           minWidth: 130,
//       },
//   }));
  

//     return (
//         <Container>
        //     <FormControl className={classes.formControl}>
        //     <InputLabel htmlFor="grouped-select">Tipo</InputLabel>
        //         <Select defaultValue="" input={<Input id="grouped-select" />}>
        //                 <MenuItem value="apartamento">apartamento</MenuItem>
        //                 <MenuItem value="apartamentoaltopadrão">Apartamento alto padrão</MenuItem>
        //                 <MenuItem value="casa">Casa</MenuItem>
        //                 <MenuItem value="casaaltopadrão">Casa alto padrão</MenuItem>
        //                 <MenuItem value="casacomercial">Casa Comercial</MenuItem>
        //                 <MenuItem value="casaduplex">Casa Duplex</MenuItem>
        //                 <MenuItem value="casacondominio">Casa Condominio</MenuItem>
        //                 <MenuItem value= "cobertura"> Cobertura</MenuItem>
        //                 <MenuItem value="loft">Loft</MenuItem>
        //                 <MenuItem value="loja">Loja</MenuItem>
        //                 <MenuItem value="predio">Prédio</MenuItem>
        //                 <MenuItem value="salacomercial">Sala comercial</MenuItem>
        //                 <MenuItem value="sobrado">Sobrado</MenuItem>
        //                 <MenuItem value="terreno">Terreno</MenuItem>
        //                 <MenuItem value="terrenoemcondominio">Terreno em condominio</MenuItem>

        //         </Select>
        //     </FormControl>
        //     <FormControl className={classes.formControl}>
        //         <InputLabel htmlFor="grouped-select">Alugar</InputLabel>
        //         <Select defaultValue="" input={<Input id="grouped-select" />}>


        //             <MenuItem value="alugar">Alugar</MenuItem>
        //             <MenuItem value="comprar">Comprar</MenuItem>
        //         </Select>
        //     </FormControl>
        //     <FormControl className={classes.formControl}>
        //         <InputLabel htmlFor="grouped-select">Bairro</InputLabel>
        //         <Select defaultValue="" input={<Input id="grouped-select" />}>
        //             <MenuItem value="arco-iris">Arco-iris</MenuItem>
        //             <MenuItem value="areal">Areal</MenuItem>
        //             <MenuItem value="bairro-liberdade">Bairro Liberdade</MenuItem>
        //             <MenuItem value="centro">Centro</MenuItem>
        //             <MenuItem value="cohabpel">Cohabpel</MenuItem>
        //             <MenuItem value="colina-do-sol">Colina do sol</MenuItem>
        //             <MenuItem value="Fragata">Fragata</MenuItem>
        //             <MenuItem value="guabiroba">Guabiroba</MenuItem>
        //             <MenuItem value="laranjal">Laranjal</MenuItem>
        //             <MenuItem value="lasacacias">Las acacias</MenuItem>
        //             <MenuItem value="liberdade">Liberdade</MenuItem>
        //             <MenuItem value="lindoia">Lindoia</MenuItem>
        //             <MenuItem value="obelisco">Obelisco</MenuItem>
        //             <MenuItem value="porto">Porto</MenuItem>
        //             <MenuItem value="recanto-portugal">Recanto portugal</MenuItem>
        //             <MenuItem value="residencial-15-de-julho">Residencial 15 de julho</MenuItem>
        //             <MenuItem value="residencial-nova-tablada">Residencial nova tablada</MenuItem>
        //             <MenuItem value="tres-vendas">Três vendas</MenuItem>
        //             <MenuItem value="Umuarama">Umuarama</MenuItem>
        //             <MenuItem value="zona-norte">Zona Norte</MenuItem>
        //         </Select>
        //     </FormControl>
        //    <div>


        //     <Form className={classes.formControl} noValidate autoComplete="off">
        //         <div>
        //         <TextField id="standard-basic" label="Quartos" />
        //         <TextField id="standard-basic" label="Suítes" />
        //         <TextField id="standard-basic" label="Banheiros" />
        //         </div>
        //         <div>
        //         <TextField id="standard-basic" label="Vagas" />
        //         <TextField id="standard-basic" label="Valor Min" />
        //         <TextField id="standard-basic" label="Valor Max" />
        //         </div>

        //     </Form>
        //     </div>
        //     <Button  className={classes.formControl} theme={theme} variant="outlined" color="primary">
        //             Buscar
        //     </Button>

//         </Container>
//     );
// }