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
height: 100vh;
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
    top: 26em;
    left: 18.8em;
    display: flex;
    flex-direction: row;
}   
.gra3 {
    background-color: white;
    border-radius: 10px;

}
.gra2 {
   
    border-radius: 10px;
}

.react-calendar {
    border: none;
    border-radius: 10px;
    padding: 1em;
    }

`

export {Container, ContainerConteudo}
