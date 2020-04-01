import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-flow: 4;
    justify-content: center;
    width: 100%;
    height: auto;
    max-width: 1200px;
    flex-flow:row wrap;
  
    margin-top: 50px;
`;
export const Imovel = styled.div`
    width: 100%;
    margin-right:10px;
    margin-bottom: 10px;
    max-width: 250px;
    background: white;
    height: auto;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid #4397d0;
    display: flex;
    flex-direction: column;
    background: white;
    header{
        padding:30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 100%;
            max-width: 190px;
            height:150px;

        }
    }
    ul{
        list-style: none;
        margin-left: 15px;
        li{
           &:nth-child(2n - 1){
               background: #F5F5F5;
               padding-right: 30px;
           } 
        }
    }
    a{
        color:#4397d0;
        text-decoration: none;
       width: 100%;
        position: relative !important;
       padding-top: 50px;
       bottom: 0;
       text-align: center;
       margin-bottom: 20px;
       bottom: 0 !important;
    }
`;