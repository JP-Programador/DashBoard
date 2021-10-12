import styled from "styled-components"

const Container = styled.div` 
display: flex;
justify-content: space-between;

.name1 > h3 {
    color: #8808ED;
}

`
const ContainerConteudo = styled.div`
width: 100vw;
height: 200vh;
background-color: #F0FFFE;


.gra1 {
    width: 73vw;
    left: 18.5em;
    position: absolute;
    background-color: white;
    margin: 8em 0px;
    border-radius: 10px;
}

.box-gra {
    position: absolute;
    top: 53em;
    left: 12em;
    display: flex;
    flex-direction: row;
}   
.gra3 {
    margin-left: 4em;
}
`

export {Container, ContainerConteudo}
