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
height: 180vh;
background-color: #F0FFFE;


.gra1 {
    width: 75vw;
    left: 18.5em;
    position: absolute;
    background-color: white;
    margin: 8em 0px;
    border-radius: 10px;
}

.box-gra {
    position: absolute;
    top: 46em;
    left: 18.8em;
    display: flex;
justify-content:space-between}   
.gra3 {
    background-color: white;
    border-radius: 10px;

}
.gra2 {
    background-color: white;
    margin-right: 7em;
    border-radius: 10px;
}
`

export {Container, ContainerConteudo}
