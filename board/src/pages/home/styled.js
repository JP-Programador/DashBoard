import styled from "styled-components"

const Container = styled.div` 
display: flex;
justify-content: space-between;

.name1 > a {
    color: #8808ED !important;
}

.borda1 {
    border-color: #2DCDFF !important;
}



`
const ContainerConteudo = styled.div`
width: 100vw;
height: 52em;
background-color: #F0FFFE;

.gra2 {
   position: absolute;
   left: 18.7em;

    border-radius: 10px;
    margin-top: 10em;
    background-color: white;
    width: 63.5em;

    padding: 2em 0em;
}


`

export {Container, ContainerConteudo}
