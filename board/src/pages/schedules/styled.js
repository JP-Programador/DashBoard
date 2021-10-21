import styled from "styled-components"

const Container = styled.div` 
display: flex;
justify-content: space-between;

.name3 > a {
    color: #8808ED !important;
}

.borda3 {
    border-color: #2DCDFF !important;
}

`
const ContainerConteudo = styled.div`
width: 100vw;
height: 62em;
background-color: #F0FFFE;

.gra1, .gra2 {
    left: 18.5em;
    position: absolute;
    background-color: white;
    margin-top: 12em;
    border-radius: 10px;
    width: 75vw;

}

.gra2 {
    margin-top: 42em;
}
`

export {Container, ContainerConteudo}