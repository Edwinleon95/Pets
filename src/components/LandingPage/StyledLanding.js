import styled from "styled-components";



export const Div = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Quicksand:wght@300;500;700&display=swap');
    background-color: black;
    height:100vh;
    color: white;
    display: flex;
    font-family: 'Irish Grover', cursive;
    overflow: hidden;

    .menu-inicial{
        background-color: white;
        color: black;
        width: 135%;
        display: flex;
        justify-content: space-evenly;
        font-size: 32px;
    }
    .menu-inicial p:hover{
        text-decoration-line:underline;
    }
    .contenedor-izquierdo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
    }
    .contenedor-izquierdo .texto{
        font-size: 40px;
        margin-left: 10%;
    }

    .contenedor-izquierdo button {
        font-family: 'Irish Grover', cursive;
        width: 40%;
        font-size: 40px;
        margin-left: 10%;
        background-color: white;
    }
    .contenedor-izquierdo button:hover{
        background-color: red;
        color: white;
    }
    .contenedor-derecho{
        width: 50%;
    }

    .contenedor-derecho img {
        width: 100%;
        height: 100%;
    }

    @media (max-width:900px){
        overflow-y: auto;
        .contenedor-derecho {
            display: none;
        }
        .menu-inicial{
            width: 100%;
        }
        .contenedor-izquierdo{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
        .contenedor-izquierdo .texto{
            margin: 0;
        }
        .contenedor-izquierdo button {
            margin: 0;
        }
        @media (max-width:450px){
            .menu-inicial{
                font-size: 20px;
            }
            .contenedor-izquierdo .texto{
                font-size: 30px;
            }
            .contenedor-izquierdo button{
                font-size: 24px;;
            }
        }
    }
`;