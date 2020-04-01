import React from 'react'
import { Container, Card } from "./style"
import Button from '@material-ui/core/Button'
import api from '../../services/api'

const Imoveis = ({menssagem}) =>(
   
    <Container>
    { menssagem.map(menssagem => (
       <Card>
       
        <ul>
            <li>Nome:{menssagem.nome}</li>
            <li>Assunto:{menssagem.email}</li>
            <li>Email:{menssagem.assunto}</li>
            <li>menssagem:{menssagem.mensagem}</li>
            <li> <Button variant="outlined" color="primary" style={{ marginBottom: 15, marginTop: 15  }} onClick={()=>apaga(menssagem._id,menssagem)}>
                    Apagar
            </Button></li>
        </ul>
       
       </Card>
    ))
    }
    
  
 
    </Container>
   

);
async function  apaga(params,menssagem) {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    

    try {
        const response = await api.delete('menssagem/'+params,config   )
        
        window.location.reload()

    } catch (err) {

    }
}

export default Imoveis