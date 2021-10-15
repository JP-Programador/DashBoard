import styled from 'styled-components'

const Container = styled.div`
background-color: white;
width: 16em;
height: 100vh;
position: fixed;

border-top-right-radius: .5em;
border-bottom-right-radius: .5em;


a {
    text-decoration: none;
    color: black;
}

.name {
    margin-top: 9em;
    text-align: center;
}

.log {
    position: fixed;
    left: -8em;
    bottom: 48em;
} 

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