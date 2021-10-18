import styled from 'styled-components'


const Container = styled.div`
background-color: #230662;
height: 10.6em;
margin-left: 15.4em;
color: white;
font-family: Roboto;
font-weight: 400;
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
    margin-top: .4em;
    font-family: Gabriela;
    font-size: 22px;
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
    padding: 2px .5em 0em 3em;

    margin-top: 2.3em;

    font-weight: 700;
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
    margin-bottom: 1.6em;
    color: black;
}

.car-resul {
    color: #00CD08;

    font-size: 18px;
    font-weight: 900;
}
span {
    font-size: 14px;
}
.dates {

}

.schedule {


}

.box-card {

}
`
export {Container}