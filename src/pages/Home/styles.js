import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #577D86;
    padding-top: 20px;
`
export const DivH1 = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        font-weight: 900;
        color: #FFFFFF;
        @media (min-width: 320px) {
            margin-top: auto;
        }
    }
`
export const DivSearch = styled.div`
    width: 100%;
    height: 10vh;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;

    input{
        width: 40%;
        height: 50px;
        padding-left: 15px;
        border-radius: 8px;
        border: none;
        @media (min-width: 1280px){
            width: 40%;
        }
        @media (max-width: 500px){
            width: 52%;
        }
        @media (max-width: 320px) {
            width: 55%;
        }
    }
    input:focus{
        outline: none;
    }
    button{
        width: 100px;
        height: 50px;
        font-size: 30px;
        cursor: pointer;
        background-color: grey;
        border-radius: 8px;
        border: none;
        background-color: #559DAA;
        color: #FFFFFF;
        @media (max-width: 320px) {
            width: 20%;
            font-size: 20px;
        }
    }
    button:hover{
        opacity: 0.8;
    }
`
export const ContainerTarefas = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    justify-content: center;
`
export const DivLista = styled.div`
    width: 90%;
    height: 100%;
    max-height: 1000px;
    overflow-y: scroll;
    background-color: #569DAA;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    ul{
        padding: 0;
    }
    @media (min-width: 1280px){
        width: 50%;
    }
    @media (max-width: 1280px){
        width: 50%;
    }
    @media (max-width: 1024px){
        width: 55%;
    }
    @media (max-width: 768px){
        width: 70%;
    }
    @media (max-width: 425px){
        width: 90%;
    }
`
export const User = styled.div`
    width: 70%;
    height: auto;
    min-height: 50px;
    max-height: 10000px;
    display: block;
    margin: 10px auto 10px auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.completed ? '#3CB371' : '#393646'};
    padding: 0 20px;
    p{
        color: #ffffff;
        text-decoration: ${props => props.completed ? 'line-through' : 'none'};
        width: 70%;
        word-wrap: break-word;
    }
`
export const DivTarefas = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media (max-width: 500px){
        gap: 5px;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
        font-size: 20px;
        color: #ffffff;
        @media (max-width: 320px) {
            font-size: 15px;
        }
    }
    
    button:first-child:hover{
        color: green;
    }
    button:last-child:hover{
        color: red;
    }
    .button-completed{
        display: none;
    }
`