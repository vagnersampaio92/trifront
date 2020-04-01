import React from 'react'
import { Container, Card } from "./style"
import Button from '@material-ui/core/Button'
import api from '../../services/api'
import TextField from '@material-ui/core/TextField'
const Imoveis = ({ menssagem }) => (

    <Container>
        {menssagem.map(menssagem => (
            <Card>

                <ul>

                    <li><TextField id="standard-basic" color="primary" onChange={e => { menssagem.email = e.target.value }} defaultValue={menssagem.email} label="Email" /></li>
                    <li><TextField id="standard-basic" defaultValue={menssagem.nome} onChange={e => { menssagem.nome = e.target.value }} label="Nome" /></li>
                    <li><TextField id="standard-basic" label="Nova senha" onChange={e => { menssagem.Password = e.target.value; menssagem.flag = false }} /></li>
                    <li> <Button variant="outlined" color="primary" style={{ marginBottom: 15, marginTop: 15 }} onClick={() => apaga(menssagem._id, menssagem)}>
                        Salvar
            </Button>

                        <Button variant="outlined" color="primary" style={{ marginBottom: 15, marginTop: 15 }} onClick={() => apaga(menssagem._id, menssagem)}>
                            Excluir
            </Button>
                    </li>
                </ul>

            </Card>
        ))
        }



    </Container>


);
async function apaga(params, menssagem) {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };
    const data = {}

    data.nome = menssagem.nome
    data.email = menssagem.email
    data.Password = menssagem.Password
    if (menssagem.flag == true) {
        const response = await api.put('user/' + params, data, config)

        console.log(response)
    } else {
        try {
            console.log("troca senha")
            const response = await api.delete('user/' + params, config)

            response = await api.post('user', data, config)

            window.location.reload()
            console.log(response)
        } catch (err) {

        }

    }
    console.log(data)

}

export default Imoveis