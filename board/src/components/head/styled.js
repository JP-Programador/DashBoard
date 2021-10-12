import styled from 'styled-components'


const Container = styled.div`
background-color: #311273;
height: 10.6em;
margin-left: 15.4em;
color: white;
.box-info {
    display: flex;
    justify-content: space-between;
    padding: 2px 3em;
}

.box1 {
    display: flex;
    flex-direction: row;
    margin-left: 2em;

}

.messenger {
    margin-top: 1em;
}

b {
    color: #999999;
}
.dates {
    margin-right: 2em;

  
}
.dates, .schedule {
            display: flex;
            flex-direction: row;
            text-align: center;
            align-items: center;
            & > div {
        margin-right: .8em;
    }
}

.box-card {
    display: flex;
    justify-content: space-between;
    padding: 2px 1.5em 0em 3em;

    margin-top: 2.3em;
}

.card1 {
    display: inline-block;
    border: 1px solid white;
    border-radius: 10px;
    background-color: white;
    padding: 7px 1px 4px 12px;
    margin-right: 2em;

    width: 13em;
    height: 10em;

}

.car-name {
    margin-top: 1.2em;
    margin-bottom: 1em;
    color: black;
}

.car-resul {
    color: #00CD08;

}
`
export {Container}