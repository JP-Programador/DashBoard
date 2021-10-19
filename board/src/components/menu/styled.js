import styled from 'styled-components'

const Container = styled.div`
background-color: white;
width: 16em;
height: 100vh;
position: fixed;

border-top-right-radius: .5em;
border-bottom-right-radius: .5em;

font-family: Roboto;
font-weight: 400;

h6 {
    color: #8C8C8C;
    font-size: 15px;
    font-weight: 300;
}
a {
    text-decoration: none;
    color: black;
}

.name {
    text-align: center;
    margin-top: -1.8em;
}


.kkk {
    display: flex;
    flex-direction: column;
}
.log {
    margin-left: -7.5em;
    margin-top: -1.5em;
} 


.navs {
    margin-top: 3em;
}

.nav1 {

    display: flex;
    flex-direction: row;

    padding: 0em 25px;
    align-items: center;
    
    cursor: pointer;
    
    & h3:hover {
        color: #8808ED;
    }

   

}



.borda1, .borda2, .borda3 {
    border: 2px solid #CCF0FC;
    border-radius: 350em;

    width: .3em;
    height: .3em;

    margin-right: .5em;

   
}
`

export { Container}