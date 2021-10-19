import styled from "styled-components"

const Containerinc = styled.div` 
display: flex;
justify-content: space-between;


.name2 > a {
    color: #8808ED !important;
}

.borda2 {
    border-color: #2DCDFF !important;
}
`
const ContainerINS = styled.div`
width: 100vw;
height: 100vh;
background-color: #F0FFFE;
.gra1 {
    width: 73vw;
    left: 18.5em;
    position: absolute;
    background-color: white;
    margin: 8em 0px;
    border-radius: 10px;
    padding: 1em;
}

.gra2 {
    width: 75vw;
    left: 18.5em;
    position: absolute;
    margin-top: 37em;
    background-color: white;
    border-radius: 10px;

    
}

.gra3 {
    width: 75vw;
    left: 18.5em;
    position: absolute;
    margin-top:63em;
    background-color: white;
    border-radius: 10px;

    
}

`

export {Containerinc, ContainerINS}