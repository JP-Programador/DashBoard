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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}

.log {
    position: fixed;
    right: 61em;
    bottom: 33em;
} 


.navs {
    margin-top: 3em;
}

.nav1 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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